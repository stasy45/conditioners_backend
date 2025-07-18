import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ErrorBoundaryFilter } from './utils/error-boundary.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api_conditioners');
  app.useGlobalFilters(new ErrorBoundaryFilter());
  await app.listen(8000);
}

bootstrap();
