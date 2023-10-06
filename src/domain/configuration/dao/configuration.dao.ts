import {
  CategoryCampusEntity, CategoryCompanyEntity
} from 'src/infrastructure/modules/configuration/entities/category-campus.entity';

export abstract class ConfigurationDao {
  abstract getCategoriesCompany(): Promise<CategoryCompanyEntity[]>;

  abstract getCategoriesCampus(idCategory:string): Promise<CategoryCampusEntity[]>;
}
