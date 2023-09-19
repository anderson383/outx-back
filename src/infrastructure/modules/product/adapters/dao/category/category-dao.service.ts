import { CategoryDao } from 'src/domain/product/dao/category.dao';
import { CategoryListForClientDto } from 'src/application/comanders/dtos/category.dto';
import { EntityManager } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';

@Injectable()
export class CategoryDaoService implements CategoryDao {
  constructor(@InjectEntityManager() private entityManager: EntityManager) {}
  listCategoryForClient(): Promise<CategoryListForClientDto[]> {
    const query = this.entityManager.createQueryBuilder<CategoryListForClientDto>('Category', 'cat')
      .select(['cat.id', 'cat.name', 'cat.images', 'cat.order']).orderBy('cat.order');

    return query.getMany();
  }
}
