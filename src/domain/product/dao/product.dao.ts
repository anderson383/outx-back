import { ProductCategoryDto } from 'src/application/comanders/dtos/product.dto';

export abstract class ProductDao {
  abstract listProductForCategory (idCategory:string): Promise<ProductCategoryDto[]>;
}
