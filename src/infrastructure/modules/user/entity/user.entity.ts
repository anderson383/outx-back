import {
  Column, Entity, ManyToMany, PrimaryGeneratedColumn
} from 'typeorm';
import { BaseEntity } from './../../../config/entity/base.entity';
import { CampusEntity } from '../../configuration/entities/campus.entity';

class JsonObjectTransformer {
  to(value: object): string {
    return JSON.stringify(value);
  }

  from(value: string): object {
    return JSON.parse(value);
  }
}

@Entity({ name: 'User' })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column()
    name: string;

  @Column({
    nullable: true,
    type: 'jsonb',
    transformer: new JsonObjectTransformer()
  })
    jsonData: object;

  @Column()
    email: string;

  @Column({nullable: true})
    username: string;

  @ManyToMany(() => CampusEntity)
    campus?: CampusEntity[];

  @Column()
    password: string;
}

