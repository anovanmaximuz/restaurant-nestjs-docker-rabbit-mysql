import { Food } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class FoodEntity implements Food {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

}