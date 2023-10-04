import { AuthDataSignDto } from 'src/application/comanders/dtos/auth.dto';
import { CampusEntity } from '../../entities/campus.entity';
import { CampusRepository } from 'src/domain/configuration/repository/campus';
import { CompanyEntity } from '../../entities/company.entity';
import { EntityManager } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';

export class CampusService implements CampusRepository {
  constructor(@InjectEntityManager() private entityManager: EntityManager) {}

  async createCampusForSignUp(name:string, companyId:string): Promise<string> {
    const insertResult = await this.entityManager
      .createQueryBuilder()
      .insert()

      .into(CampusEntity)
      .values({
        name,
        companyId
      })
      .execute();

    return insertResult.identifiers[0].id;
  }
}
