import { BaseRepository } from 'src/common/repositories/base.repository';
import { ProductEntity } from '../entities/product.entity';
import { db } from 'src/config/database';

export class ProductRepository extends BaseRepository<ProductEntity> {
  constructor() {
    super(db, 'products');
  }
}
