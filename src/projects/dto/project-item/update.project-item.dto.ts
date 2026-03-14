import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectItemDto } from './create.project-item.dto';

export class UpdateProjectItemDto extends PartialType(CreateProjectItemDto) {}
