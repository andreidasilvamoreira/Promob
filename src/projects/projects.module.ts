import { Module } from '@nestjs/common';
import { ProjectRepository } from './repositories/project.repository';
import { ProjectService } from './services/project.service';
import { ProjectItemService } from './services/project-item.service';
import { ProjectItemRepository } from './repositories/project-item.repository';

@Module({
  controllers: [ProjectController, ProjectItemController],
  providers: [
    ProjectService,
    ProjectRepository,
    ProjectItemService,
    ProjectItemRepository,
  ],
})
export class ProjectsModule {}
