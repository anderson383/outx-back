import { AuthDao } from 'src/domain/auth/dao/auth.dao';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetUserRolesHandler {
  constructor(private _daoUser: AuthDao) {}
  async execute(): Promise<string> {
    return this._daoUser.validateRoles();
  }
}
