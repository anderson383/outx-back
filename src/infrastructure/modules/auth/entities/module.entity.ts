import {
  Column, Entity
} from 'typeorm';
import { BaseEntity } from 'src/infrastructure/config/entity/base.entity';

@Entity({ name: 'Module' })
export class ModuleEntity extends BaseEntity {
  @Column({
    length: 100,
    type: 'varchar'
    })
    name: string;
}
