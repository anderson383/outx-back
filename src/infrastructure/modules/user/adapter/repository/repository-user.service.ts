import { AuthDataSignDto } from 'src/application/comanders/dtos/auth.dto';
import { EntityManager } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';
import { RepositoryUser } from 'src/domain/user/repository/repository-user';
import { UserEntity } from '../../entity/user.entity';

export class RepositoryUserService implements RepositoryUser {
  constructor(@InjectEntityManager() private entityManager: EntityManager) {}

  async create(user: AuthDataSignDto): Promise<any> {
    await this.entityManager
      .createQueryBuilder()
      .insert()
      .into(UserEntity)
      .values({
        name: user.fullName,
        email: user.email,
        uid: user.uid,
        companyId: user.companyId

        // jsonData: user.jsonData
      })
      .execute();

    return 'Usuario creado correctamente :)';
  }
}
