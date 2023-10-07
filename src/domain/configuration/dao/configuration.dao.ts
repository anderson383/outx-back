import {
  CategoryCampusEntity, CategoryCompanyEntity
} from 'src/infrastructure/modules/configuration/entities/category-campus.entity';

export abstract class ConfigurationDao {
  abstract getCategoriesCompany(): Promise<CategoryCompanyEntity[]>;

  abstract getCategoriesCampus(idCategory:string): Promise<CategoryCampusEntity[]>;

  abstract getOneForCode(code: string): Promise<any>

  abstract getAllForCodes(codes:string[]): Promise<any>
}
