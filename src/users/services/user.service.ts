import {
  CreateData,
  UpdateData,
} from 'src/common/repositories/repository.types';
import { UserEntity } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';

export class UserService {
  constructor(public readonly userRepository: UserRepository) {}

  async findAll(): Promise<UserEntity[]> {
    return this.userRepository.findAll();
  }

  async findById(id: number): Promise<UserEntity | null> {
    return this.userRepository.findById(id);
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    return this.userRepository.findByEmail(email);
  }

  async findByUsername(username: string): Promise<UserEntity | null> {
    return this.userRepository.findByUsername(username);
  }

  async create(data: CreateData<UserEntity>): Promise<UserEntity> {
    return this.userRepository.create(data);
  }

  async update(
    id: number,
    data: UpdateData<UserEntity>,
  ): Promise<UserEntity | null> {
    return this.userRepository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    return this.userRepository.delete(id);
  }
}
