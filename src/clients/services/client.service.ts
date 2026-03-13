import {
  CreateData,
  UpdateData,
} from 'src/common/repositories/repository.types';
import { ClientRepository } from '../repositories/client.repository';
import { ClientEntity } from '../entities/client.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientService {
  constructor(public readonly clientRepository: ClientRepository) {}

  async findAll(): Promise<ClientEntity[]> {
    return this.clientRepository.findAll();
  }

  async find(id: number): Promise<ClientEntity | null> {
    return this.clientRepository.findById(id);
  }

  async create(data: CreateData<ClientEntity>): Promise<ClientEntity> {
    return this.clientRepository.create(data);
  }

  async update(
    id: number,
    data: UpdateData<ClientEntity>,
  ): Promise<ClientEntity | null> {
    return this.clientRepository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    return this.clientRepository.delete(id);
  }
}
