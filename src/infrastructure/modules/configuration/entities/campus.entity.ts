import {
  Column, Entity, ManyToMany, ManyToOne
} from 'typeorm';
import { BaseEntity } from 'src/infrastructure/config/entity/base.entity';
import { CategoryCampusEntity } from './category-campus.entity';
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
    type: 'varchar',
    nullable: true
    })
    address: string;

  @Column({
    length: 100,
    type: 'varchar',
    nullable: true
    })
    contact: string;

  @Column({
    type: 'varchar',
    nullable: true
    })
    companyId: string;

  @ManyToOne(() => CompanyEntity)
    company: CompanyEntity;

  @ManyToOne(() => CategoryCampusEntity)
    category?: CategoryCampusEntity;

  // @ManyToMany(() => UserEntity, user => user.campus)
  //   users: UserEntity[];
}
