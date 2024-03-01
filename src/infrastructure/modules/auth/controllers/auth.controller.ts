import {
  AuthCredentialsDto, AuthDataSignDto
} from 'src/application/comanders/dtos/auth.dto';
import {
  Body, Controller, Post
} from '@nestjs/common';
import { SignInUserHandler } from 'src/application/consults/auth/sign-in-user.handler';
import { SignUpUserHandler } from 'src/application/consults/auth/sign-up-user.handler';

@Controller('auth')
export class AuthController {
  constructor(
    private _signInUserHandler: SignInUserHandler,
    private _signUpUserHandler: SignUpUserHandler
  ) {

  }
  @Post('sign-in')
  signIn(@Body() credentials: AuthCredentialsDto) {
    console.log('credentials', credentials);

    return this._signInUserHandler.execute(credentials);
  }

  @Post('sign-up')
  signUp(@Body() dataSignUp: AuthDataSignDto) {
    console.log(dataSignUp, 'TransformInterceptor');

    return this._signUpUserHandler.execute(dataSignUp);
  }
}
