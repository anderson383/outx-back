import { AuthController } from './controllers/auth.controller';
import { AuthDao } from 'src/domain/auth/dao/auth.dao';
import { AuthDaoService } from './adapters/dao/auth-dao.service';
import { ConfigurationModule } from '../configuration/configuration.module';
import { GetUserRolesHandler } from 'src/application/consults/auth/get-user-roles.handler';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { SECRET_KEYJWT } from 'src/infrastructure/config/constants/jwt';
import { SignInUserHandler } from 'src/application/consults/auth/sign-in-user.handler';
import { SignUpUserHandler } from 'src/application/consults/auth/sign-up-user.handler';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    UserModule,
    ConfigurationModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: SECRET_KEYJWT,
      signOptions: { expiresIn: '1h' }
    })
  ],
  providers: [
    SignInUserHandler,
    SignUpUserHandler,
    GetUserRolesHandler,
    JwtStrategy,
    {
      provide: AuthDao,
      useClass: AuthDaoService
    }
  ],
  controllers: [
    AuthController
  ]
})
export class AuthModule {}
