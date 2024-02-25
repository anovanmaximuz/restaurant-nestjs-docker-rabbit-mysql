// src/order/dto/create-order.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  order_id: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  user_id: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  food_id: number;

}
