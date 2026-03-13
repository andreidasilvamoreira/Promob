import {
  CreateData,
  UpdateData,
} from 'src/common/repositories/repository.types';
import { ProjectItemRepository } from '../repositories/project-item.repository';
import { ProjectItemEntity } from '../entities/project-item.entity';

export class ProjectItemService {
  constructor(public readonly projectItemRepository: ProjectItemRepository) {}

  async findAll(): Promise<ProjectItemEntity[]> {
    return this.projectItemRepository.findAll();
  }

  async findById(id: number): Promise<ProjectItemEntity | null> {
    return this.projectItemRepository.findById(id);
  }

  async create(
    data: CreateData<ProjectItemEntity>,
  ): Promise<ProjectItemEntity> {
    return this.projectItemRepository.create(data);
  }

  async update(
    id: number,
    data: UpdateData<ProjectItemEntity>,
  ): Promise<ProjectItemEntity | null> {
    return this.projectItemRepository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    return this.projectItemRepository.delete(id);
  }
}
