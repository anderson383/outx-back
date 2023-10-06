import {
  Column, Entity
} from 'typeorm';
import { BaseEntity } from 'src/infrastructure/config/entity/base.entity';

@Entity({ name: 'Category' })
export class CategoryEntity extends BaseEntity {
  @Column({
    length: 100,
    type: 'varchar'
    })
    name: string;
  @Column({type: 'text'})
    description: string;

  @Column({type: 'int'})
    order: number;

  @Column({
    type: 'text',
    array: true
    })
    images: string[];

  // @Column({type: 'number'})
  //   price: number;
}
