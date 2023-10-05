import {
  ExtractJwt, Strategy
} from 'passport-jwt';
import {
  Injectable, UnauthorizedException
} from '@nestjs/common';
import { GetUserRolesHandler } from '../../../../application/consults/auth/get-user-roles.handler';

import { AuthDto } from 'src/application/comanders/dtos/auth.dto';
import { PassportStrategy } from '@nestjs/passport';
import { SECRET_KEYJWT } from 'src/infrastructure/config/constants/jwt';
import { UserDao } from 'src/domain/user/dao/dao-user';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private _userDao: UserDao,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: SECRET_KEYJWT
    });
  }

  async validate(userPayload: AuthDto): Promise<any> {
    // Validate user roles
    console.log(userPayload);
    const user = await this._userDao.getUserByEmail(userPayload.email);

    if (!user) {
      throw new UnauthorizedException();
    }

    console.log(user);

    return {
      id: user.id,
      name: user.name,
      email: user.email
    };
  }
}
