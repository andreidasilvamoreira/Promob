import { BaseRepository } from 'src/common/repositories/base.repository';
import { ProjectItemEntity } from '../entities/project-item.entity';
import { db } from 'src/config/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectItemRepository extends BaseRepository<ProjectItemEntity> {
  constructor() {
    super(db, 'project_items');
  }
}
