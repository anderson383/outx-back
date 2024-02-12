import admin from 'firebase-admin';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { EnvVariables } from './infrastructure/config/env/env-variables.enum';
import { firebaseConfig } from './infrastructure/config/constants/firebase';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { NestFactory } from '@nestjs/core';
import { TransformInterceptor } from './infrastructure/config/interceptors/transform.interceptor';
import { ValidationPipe } from '@nestjs/common';

// export const adminAppFirebase = admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

export const appFireBase = initializeApp(firebaseConfig);
export const authFireBase = getAuth(appFireBase);

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const configService = app.get(ConfigService);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());
  app.enableCors();

  app.setGlobalPrefix(configService.get(EnvVariables.APPLICATION_CONTEXT_PATH));
  await app.listen(configService.get(EnvVariables.PORT || '3000'));
}
bootstrap();
