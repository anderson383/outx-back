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

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private _getUserRoles: GetUserRolesHandler
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: SECRET_KEYJWT
    });
  }

  async validate(userPayload: AuthDto): Promise<any> {
    // Validate user roles
    const user = await this._getUserRoles.execute();

    if (!user) {
      throw new UnauthorizedException();
    }

    return {
      // id: user.id,
      // name: user.name,
      // identification: user.identification,
      // state: user.state,
      // email: user.email
    };
  }
}
