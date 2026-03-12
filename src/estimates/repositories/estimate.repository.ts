import { BaseRepository } from 'src/common/repositories/base.repository';
import { EstimateEntity } from '../entities/estimate.entity';
import { db } from 'src/config/database';

export class EstimateRepository extends BaseRepository<EstimateEntity> {
  constructor() {
    super(db, 'estimates');
  }
}
