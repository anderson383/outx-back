
import { ConfigurationDao } from 'src/domain/configuration/dao/configuration.dao';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListCategoryHandler {
  constructor(private _categoryDao: ConfigurationDao) {}
  async execute() {
    return this._categoryDao.getCategoriesCompany();
  }
}
