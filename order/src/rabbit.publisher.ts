import { Injectable } from '@nestjs/common';
import * as amqp from 'amqplib';

@Injectable()
export class RabbitMQPublisher {
  private readonly url = process.env.RABBIT_MQ;

  async publishMessage(exchange: string, routingKey: string, message: string): Promise<void> {
    const connection = await amqp.connect(this.url);
    const channel = await connection.createChannel();

    await channel.assertExchange(exchange, 'direct', { durable: false });

    // Publish the message
    channel.publish(exchange, routingKey, Buffer.from(message));
    console.log(`Sent message: ${message}`);

    setTimeout(() => {
      connection.close();
    }, 500);
  }
}