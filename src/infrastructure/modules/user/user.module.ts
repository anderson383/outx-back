import { UserDao } from 'src/domain/user/dao/dao-user';

import { CreateUserHandler } from 'src/application/comanders/user/create-user.handler';
import { DaoUserService } from './adapter/dao/dao-user-service';
import { GetUserAuthHandler } from 'src/application/consults/user/get-user.handler';
import { ListUserHandler } from 'src/application/consults/user/list-user.handler';
import { Module } from '@nestjs/common';
import { RepositoryUser } from 'src/domain/user/repository/repository-user';
import { RepositoryUserService } from './adapter/repository/repository-user.service';
import { UserController } from './controllers/user.controller';

@Module({
  providers: [
  ListUserHandler,
  GetUserAuthHandler,
  CreateUserHandler,
  {
  provide: UserDao,
  useClass: DaoUserService
  },
  {
  provide: RepositoryUser,
  useClass: RepositoryUserService
  }
  ],
  exports: [{
  provide: UserDao,
  useClass: DaoUserService
  },
  {
  provide: RepositoryUser,
  useClass: RepositoryUserService
  }],
  controllers: [UserController]
  })
export class UserModule {}

