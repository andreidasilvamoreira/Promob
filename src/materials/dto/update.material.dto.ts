import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from 'src/clients/dto/create.client.dto';

export class UpdateMaterialDto extends PartialType(CreateClientDto) {}
