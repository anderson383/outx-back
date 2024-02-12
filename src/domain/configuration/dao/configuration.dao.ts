import {
  CategoryCampusEntity, CategoryCompanyEntity
} from 'src/infrastructure/modules/configuration/entities/category-campus.entity';
import { ListItemEntity } from 'src/infrastructure/modules/configuration/entities/list-item.entity';
import { ListTypeEntity } from 'src/infrastructure/modules/configuration/entities/list-type.entity';

export abstract class ConfigurationDao {
  abstract getCategoriesCompany(): Promise<CategoryCompanyEntity[]>;

  abstract getCategoriesCampus(idCategory:string): Promise<CategoryCampusEntity[]>;

  abstract getOneForCode(code: string): Promise<ListItemEntity[]>

  abstract getAllForCodes(codes:string[]): Promise<ListTypeEntity[]>
}
