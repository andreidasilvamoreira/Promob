import {
  CreateData,
  UpdateData,
} from 'src/common/repositories/repository.types';
import { ProductPartRepository } from '../repositories/product-part.repository';
import { ProductPartEntity } from '../entities/product-part.entity';

export class ProductPartService {
  constructor(public readonly productPartRepository: ProductPartRepository) {}

  async findAll(): Promise<ProductPartEntity[]> {
    return this.productPartRepository.findAll();
  }

  async findById(id: number): Promise<ProductPartEntity | null> {
    return this.productPartRepository.findById(id);
  }

  async create(
    data: CreateData<ProductPartEntity>,
  ): Promise<ProductPartEntity> {
    return this.productPartRepository.create(data);
  }

  async update(
    id: number,
    data: UpdateData<ProductPartEntity>,
  ): Promise<ProductPartEntity | null> {
    return this.productPartRepository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    return this.productPartRepository.delete(id);
  }
}
