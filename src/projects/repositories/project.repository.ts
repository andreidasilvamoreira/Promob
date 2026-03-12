import { BaseRepository } from 'src/common/repositories/base.repository';
import { ProjectEntity } from '../entities/project.entity';
import { db } from 'src/config/database';

export class ProjectRepository extends BaseRepository<ProjectEntity> {
  constructor() {
    super(db, 'projects');
  }
}
