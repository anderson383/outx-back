import {
  Body, Controller, Post
} from '@nestjs/common';
import { AuthCredentialsDto } from 'src/application/comanders/dtos/auth.dto';
import { SignInUserHandler } from 'src/application/consults/auth/sign-in-user.handler';

@Controller('auth')
export class AuthController {
  constructor(private _signInUserHandler: SignInUserHandler) {

  }
  @Post('sign-in')
  signIn(@Body() credentials: AuthCredentialsDto) {
    return this._signInUserHandler.execute(credentials);
  }
}
