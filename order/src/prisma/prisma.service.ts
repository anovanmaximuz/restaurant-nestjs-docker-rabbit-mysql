import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit{
    constructor() {
        super({
          log: [
            {
              emit: 'event',
              level: 'query',
            },
          ],
        });
      }

      async onModuleInit(): Promise<void> {
        await this.$connect();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.$on('query', async (e) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          Logger.log(`[${e.query}] Params ${e.params}`,"Query");          
        });
      }
    
}
