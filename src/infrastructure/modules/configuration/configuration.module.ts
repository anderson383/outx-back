import { JwtModule } from '@nestjs/jwt';
import { JwtTableStrategy } from './strategies/jwt.strategy';
import { ListTableHandler } from 'src/application/consults/configuration/table/list-table.handler';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { SECRET_KEYJWT } from 'src/infrastructure/config/constants/jwt';
import { TableAuthGuard } from './guards/table-auth.guard';
import { TableDao } from 'src/domain/product/dao/table.dao';
import { TableDaoService } from './adapters/dao/table-dao.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: SECRET_KEYJWT,
      signOptions: { expiresIn: '7h' }
    })
  ],
  providers: [
    ListTableHandler,
    JwtTableStrategy,
    TableAuthGuard,
    {
      provide: TableDao,
      useClass: TableDaoService
    }
  ],
  controllers: []
})
export class ConfigurationModule {}

