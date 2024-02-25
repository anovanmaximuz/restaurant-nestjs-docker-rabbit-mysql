import { Module } from '@nestjs/common';
import { KitchenController } from './kitchen.controller';
import { KitchenService } from './kitchen.service';
import { RabbitMQClient } from './rabbit.client';
import { RabbitMQServer } from './rabbit.server';
import { RabbitMQPublisher } from './rabbit.publisher';
import { RabbitMQSubscriber } from './rabbit.subscriber';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ PrismaModule],
  controllers: [KitchenController],
  providers: [PrismaService, KitchenService, RabbitMQClient, RabbitMQServer, RabbitMQPublisher, RabbitMQSubscriber],
  exports: [RabbitMQClient, RabbitMQPublisher],
})
export class KitchenModule {}
