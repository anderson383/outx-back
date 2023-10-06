import {
  Column, Entity
} from 'typeorm';
import { BaseEntity } from 'src/infrastructure/config/entity/base.entity';

@Entity({ name: 'ListType' })
export class ListTypeEntity extends BaseEntity {
  @Column({
    length: 100,
    type: 'varchar',
    unique: true
    })
    code: string;

  @Column({
    length: 200,
    type: 'varchar'
    })
    name: string;

  @Column({
    nullable: true,
    length: 200,
    type: 'varchar'
    })
    description?: string;
}
