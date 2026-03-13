import { BaseRepository } from 'src/common/repositories/base.repository';
import { db } from 'src/config/database';
import { EstimateItemEntity } from '../entities/estimate-item.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EstimateItemRepository extends BaseRepository<EstimateItemEntity> {
  constructor() {
    super(db, 'estimate_items');
  }
}
