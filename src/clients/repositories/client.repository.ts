import { BaseRepository } from 'src/common/repositories/base.repository';
import { ClientEntity } from '../entities/client.entity';
import { db } from 'src/config/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientRepository extends BaseRepository<ClientEntity> {
  constructor() {
    super(db, 'clients');
  }
}
