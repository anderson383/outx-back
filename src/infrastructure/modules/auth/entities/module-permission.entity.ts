import {
  Column, Entity, ManyToOne
} from 'typeorm';
import { BaseEntity } from 'src/infrastructure/config/entity/base.entity';
import { ModuleEntity } from './module.entity';
import { RoleEntity } from './role.entity';

@Entity({ name: 'ModulePermission' })
export class ModulePermissionEntity extends BaseEntity {
  @Column({
    length: 100,
    type: 'varchar'
    })
    name_accesss: string;

  @ManyToOne(() => RoleEntity)
    role: RoleEntity;

  @ManyToOne(() => ModuleEntity)
    module: ModuleEntity;
}
