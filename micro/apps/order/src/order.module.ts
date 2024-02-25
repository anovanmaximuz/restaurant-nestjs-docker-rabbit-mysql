import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import {RabbitMQPublisher} from './rabbit.publisher';

@Module({
  imports: [ PrismaModule],
  controllers: [OrderController],
  providers: [OrderService, PrismaService, RabbitMQPublisher],
})
export class OrderModule {}
