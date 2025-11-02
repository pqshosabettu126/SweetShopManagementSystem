import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable global validation for DTOs
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  await app.listen(4000);
  console.log('Server running on http://localhost:4000');
}
bootstrap();


