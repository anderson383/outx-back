import {
  ConfigModule, ConfigService
} from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigurationModule } from './modules/configuration/configuration.module';
import { dataBaseConfigFactory } from './config/data-base.config';
import { Module } from '@nestjs/common';
import { ProductModule } from './modules/product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';

@Module({imports: [
  TypeOrmModule.forRootAsync({
    useFactory: dataBaseConfigFactory,
    inject: [ConfigService]
  }),
  ConfigModule.forRoot({
    envFilePath: `env/${ process.env.NODE_ENV }.env`,
    isGlobal: true
  }),
  UserModule,
  AuthModule,
  ProductModule,
  ConfigurationModule
] })
export class InfrastructureModule {}
