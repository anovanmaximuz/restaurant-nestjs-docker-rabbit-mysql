import { Injectable } from '@nestjs/common';
import * as amqp from 'amqplib';

@Injectable()
export class RabbitMQPublisher {
  private readonly url = 'amqp://localhost';

  async publishMessage(exchange: string, routingKey: string, message: string): Promise<void> {
    const connection = await amqp.connect(this.url);
    const channel = await connection.createChannel();

    await channel.assertExchange(exchange, 'direct', { durable: false });

    // Publish the message
    channel.publish(exchange, routingKey, Buffer.from(message));    

    setTimeout(() => {
      connection.close();
    }, 500);
  }
}