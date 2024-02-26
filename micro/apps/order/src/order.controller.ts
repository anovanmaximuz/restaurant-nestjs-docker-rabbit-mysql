import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, HttpException } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiOperation } from '@nestjs/swagger';
import { Response } from 'express';
import { CreateCheckoutDto } from './dto/create-checkout.dto';

@Controller("order")
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiOperation({ summary: 'place an order' })
  async create(@Body() createOrderDto: CreateOrderDto, @Res() response: Response) {

      let userExist = await this.orderService.findUser(createOrderDto.user_id);
      if(userExist==0) { 
        throw new HttpException("We did not find any user data", HttpStatus.BAD_REQUEST);      
      }
      //check menu exist
      let isMenuExist =  await this.orderService.findFood(createOrderDto.food_id);
      if(isMenuExist==0) { 
        throw new HttpException("No food menu available, please see the existing menu list!", HttpStatus.BAD_REQUEST);      
      }
    
      let hasFinishOrder =  await this.orderService.hasFinishOrder(createOrderDto.order_id);
      if(hasFinishOrder>0){
        throw new HttpException("Order ID:"+createOrderDto.order_id+" being processed", HttpStatus.BAD_REQUEST);      
      }

      let hasPendingOrder = await this.orderService.hasPendingOrder(createOrderDto.order_id);  
  
      if(hasPendingOrder>0){        
        let getPendingOrder = await this.orderService.getPendingOrder(createOrderDto.order_id);
        let order_id = getPendingOrder.order_id;
        createOrderDto.order_id = order_id;
        let insert = await this.orderService.create(createOrderDto);                
        return response.status(HttpStatus.OK).send({
            statusCode: HttpStatus.OK,
            message: 'Success added order id :'+order_id+' for menu '+getPendingOrder.food_id,
            data: insert
          });
      }else{
        let insert = await this.orderService.create(createOrderDto);          
        return response.status(HttpStatus.OK).send({
          statusCode: HttpStatus.OK,
          message: 'Success place new order',
          data: insert
        });
      }       
  }

  @Post("/checkout")
  @ApiOperation({ summary: 'place an order' })
  async checkout(@Body() createCheckoutDto: CreateCheckoutDto, @Res() response: Response) {

    let hasFinishOrder =  await this.orderService.hasFinishOrder(createCheckoutDto.order_id);
    if(hasFinishOrder>0){
      throw new HttpException("Order being processed", HttpStatus.BAD_REQUEST);      
    }
    
    let hasPendingOrder = await this.orderService.hasPendingOrder(createCheckoutDto.order_id);
    if(hasPendingOrder==0){    
      throw new HttpException("You have to order first", HttpStatus.BAD_REQUEST); 
    }

    let getPendingOrder = await this.orderService.getPendingOrder(createCheckoutDto.order_id);
    let userInfo = await this.orderService.getUser(getPendingOrder.user_id);
    
    //order_id,name,email
    let msgFormat = getPendingOrder.order_id+"|"+userInfo.name+"|"+userInfo.email;
    this.orderService.fanOutPub(["order_confirmation","order_notification"], msgFormat);
    return response.status(HttpStatus.OK).send({
      statusCode: HttpStatus.OK,
      message: 'We are preparing your order'
    });
  }

  @Get("menu")
  @ApiOperation({ summary: 'fetch menu' })
  async getAllMenu(@Res() response: Response) {
    let menu = await this.orderService.findAll();
    response.status(HttpStatus.OK).send({
      statusCode: HttpStatus.OK,
      message: 'list of menu',
      data: menu
    });
  }

  @Get('food/:id')
  @ApiOperation({ summary: 'get menu detail' })
  async findFood(@Param('id') id: number, @Res() response: Response) {
    let food = await this.orderService.getFood(+id);
    if(food != null){
      return response.status(HttpStatus.OK).send({
        statusCode: HttpStatus.OK,
        message: 'success',
        data: food
      });
    }else{
      throw new HttpException("Menu doesn't exist", HttpStatus.BAD_REQUEST);
    }
   
  }

  @Get(':id')
  @ApiOperation({ summary: 'get order details' })
  async findAllOrder(@Param('id') id: string, @Res() response: Response) {
    let orders = await this.orderService.findAllOrder(+id);
    
    if(orders.length>0){
      return response.status(HttpStatus.OK).send({
        statusCode: HttpStatus.OK,
        message: 'success',
        data: orders
      });
    }else{
      throw new HttpException("No order data", HttpStatus.BAD_REQUEST);
    }
    
  }

  @Get('status/:id')
  @ApiOperation({ summary: 'check order status' })
  async findOrderStatus(@Param('id') id: string,  @Res() response: Response) {
    let statusOrder = await this.orderService.findOrderStatus(+id);
    if(statusOrder != null){
      return response.status(HttpStatus.OK).send({
        statusCode: HttpStatus.OK,
        message: 'success',
        data: {'status':statusOrder.state}
      });
    }else{
      throw new HttpException("No order data", HttpStatus.BAD_REQUEST);
    }
    
  }

  //@Patch(':id')
  //@ApiOperation({ summary: 'update an order' })
  //update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
  //  return this.orderService.update(+id, updateOrderDto);
 // }

  @Delete('cancel/:id')
  @ApiOperation({ summary: 'cancel an order' })
  async remove(@Param('id') id: string, @Res() response: Response) {
    let deleted = await this.orderService.remove(+id);
    if(deleted.count > 0){
      return response.status(HttpStatus.OK).send({
        statusCode: HttpStatus.OK,
        message: 'successfully canceled the order'
      });
    }else{
      throw new HttpException("Order does not exist or has been processed cannot be canceled", HttpStatus.BAD_REQUEST);
    }
    
  }
}
