import { BaseRepository } from 'src/common/repositories/base.repository';
import { db } from 'src/config/database';
import { ProductPartEntity } from '../entities/product-part.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductPartRepository extends BaseRepository<ProductPartEntity> {
  constructor() {
    super(db, 'product_parts');
  }
}
