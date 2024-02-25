import { Test, TestingModule } from '@nestjs/testing';
import { KitchenController } from './kitchen.controller';
import { KitchenService } from './kitchen.service';

describe('KitchenController', () => {
  let kitchenController: KitchenController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [KitchenController],
      providers: [KitchenService],
    }).compile();

    kitchenController = app.get<KitchenController>(KitchenController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(kitchenController.getHello()).toBe('Hello World!');
    });
  });
});
