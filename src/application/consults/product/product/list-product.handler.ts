
import { CategoryDao } from 'src/domain/product/dao/category.dao';
import { Injectable } from '@nestjs/common';
import { ProductDao } from 'src/domain/product/dao/product.dao';

@Injectable()
export class ListProductHandler {
  constructor(private _productDao: ProductDao) {}
  async execute(idCategory:string) {
    return this._productDao.listProductForCategory(idCategory);
  }
}
