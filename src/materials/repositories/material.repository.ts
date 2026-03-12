import { BaseRepository } from 'src/common/repositories/base.repository';
import { db } from 'src/config/database';
import { MaterialEntity } from '../entities/material.entity';

export class MaterialRepository extends BaseRepository<MaterialEntity> {
  constructor() {
    super(db, 'materials');
  }
}
