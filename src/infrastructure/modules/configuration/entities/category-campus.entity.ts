import {
  Column, Entity, ManyToOne
} from 'typeorm';
import { BaseEntity } from 'src/infrastructure/config/entity/base.entity';

@Entity({ name: 'CategoryCompany' })
export class CategoryCompanyEntity extends BaseEntity {
  @Column({
    length: 100,
    type: 'varchar'
    })
    name: string;

  @Column({type: 'text'})
    description: string;

  @Column({type: 'int', nullable: true})
    order: number;
}

@Entity({ name: 'CategoryCampus' })
export class CategoryCampusEntity extends BaseEntity {
  @Column({
    length: 100,
    type: 'varchar'
    })
    name: string;

  @Column({type: 'text'})
    description: string;

  @Column({type: 'int', nullable: true})
    order: number;

  @ManyToOne(() => CategoryCompanyEntity)
    categoryCompany?: CategoryCompanyEntity;
}
