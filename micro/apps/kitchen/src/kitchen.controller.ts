import { Controller, Get } from '@nestjs/common';
import { KitchenService } from './kitchen.service';
import { RabbitMQClient } from './rabbit.client';
import { RabbitMQPublisher } from './rabbit.publisher';

@Controller()
export class KitchenController {
  constructor(private readonly kitchenService: KitchenService,
    private readonly rabbitMQClient: RabbitMQClient,
    private readonly rabbitMQPublisher: RabbitMQPublisher) {}  

  @Get()
  getHello(): string {
    return this.kitchenService.getHello();
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
    const response = await this.rabbitMQClient.sendMessage('order_process', message);

    const pubsubMessage = 'A hopping-good time!';
    var data = {name:'ano', email: "anovanmaximuz@gmail.com"};
    this.rabbitMQPublisher.publishMessage('orders', 'pubsub_key', JSON.stringify(data));

    return response;
  }
}
