import { CampusRepository } from 'src/domain/configuration/repository/campus';
import { CampusService } from './adapters/repository/campus.service';
import { CompanyRepository } from 'src/domain/configuration/repository/company';
import { CompanyService } from './adapters/repository/company.service';
import { Module } from '@nestjs/common';

const providerAndExport = [
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
  ...providerAndExport
  ],
  controllers: [],
  exports: [
  ...providerAndExport
  ]
  })
export class ConfigurationModule {}

