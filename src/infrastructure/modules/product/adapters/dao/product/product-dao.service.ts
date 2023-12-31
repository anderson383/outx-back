import { EntityManager } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { ProductCategoryDto } from 'src/application/comanders/dtos/product.dto';
import { ProductDao } from 'src/domain/product/dao/product.dao';

@Injectable()
export class ProductDaoService implements ProductDao {
  constructor(@InjectEntityManager() private entityManager: EntityManager) {}

  listProductForCategory(idCategory:string): Promise<ProductCategoryDto[]> {
    const query = this.entityManager
      .createQueryBuilder<ProductCategoryDto>('Product', 'prod')
      .select(['prod.id', 'prod.name', 'prod.description', 'prod.images'])
      .where('prod.category = :category', {category: idCategory});

    return query.getMany();
  }
}
