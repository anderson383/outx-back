import { CategoryController } from './controllers/category/category.controller';
import { CategoryDao } from 'src/domain/product/dao/category.dao';
import { CategoryDaoService } from './adapters/dao/category/category-dao.service';
import { ListCategoryHandler } from 'src/application/consults/product/category/list-category.handler';
import { ListProductHandler } from 'src/application/consults/product/product/list-product.handler';
import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product/product.controller';
import { ProductDao } from 'src/domain/product/dao/product.dao';
import { ProductDaoService } from './adapters/dao/product/product-dao.service';

@Module({
  providers: [
    ListCategoryHandler,
    ListProductHandler,
    {
      provide: CategoryDao,
      useClass: CategoryDaoService
    },
    {
      provide: ProductDao,
      useClass: ProductDaoService
    }
  ],
  controllers: [
    CategoryController,
    ProductController
  ]
})
export class ProductModule {}
