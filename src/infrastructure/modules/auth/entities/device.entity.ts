import {
  Column, Entity
} from 'typeorm';
import { BaseEntity } from 'src/infrastructure/config/entity/base.entity';

@Entity({ name: 'Device' })
export class DeviceEntity extends BaseEntity {
  @Column({
    length: 100,
    type: 'varchar'
  })
    name: string;
  @Column({
    length: 100,
    type: 'varchar'
  })
    platform: string;

  @Column({type: 'float'})
    version: number;

  @Column({type: 'varchar'})
    serial: string;

  @Column({type: 'varchar'})
    imei: string;

  @Column({type: 'boolean'})
    is_our: boolean;
}
