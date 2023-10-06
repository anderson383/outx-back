import { ConfigurationDao } from 'src/domain/configuration/dao/configuration.dao';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetCategoryHandler {
  constructor(private _daoConfig: ConfigurationDao) {}

  async execute(): Promise<any> {
    return this._daoConfig.getCategoriesCompany();
  }

  async executeForCampus(id:string): Promise<any> {
    return this._daoConfig.getCategoriesCampus(id);
  }
}
