import {
  Column, Entity, ManyToOne
} from 'typeorm';
import { BaseEntity } from 'src/infrastructure/config/entity/base.entity';
import { ListTypeEntity } from './list-type.entity';

@Entity({ name: 'ListItem' })
export class ListItemEntity extends BaseEntity {
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

  @ManyToOne(() => ListTypeEntity)
    listType?: ListTypeEntity;
}
