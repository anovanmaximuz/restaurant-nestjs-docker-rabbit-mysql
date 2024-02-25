import { Controller, Get } from '@nestjs/common';
import { KitchenService } from './kitchen.service';
import { RabbitMQPublisher } from './rabbit.publisher';

@Controller()
export class KitchenController {
  constructor(private readonly kitchenService: KitchenService,    
    private readonly rabbitMQPublisher: RabbitMQPublisher) {}  

  
  @Get("publisher")
  async getPublisherHello(){
    
    var data = {order_id: 112};
    this.rabbitMQPublisher.publishMessage('orders', 'order_confirmation', JSON.stringify(data));

    
  }
}
