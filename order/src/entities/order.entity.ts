import { Order } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class OrderEntity implements Order {
  @ApiProperty()
  id: number;

  @ApiProperty()
  order_id: number;

  @ApiProperty()
  user_id: number;

  @ApiProperty()
  food_id: number;

  @ApiProperty()
  state: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

}