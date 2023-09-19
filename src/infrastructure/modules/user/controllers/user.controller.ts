import {
  Body,
  Controller, Get, Param, Post
} from '@nestjs/common';
import { CreateUserHandler } from 'src/application/comanders/user/create-user.handler';
import { ListUserHandler } from 'src/application/consults/user/list-user.handler';
import { UserCreateDto } from 'src/application/comanders/dtos/user-create.dto';

@Controller('user')
export class UserController {
  constructor(
    private _listUser: ListUserHandler,
    private _createUser: CreateUserHandler
  ) {}

  @Get('/list')
  async list() {
    return this._listUser.execute();
  }

  @Post()
  async save(@Body() createUser: UserCreateDto) {
    return this._createUser.execute(createUser);
  }
}
