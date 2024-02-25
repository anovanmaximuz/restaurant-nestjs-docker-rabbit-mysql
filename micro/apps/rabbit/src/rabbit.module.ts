import { Module } from '@nestjs/common';
import { RabbitController } from './rabbit.controller';
import { RabbitService } from './rabbit.service';
import { RabbitMQClient } from './rabbit.client';
import { RabbitMQServer } from './rabbit.server';
import { RabbitMQPublisher } from './rabbit.publisher';
import { RabbitMQSubscriber } from './rabbit.subscriber';

@Module({
  imports: [],
  controllers: [RabbitController],
  providers: [RabbitService, RabbitMQClient, RabbitMQServer, RabbitMQPublisher, RabbitMQSubscriber],
  exports: [RabbitMQClient, RabbitMQPublisher],
})
export class RabbitModule {}
