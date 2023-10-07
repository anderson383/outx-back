import { ConfigurationDao } from 'src/domain/configuration/dao/configuration.dao';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetGenericListHandler {
  constructor(private _daoConfig: ConfigurationDao) {}

  async getOneForCode(code: string): Promise<any> {
    return this._daoConfig.getOneForCode(code);
  }

  async getAllForCodes(codes:string[]): Promise<any> {
    return this._daoConfig.getAllForCodes(codes);
  }
}
