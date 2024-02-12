import { AuthDataSignDto } from 'src/application/comanders/dtos/auth.dto';
import { CompanyEntity } from '../../entities/company.entity';
import { CompanyRepository } from 'src/domain/configuration/repository/company';
import { EntityManager } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';

export class CompanyService implements CompanyRepository {
  constructor(@InjectEntityManager() private entityManager: EntityManager) {}

  async createCompanyForSignUp(user: AuthDataSignDto): Promise<any> {
    const insertResult = await this.entityManager
      .createQueryBuilder()
      .insert()

      .into(CompanyEntity)
      .values({
        name: user.fullNameCompany,
        nit: user.nit,
        reasonSocial: user.reasonSocial
      })
      .execute();

    return insertResult.identifiers[0].id;
  }
}
