import { CampusRepository } from 'src/domain/configuration/repository/campus';
import { CampusService } from './adapters/repository/campus.service';
import { CompanyRepository } from 'src/domain/configuration/repository/company';
import { CompanyService } from './adapters/repository/company.service';
import { ConfigurationController } from './controllers/configuration.controller';
import { ConfigurationDao } from 'src/domain/configuration/dao/configuration.dao';
import { ConfigurationDaoService } from './adapters/dao/configuration-dao.service';
import { GetCategoryHandler } from 'src/application/consults/configuration/get-category.handler';
import { GetGenericListHandler } from 'src/application/consults/configuration/get-generic-list.handler';
import { Module } from '@nestjs/common';

const providerAndExport = [
  {
    provide: ConfigurationDao,
    useClass: ConfigurationDaoService
  },
  {
    provide: CompanyRepository,
    useClass: CompanyService
  },
  {
    provide: CampusRepository,
    useClass: CampusService
  }
];

@Module({
  imports: [

  ],
  providers: [
  GetGenericListHandler,
  GetCategoryHandler,
  ...providerAndExport
  ],
  controllers: [
  ConfigurationController
  ],
  exports: [
  ...providerAndExport
  ]
  })
export class ConfigurationModule {}

