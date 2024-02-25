import { NestFactory } from '@nestjs/core';
import { KitchenModule } from './kitchen.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(KitchenModule);  
  Logger.log( 'Kitchen service running on port: 3002', 'Received message:');
  await app.listen(3002);
}
bootstrap();
