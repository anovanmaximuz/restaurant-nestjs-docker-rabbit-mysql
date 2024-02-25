import { Module } from '@nestjs/common';
import { KitchenController } from './kitchen.controller';
import { KitchenService } from './kitchen.service';
import { RabbitMQPublisher } from './rabbit.publisher';
import { RabbitMQSubscriber } from './rabbit.subscriber';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ PrismaModule],
  controllers: [KitchenController],
  providers: [PrismaService, KitchenService, RabbitMQPublisher, RabbitMQSubscriber],
  exports: [RabbitMQPublisher],
})
export class KitchenModule {}
