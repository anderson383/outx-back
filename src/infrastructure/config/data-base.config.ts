import { ConfigService } from '@nestjs/config';
import { EnvVariables } from './env/env-variables.enum';

export const dataBaseConfigFactory = (configService: ConfigService) => ({
  type: configService.get(EnvVariables.DATABASE_TYPE),
  host: configService.get(EnvVariables.DATABASE_HOST),
  port: configService.get(EnvVariables.DATABASE_PORT),
  username: configService.get(EnvVariables.DATABASE_USER),
  password: configService.get(EnvVariables.DATABASE_PASSWORD),
  database: configService.get(EnvVariables.DATABASE_NAME),

  entities: [configService.get(EnvVariables.TYPEORM_ENTITIES_DIR)],
  synchronize: true,
  logging: true,

  migrationsTableName: configService.get(
    EnvVariables.TYPEORM_MIGRATIONS_TABLENAME,
  ),
  migrations: [configService.get(EnvVariables.TYPEORM_MIGRATIONS_DIR)],
  cli: {migrationsDir: configService.get(EnvVariables.TYPEORMCLI_MIGRATIONS_DIR)}
});
