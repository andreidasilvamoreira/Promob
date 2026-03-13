import { BaseRepository } from 'src/common/repositories/base.repository';
import { EstimateEntity } from '../entities/estimate.entity';
import { db } from 'src/config/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EstimateRepository extends BaseRepository<EstimateEntity> {
  constructor() {
    super(db, 'estimates');
  }
}
