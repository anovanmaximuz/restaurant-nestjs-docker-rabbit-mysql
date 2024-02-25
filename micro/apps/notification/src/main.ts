import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { NotificationModule } from './notification.module';

async function bootstrap() {
  const app = await NestFactory.create(NotificationModule);
  const port = 3005;  
  Logger.log( 'Notification service running on port: '+port, 'Received message:');
  await app.listen(port);
}
bootstrap();
