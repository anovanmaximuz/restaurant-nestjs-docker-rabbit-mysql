import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { RabbitMQClient } from './rabbit.client';
import { RabbitMQServer } from './rabbit.server';
import { RabbitMQPublisher } from './rabbit.publisher';
import { RabbitMQSubscriber } from './rabbit.subscriber';
import { MailModule } from './mail/mail.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [MailModule, PrismaModule],
  controllers: [NotificationController],
  providers: [NotificationService, RabbitMQClient, RabbitMQServer, RabbitMQPublisher, RabbitMQSubscriber, PrismaService],
  exports: [RabbitMQClient, RabbitMQPublisher],
})
export class NotificationModule {}
