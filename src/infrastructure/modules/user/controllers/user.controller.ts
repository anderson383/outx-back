import {
  Body,
  Controller, Get, Param, Post, Request, UseGuards
} from '@nestjs/common';
import { AuthCustomGuard } from '../../auth/guards/auth.guard';
import { CreateUserHandler } from 'src/application/comanders/user/create-user.handler';
import { GetUserAuthHandler } from 'src/application/consults/user/get-user.handler';
import { ListUserHandler } from 'src/application/consults/user/list-user.handler';
import { UserCreateDto } from 'src/application/comanders/dtos/user-create.dto';

@Controller('user')
export class UserController {
  constructor(
    private _listUser: ListUserHandler,
    private _createUser: CreateUserHandler,
    private _getUserAuth: GetUserAuthHandler
  ) {}

  @Get('/list')
  async list() {
    return this._listUser.execute();
  }

  @UseGuards(AuthCustomGuard)
  @Get('/detail-user')
  async getUserAuth(@Request() req) {
    console.log('Hola!! xd', req.user);

    return this._getUserAuth.execute(req.user.id);
  }

  @Post()
  async save(@Body() createUser: UserCreateDto) {
    return this._createUser.execute(createUser);
  }
}
