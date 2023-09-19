import {
  Controller, Get
} from '@nestjs/common';
import { ListCategoryHandler } from 'src/application/consults/product/category/list-category.handler';

@Controller('category')
export class CategoryController {
  constructor(
    private _listCategoryHandler: ListCategoryHandler
  ) {}

  @Get('/list-client')
  async list() {
    return this._listCategoryHandler.execute();
  }
}
