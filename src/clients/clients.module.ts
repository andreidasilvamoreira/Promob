import { Module } from '@nestjs/common';
import { ClientService } from './services/client.service';
import { ClientRepository } from './repositories/client.repository';

@Module({
  controllers: [ClientController],
  providers: [ClientService, ClientRepository],
})
export class ClientsModule {}
