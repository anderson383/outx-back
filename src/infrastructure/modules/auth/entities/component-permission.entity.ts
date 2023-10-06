import {
  Column, Entity, ManyToOne
} from 'typeorm';
import { BaseEntity } from 'src/infrastructure/config/entity/base.entity';
import { ComponentEntity } from './component.entity';
import { RoleEntity } from './role.entity';

@Entity({ name: 'ComponentPermission' })
export class ComponentPermissionEntity extends BaseEntity {
  @Column({
    length: 100,
    type: 'varchar'
    })
    name_accesss: string;

  @ManyToOne(() => RoleEntity)
    role: RoleEntity;

  @ManyToOne(() => ComponentEntity)
    component: ComponentEntity;
}
