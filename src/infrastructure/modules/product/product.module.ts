import { ListProductHandler } from 'src/application/consults/product/product/list-product.handler';
import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product/product.controller';
import { ProductDao } from 'src/domain/product/dao/product.dao';
import { ProductDaoService } from './adapters/dao/product/product-dao.service';

@Module({
  providers: [
  ListProductHandler,
  {
  provide: ProductDao,
  useClass: ProductDaoService
  }
  ],
  controllers: [
  ProductController
  ]
  })
export class ProductModule {}
