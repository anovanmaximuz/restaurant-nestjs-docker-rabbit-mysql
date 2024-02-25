import { NestFactory } from '@nestjs/core';
import { KitchenModule } from './kitchen.module';

async function bootstrap() {
  const app = await NestFactory.create(KitchenModule);
  const port = 3005;
  console.log("kitchen service running on port: "+port);
  await app.listen(port);
}
bootstrap();
