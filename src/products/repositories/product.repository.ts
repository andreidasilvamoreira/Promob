import { BaseRepository } from 'src/common/repositories/base.repository';
import { ProductEntity } from '../entities/product.entity';
import { db } from 'src/config/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductRepository extends BaseRepository<ProductEntity> {
  constructor() {
    super(db, 'products');
  }
}
