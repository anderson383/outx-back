
import {EntityManager} from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { UserDao } from 'src/domain/user/dao/dao-user';
import { UserEntity } from '../../entity/user.entity';
import { UserListDto } from 'src/application/comanders/dtos/user-list.dto';

@Injectable()
export class DaoUserService implements UserDao {
  constructor(@InjectEntityManager() private entityManager: EntityManager) {}

  async list(): Promise<UserListDto[]> {
    const query = this.entityManager.createQueryBuilder<UserListDto>('User', 'u')
      .select(['u.id', 'u.name']);

    return query.getMany();
  }

  async getUserByEmail(email: string): Promise<UserEntity> {
    const query = this.entityManager.createQueryBuilder<UserEntity>('User', 'u')
      .select(['u.id', 'u.name', 'u.email']).where('u.email=:email', {email});

    return query.getOne();
  }

  async getUserByUid(uid: string): Promise<UserEntity> {
    const query = this.entityManager.createQueryBuilder<UserEntity>('User', 'u')
      .select(['u.id', 'u.name', 'u.email']).where('u.uid=:uid', {uid});

    return query.getOne();
  }
}
