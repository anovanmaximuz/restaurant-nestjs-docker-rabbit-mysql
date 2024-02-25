import { Controller, Get } from '@nestjs/common';
import { RabbitService } from './rabbit.service';
import { RabbitMQClient } from './rabbit.client';
import { RabbitMQPublisher } from './rabbit.publisher';

@Controller()
export class RabbitController {
  constructor(
    private readonly rabbitService: RabbitService, 
    private readonly rabbitMQClient: RabbitMQClient,
    private readonly rabbitMQPublisher: RabbitMQPublisher) {}  

  @Get()
  getHello(): string {
    return this.rabbitService.getHello();
  }

  @Get("rabbit")
  async getHelloRabbit(): Promise<string> {
    const message = 'Hello RabbitMQ!';
    const response = await this.rabbitMQClient.sendMessage('rpc_queue', message);
    return response;
  }

  @Get("publisher")
  async getPublisherHello(): Promise<string> {
    const message = 'a data was sent to exchange';
    const response = await this.rabbitMQClient.sendMessage('rpc_queue', message);

    const pubsubMessage = 'A hopping-good time!';
    var data = {name:'ano', email: "anovanmaximuz@gmail.com"};
    this.rabbitMQPublisher.publishMessage('pubsub_exchange', 'pubsub_key', JSON.stringify(data));

    return response;
  }
}
