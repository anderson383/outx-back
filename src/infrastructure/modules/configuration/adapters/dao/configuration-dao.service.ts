import {
  CategoryCampusEntity, CategoryCompanyEntity
} from 'src/infrastructure/modules/configuration/entities/category-campus.entity';
import {
  EntityManager, In
} from 'typeorm';
import { ConfigurationDao } from 'src/domain/configuration/dao/configuration.dao';
import {Injectable} from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { ListItemEntity } from '../../entities/list-item.entity';
import { ListTypeEntity } from '../../entities/list-type.entity';

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

  getOneForCode(code: string): Promise<ListItemEntity[]> {
    const query = this.entityManager.createQueryBuilder<ListItemEntity>('ListItem', 'li')
      .select(['li.id', 'li.name', 'li.code', 'li.description'])
      .innerJoin('li.listType', 'listType')
      .where('listType.code = :code', {code});

    return query.getMany();
  }
  getAllForCodes(codes: string[]): Promise<ListTypeEntity[]> {
    const query = this.entityManager.createQueryBuilder<ListTypeEntity>('ListType', 'lt')
      .leftJoinAndSelect('lt.listItem', 'listItem')
      .select(['lt.id', 'lt.name', 'lt.code', 'lt.description', 'listItem'])

      .where({ code: In(codes) });

    return query.getMany();
  }
}
