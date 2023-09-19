import {
  Column, Entity, ManyToMany, ManyToOne
} from 'typeorm';
import { BaseEntity } from 'src/infrastructure/config/entity/base.entity';
import { CompanyEntity } from './company.entity';
import { UserEntity } from '../../user/entity/user.entity';

@Entity({ name: 'Campus' })
export class CampusEntity extends BaseEntity {
  @Column({
    length: 100,
    type: 'varchar'
  })
    name: string;

  @Column({
    length: 200,
    type: 'varchar'
  })
    address: string;

  @Column({
    length: 100,
    type: 'varchar'
  })
    contact: string;

  @ManyToOne(() => CompanyEntity)
    company: CompanyEntity;

  @ManyToMany(() => UserEntity, user => user.campus)
    users: UserEntity[];
}