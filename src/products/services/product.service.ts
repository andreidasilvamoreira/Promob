import {
  CreateData,
  UpdateData,
} from 'src/common/repositories/repository.types';
import { ProductEntity } from '../entities/product.entity';
import { ProductRepository } from '../repositories/product.repository';

export class ProductService {
  constructor(public readonly productRepository: ProductRepository) {}

  async findAll(): Promise<ProductEntity[]> {
    return this.productRepository.findAll();
  }

  async findById(id: number): Promise<ProductEntity | null> {
    return this.productRepository.findById(id);
  }

  async create(data: CreateData<ProductEntity>): Promise<ProductEntity> {
    return this.productRepository.create(data);
  }

  async update(
    id: number,
    data: UpdateData<ProductEntity>,
  ): Promise<ProductEntity | null> {
    return this.productRepository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    return this.productRepository.delete(id);
  }
}
