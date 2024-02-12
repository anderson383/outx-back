import {
  Column, Entity, ManyToOne
} from 'typeorm';
import { BaseEntity } from 'src/infrastructure/config/entity/base.entity';
import { CategoryEntity } from './category.entity';

@Entity({ name: 'Ingredient' })
export class IngredientEntity extends BaseEntity {
  @Column({
    length: 100,
    type: 'varchar'
  })
    name: string;
  @Column({type: 'text'})
    description: string;

  @Column({
    type: 'text',
    array: true
  })
    images: string[];
}
