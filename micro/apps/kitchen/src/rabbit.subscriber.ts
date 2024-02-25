import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import * as amqp from 'amqplib';
import { KitchenService } from './kitchen.service';

@Injectable()
export class RabbitMQSubscriber implements OnModuleInit {
  constructor(private readonly kitchenService: KitchenService) {} 
    private readonly url = 'amqp://localhost';
    
    async onModuleInit(): Promise<void> {
    const connection = await amqp.connect(this.url);
    const channel = await connection.createChannel();
    const exchange = 'orders';
    await channel.assertExchange(exchange, 'direct', { durable: false });
    
    const queue = await channel.assertQueue('', { exclusive: true });
    
    const routingKey = 'pubsub_key';
    await channel.bindQueue(queue.queue, exchange, routingKey);
    
    // Consume messages from the queue
    channel.consume(
      queue.queue,
      (msg) => {
        if (msg) {
          const message = msg.content.toString();
          const jsonData = JSON.parse(message);
          this.kitchenService.processOrder(jsonData.order_id);
          Logger.log(`Consumer received message: ${message}`,'Rabbit MQ');
        }
      },
      { noAck: true },
    );
  }
}