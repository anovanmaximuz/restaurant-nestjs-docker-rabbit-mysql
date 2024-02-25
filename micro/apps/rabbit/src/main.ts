import { NestFactory } from '@nestjs/core';
import { RabbitModule } from './rabbit.module';

async function bootstrap() {
  const app = await NestFactory.create(RabbitModule);
  await app.listen(3002);
}
bootstrap();
