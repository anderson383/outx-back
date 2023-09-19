
import { CategoryDao } from 'src/domain/product/dao/category.dao';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListCategoryHandler {
  constructor(private _categoryDao: CategoryDao) {}
  async execute() {
    return this._categoryDao.listCategoryForClient();
  }
}
