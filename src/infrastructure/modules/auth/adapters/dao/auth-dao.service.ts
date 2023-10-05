
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
}
