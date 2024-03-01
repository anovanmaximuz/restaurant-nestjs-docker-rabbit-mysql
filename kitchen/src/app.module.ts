import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { RabbitMQPublisher } from './rabbit.publisher';
import { RabbitMQSubscriber } from './rabbit.subscriber';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [PrismaModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, PrismaService, RabbitMQPublisher, RabbitMQSubscriber],
  exports: [RabbitMQPublisher]
})
export class AppModule {}