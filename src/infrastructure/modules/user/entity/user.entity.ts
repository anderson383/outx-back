import {
  Column, Entity, ManyToMany, PrimaryGeneratedColumn
} from 'typeorm';
import { BaseEntity } from './../../../config/entity/base.entity';
import { CampusEntity } from '../../configuration/entities/campus.entity';
import { CompanyEntity } from '../../configuration/entities/company.entity';

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

  @Column()
    uid: string;

  @Column({
    nullable: true,
    type: 'jsonb',
    transformer: new JsonObjectTransformer()
  })
    jsonData: object;

  @Column()
    email: string;

  @Column({nullable: true})
    photoUrl?: string;

  @Column({nullable: true})
    username: string;

  @ManyToMany(() => CompanyEntity)
    company?: CompanyEntity[];

  @Column({nullable: true})
    companyId?: string;

  @Column({default: false})
    isGoogle: boolean;

  @Column({default: false})
    isFacebook: boolean;
}

