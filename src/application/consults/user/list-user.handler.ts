import { Injectable } from '@nestjs/common';
import { UserDao } from '../../../domain/user/dao/dao-user';
import { UserListDto } from 'src/application/comanders/dtos/user-list.dto';

@Injectable()
export class ListUserHandler {
  constructor(private _daoUser: UserDao) {}

  async execute(): Promise<UserListDto[]> {
    return this._daoUser.list();
  }
}
