import { ConfigurationDao } from 'src/domain/configuration/dao/configuration.dao';
import { EntityManager } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import {
  CategoryCampusEntity, CategoryCompanyEntity
} from 'src/infrastructure/modules/configuration/entities/category-campus.entity';

@Injectable()
export class ConfigurationDaoService implements ConfigurationDao {
  constructor(@InjectEntityManager() private entityManager: EntityManager) {}

  getCategoriesCompany(): Promise<CategoryCompanyEntity[]> {
    const query = this.entityManager.createQueryBuilder<CategoryCompanyEntity>('CategoryCompany', 'cat')
      .select(['cat.id', 'cat.name', 'cat.description']).orderBy('cat.order');

    return query.getMany();
  }

  getCategoriesCampus(category: string): Promise<CategoryCampusEntity[]> {
    const query = this.entityManager.createQueryBuilder<CategoryCampusEntity>('CategoryCampus', 'cat')
      .select(['cat.id', 'cat.name', 'cat.description'])
      .where('cat.categoryCompany = :category', {category})
      .orderBy('cat.order');

    return query.getMany();
  }
}
