import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { RabbitMQClient } from './rabbit.client';
import { RabbitMQServer } from './rabbit.server';
import { RabbitMQPublisher } from './rabbit.publisher';
import { RabbitMQSubscriber } from './rabbit.subscriber';

@Module({
  imports: [],
  controllers: [NotificationController],
  providers: [NotificationService, RabbitMQClient, RabbitMQServer, RabbitMQPublisher, RabbitMQSubscriber],
  exports: [RabbitMQClient, RabbitMQPublisher],
})
export class NotificationModule {}
