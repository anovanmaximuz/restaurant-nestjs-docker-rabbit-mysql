import { Test, TestingModule } from '@nestjs/testing';
import { RabbitController } from './rabbit.controller';
import { RabbitService } from './rabbit.service';

describe('RabbitController', () => {
  let rabbitController: RabbitController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RabbitController],
      providers: [RabbitService],
    }).compile();

    rabbitController = app.get<RabbitController>(RabbitController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(rabbitController.getHello()).toBe('Hello World!');
    });
  });
});
