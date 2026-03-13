import {
  CreateData,
  UpdateData,
} from 'src/common/repositories/repository.types';
import { ProjectEntity } from '../entities/project.entity';
import { ProjectRepository } from '../repositories/project.repository';

export class ProjectService {
  constructor(public readonly projectRepository: ProjectRepository) {}

  async findAll(): Promise<ProjectEntity[]> {
    return this.projectRepository.findAll();
  }

  async findById(id: number): Promise<ProjectEntity | null> {
    return this.projectRepository.findById(id);
  }

  async create(data: CreateData<ProjectEntity>): Promise<ProjectEntity> {
    return this.projectRepository.create(data);
  }

  async update(
    id: number,
    data: UpdateData<ProjectEntity>,
  ): Promise<ProjectEntity | null> {
    return this.projectRepository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    return this.projectRepository.delete(id);
  }
}
