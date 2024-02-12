import {
  compare, hash
} from 'bcrypt';
import {
  Injectable, UnauthorizedException
} from '@nestjs/common';
import { AuthCredentialsDto } from 'src/application/comanders/dtos/auth.dto';
import { AuthDao } from 'src/domain/auth/dao/auth.dao';
import { authFireBase } from 'src/main';
import { JwtService } from '@nestjs/jwt';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { UserDao } from 'src/domain/user/dao/dao-user';

export interface LoginResponse {
  accessToken: string;
  refreshToken: string
}
@Injectable()
export class SignInUserHandler {
  constructor(
    private _daoUser: AuthDao,
    private _userDao: UserDao,
    private jwtService: JwtService
  ) {}
  public async execute(authCredentils: AuthCredentialsDto): Promise<LoginResponse> {
    try {
      const {
        email, password
      } = authCredentils;

      const userAuth = await signInWithEmailAndPassword(
        authFireBase,
        email,
        password,
      );

      const findUser = await this._userDao.getUserByUid(userAuth.user.uid);

      if (findUser) {
        return await this.getTokens({
          sub: findUser.id,
          id: findUser.id,
          name: findUser.name,
          email: findUser.email
        });
      }
    } catch (err) {
      console.error(err);
      throw new UnauthorizedException('Credenciales del usuario invalidas');
    }

    throw new UnauthorizedException();
  }

  async validateUserCredentials(
    passwordCredential: string,
    passwordUser: string,
  ) {
    return await compare(passwordCredential, passwordUser);
  }

  async getTokens(user) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(user, { expiresIn: '30m' }),
      this.jwtService.signAsync(user, { expiresIn: '7d' })
    ]);

    return {
      accessToken,
      refreshToken
    };
  }
}
