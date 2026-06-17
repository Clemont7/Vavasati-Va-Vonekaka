import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: process.env.CORS_ORIGIN || '*' });
  const port = Number(process.env.PORT || 3333);
  await app.listen(port);
}

void bootstrap();
