import {
  CreateData,
  UpdateData,
} from 'src/common/repositories/repository.types';
import { EstimateEntity } from '../entities/estimate.entity';
import { EstimateRepository } from '../repositories/estimate.repository';

export class EstimateService {
  constructor(public readonly estimateRepository: EstimateRepository) {}

  async findAll(): Promise<EstimateEntity[]> {
    return this.estimateRepository.findAll();
  }

  async find(id: number): Promise<EstimateEntity | null> {
    return this.estimateRepository.findById(id);
  }

  async create(data: CreateData<EstimateEntity>): Promise<EstimateEntity> {
    return this.estimateRepository.create(data);
  }

  async update(
    id: number,
    data: UpdateData<EstimateEntity>,
  ): Promise<EstimateEntity | null> {
    return this.estimateRepository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    return this.estimateRepository.delete(id);
  }
}
