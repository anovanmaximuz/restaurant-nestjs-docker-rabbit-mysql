import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { RabbitMQPublisher } from './rabbit.publisher';
import { RabbitMQSubscriber } from './rabbit.subscriber';

@Module({
  imports: [PrismaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, RabbitMQPublisher, RabbitMQSubscriber],
  exports: [RabbitMQPublisher]
})
export class AppModule {}