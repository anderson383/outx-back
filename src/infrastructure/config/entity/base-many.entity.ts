import {
  Column, ManyToOne, PrimaryGeneratedColumn
} from 'typeorm';
import { UserEntity } from 'src/infrastructure/modules/user/entity/user.entity';
export class BaseManyEntity {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column({
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP'
    })
    created_date: Date;

  @ManyToOne(() => UserEntity)
    created_user: UserEntity;
}
