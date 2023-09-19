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
    length: 200,
    type: 'varchar'
  })
    address: string;

  @Column({
    length: 15,
    type: 'varchar'
  })
    contact: string;
}
