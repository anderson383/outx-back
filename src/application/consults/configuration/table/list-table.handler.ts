import { Injectable } from '@nestjs/common';
import { TableDao } from 'src/domain/product/dao/table.dao';

@Injectable()
export class ListTableHandler {
  constructor(private _tableDao: TableDao) {

  }
  async execute() {
    return this._tableDao.listTableForConfig();
  }
}
