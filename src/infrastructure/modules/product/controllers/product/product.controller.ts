import {
  Controller, Get, Param
} from '@nestjs/common';
import { ListProductHandler } from 'src/application/consults/product/product/list-product.handler';

@Controller('product')
export class ProductController {
  constructor(
    private _listProductHandler: ListProductHandler
  ) {}
  @Get('list-category/:id')
  async listProductForCategory(@Param('id') idCategory:string) {
    return this._listProductHandler.execute(idCategory);
  }
}
