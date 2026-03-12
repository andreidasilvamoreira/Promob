import { BaseRepository } from 'src/common/repositories/base.repository';
import { ProjectItemEntity } from '../entities/project-item.entity';
import { db } from 'src/config/database';

export class ProjectItemRepository extends BaseRepository<ProjectItemEntity> {
  constructor() {
    super(db, 'project_items');
  }
}
