import {
  compare, hash
} from 'bcrypt';
import {
  Injectable, UnauthorizedException
} from '@nestjs/common';
import { AuthCredentialsDto } from 'src/application/comanders/dtos/auth.dto';
import { AuthDao } from 'src/domain/auth/dao/auth.dao';
import { JwtService } from '@nestjs/jwt';
import { UserDao } from 'src/domain/user/dao/dao-user';

@Injectable()
export class SignInUserHandler {
  constructor(
    private _daoUser: AuthDao,
    private _userDao: UserDao,
    private jwtService: JwtService
  ) {}
  async execute(authCredentils: AuthCredentialsDto): Promise<{accessToken: string, refreshToken: string}> {
    const findUser = await this._userDao.getUserByEmail(authCredentils.email);

    const validUser = await this.validateUserCredentials(
      authCredentils.password,
      findUser.password,
    );

    if (findUser && validUser) {
      return await this.getTokens({
        sub: findUser.id,
        id: findUser.id,
        name: findUser.name,
        email: findUser.email
      });
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
