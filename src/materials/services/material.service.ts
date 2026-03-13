import {
  CreateData,
  UpdateData,
} from 'src/common/repositories/repository.types';
import { MaterialEntity } from '../entities/material.entity';
import { MaterialRepository } from '../repositories/material.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MaterialService {
  constructor(public readonly materialRepository: MaterialRepository) {}

  async findAll(): Promise<MaterialEntity[]> {
    return this.materialRepository.findAll();
  }

  async findById(id: number): Promise<MaterialEntity | null> {
    return this.materialRepository.findById(id);
  }

  async create(data: CreateData<MaterialEntity>): Promise<MaterialEntity> {
    return this.materialRepository.create(data);
  }

  async update(
    id: number,
    data: UpdateData<MaterialEntity>,
  ): Promise<MaterialEntity | null> {
    return this.materialRepository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    return this.materialRepository.delete(id);
  }
}
