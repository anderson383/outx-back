import { EntityManager } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';
import { RepositoryUser } from 'src/domain/user/repository/repository-user';
import { UserCreateDto } from 'src/application/comanders/dtos/user-create.dto';
import { UserEntity } from '../../entity/user.entity';

export class RepositoryUserService implements RepositoryUser {
  constructor(@InjectEntityManager() private entityManager: EntityManager) {}

  async create(user: UserCreateDto): Promise<any> {
    await this.entityManager
      .createQueryBuilder()
      .insert()
      .into(UserEntity)
      .values({
        name: user.name,
        jsonData: user.jsonData
      })
      .execute();

    return 'Usuario creado correctamente :)';
  }
}
