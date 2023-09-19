
import {
  Injectable, UnauthorizedException
} from '@nestjs/common';
import { AuthDao } from 'src/domain/auth/dao/auth.dao';
import { AuthDto } from 'src/application/comanders/dtos/auth.dto';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthDaoService implements AuthDao {
  constructor(
    // private readonly userService: UsersService,
    private jwtService: JwtService,
  ) {}
  async validateRoles(): Promise<string> {
    return '';
  }

  async login(userCredentials: AuthDto) {
    // const findUser = await this.userService.getByEmail(userCredentials.email);
    const findUser:any = {};
    const validUser = await this.validateUserCredentials(
      userCredentials.password,
      findUser.password,
    );

    if (findUser && validUser) {
      // return {token: this.jwtService.sign({
      //   id: findUser.id,
      //   name: findUser.name,
      //   identification: findUser.identification,
      //   state: findUser.state,
      //   email: findUser.email
      // })};
      return 'login succesfull';
    }
    throw new UnauthorizedException();
  }

  async validateUserCredentials(
    passwordCredential: string,
    passwordUser: string,
  ) {
    return await compare(passwordCredential, passwordUser);
  }
}
