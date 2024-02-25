import { NestFactory } from '@nestjs/core';
import { NotificationModule } from './notification.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    NotificationModule,
    {
      transport: Transport.TCP,
      options: { host: '0.0.0.0', port: 5000 }
    },
  );
  await app.listen();
}
bootstrap();
