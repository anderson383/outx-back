import {
  Column, Entity
} from 'typeorm';
import { BaseEntity } from 'src/infrastructure/config/entity/base.entity';

@Entity({ name: 'Company' })
export class CompanyEntity extends BaseEntity {
  @Column({
    length: 100,
    type: 'varchar'
  })
    name: string;

  @Column({
    length: 100,
    type: 'varchar'
  })
    nit: string;

  @Column({
    length: 100,
    type: 'varchar'
  })
    reasonSocial: string;

  @Column({
    nullable: true,
    length: 200,
    type: 'varchar'
  })
    address?: string;

  @Column({
    nullable: true,
    length: 15,
    type: 'varchar'
  })
    contact?: string;

  @Column({
    default: false
  })
    isVerify?: boolean;
}
