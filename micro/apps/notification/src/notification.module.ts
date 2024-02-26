import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { RabbitMQClient } from './rabbit.client';
import { RabbitMQServer } from './rabbit.server';
import { RabbitMQPublisher } from './rabbit.publisher';
import { RabbitMQSubscriber } from './rabbit.subscriber';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [MailModule],
  controllers: [NotificationController],
  providers: [NotificationService, RabbitMQClient, RabbitMQServer, RabbitMQPublisher, RabbitMQSubscriber],
  exports: [RabbitMQClient, RabbitMQPublisher],
})
export class NotificationModule {}
