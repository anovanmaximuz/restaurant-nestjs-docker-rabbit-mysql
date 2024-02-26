import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import * as amqp from 'amqplib';
import { AppService } from './app.service';

@Injectable()
export class RabbitMQSubscriber implements OnModuleInit {
  constructor(private readonly appService: AppService) {} 
    private readonly url = 'amqp://localhost';
    
    async onModuleInit(): Promise<void> {
    const connection = await amqp.connect(this.url);
    const channel = await connection.createChannel();
    const exchange = 'orders';
    await channel.assertExchange(exchange, 'direct', { durable: false });
    
    const queue = await channel.assertQueue('', { exclusive: true });
    
    const routingKey = 'order_confirmation';
    await channel.bindQueue(queue.queue, exchange, routingKey);
    
    // Consume messages from the queue
    channel.consume(
      queue.queue,
      (msg) => {
        if (msg) {
          const message = msg.content.toString();
          const myData = message.split("|");          
          this.appService.processOrder(parseInt(myData[0]));
          Logger.log(`Kitchen received an order: ${myData}`,'Rabbit MQ');
        }
      },
      { noAck: true },
    );
  }
}