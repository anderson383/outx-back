import {
  Column, Entity
} from 'typeorm';
import { BaseEntity } from 'src/infrastructure/config/entity/base.entity';

@Entity({ name: 'CategoryCampus' })
export class CategoryCampusEntity extends BaseEntity {
  @Column({
    length: 100,
    type: 'varchar'
  })
    name: string;

  @Column({type: 'text'})
    descripcion: string;
}
