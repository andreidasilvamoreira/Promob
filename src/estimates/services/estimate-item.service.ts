import {
  CreateData,
  UpdateData,
} from 'src/common/repositories/repository.types';
import { EstimateItemRepository } from '../repositories/estimate-item.repository';
import { EstimateItemEntity } from '../entities/estimate-item.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EstimateItemService {
  constructor(public readonly estimateItemRepository: EstimateItemRepository) {}

  async findAll(): Promise<EstimateItemEntity[]> {
    return this.estimateItemRepository.findAll();
  }

  async find(id: number): Promise<EstimateItemEntity | null> {
    return this.estimateItemRepository.findById(id);
  }

  async create(
    data: CreateData<EstimateItemEntity>,
  ): Promise<EstimateItemEntity> {
    return this.estimateItemRepository.create(data);
  }

  async update(
    id: number,
    data: UpdateData<EstimateItemEntity>,
  ): Promise<EstimateItemEntity | null> {
    return this.estimateItemRepository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    return this.estimateItemRepository.delete(id);
  }
}
