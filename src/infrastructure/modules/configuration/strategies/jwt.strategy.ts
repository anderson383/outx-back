import {
  ExtractJwt, Strategy
} from 'passport-jwt';
import {
  Injectable, UnauthorizedException
} from '@nestjs/common';

import { AuthDto } from 'src/application/comanders/dtos/auth.dto';
import { PassportStrategy } from '@nestjs/passport';
import { SECRET_KEYJWT } from 'src/infrastructure/config/constants/jwt';

@Injectable()
export class JwtTableStrategy extends PassportStrategy(Strategy) {
  constructor(
    // private _getUserRoles: GetUserRolesHandler
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: SECRET_KEYJWT
    });
  }

  async validate(userPayload: AuthDto): Promise<any> {
    // Validate user roles
    const user = {};

    // if (!user) {
    //   throw new UnauthorizedException();
    // }

    return true;
  }
}
