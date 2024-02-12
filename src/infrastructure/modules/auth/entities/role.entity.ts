import {
  Column, Entity
} from 'typeorm';
import { BaseEntity } from 'src/infrastructure/config/entity/base.entity';

@Entity({ name: 'Role' })
export class RoleEntity extends BaseEntity {
  @Column({
    length: 100,
    type: 'varchar'
  })
    name: string;
}
