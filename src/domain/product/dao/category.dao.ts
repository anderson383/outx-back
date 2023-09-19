import { CategoryListForClientDto } from 'src/application/comanders/dtos/category.dto';

export abstract class CategoryDao {
  abstract listCategoryForClient (): Promise<CategoryListForClientDto[]>;
}
