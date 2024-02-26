import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import * as amqp from 'amqplib';
import { MailService } from './mail/mail.service';

@Injectable()
export class RabbitMQSubscriber implements OnModuleInit {
    constructor(private mailService:MailService) {}
    private readonly url = 'amqp://localhost';
    
    async onModuleInit(): Promise<void> {
    const connection = await amqp.connect(this.url);
    const channel = await connection.createChannel();
    const exchange = 'orders';
    await channel.assertExchange(exchange, 'direct', { durable: false });
    
    const queue = await channel.assertQueue('', { exclusive: true });
    
    const routingKey = 'order_notification';
    await channel.bindQueue(queue.queue, exchange, routingKey);
    
    // Consume messages from the queue
    channel.consume(
      queue.queue,
      (msg) => {
        if (msg) {
          const message = msg.content.toString();
          //const jsonData = JSON.parse(message);
          this.sendEmail();
          Logger.log(`Notification prepare send confirmation to ${message}`,'Rabbit MQ');
        }
      },
      { noAck: true },
    );
  }

  
  async sendEmail() {    
    let kirim = await this.mailService.sendUserConfirmation("anovanmaximuz@gmail.com","ano",["foods","food 2","food 5"]);
    console.log(kirim);
  }
}