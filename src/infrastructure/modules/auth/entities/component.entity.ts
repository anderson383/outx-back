import {
  Column, Entity, ManyToOne
} from 'typeorm';
import { BaseEntity } from 'src/infrastructure/config/entity/base.entity';
import { ModuleEntity } from './module.entity';

@Entity({ name: 'Component' })
export class ComponentEntity extends BaseEntity {
  @Column({
    length: 100,
    type: 'varchar'
  })
    name: string;

  @ManyToOne(() => ModuleEntity)
    module: ModuleEntity;
}
