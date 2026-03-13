import { Module } from '@nestjs/common';
import { MaterialService } from './services/material.service';
import { MaterialRepository } from './repositories/material.repository';

@Module({
  controllers: [MaterialController],
  providers: [MaterialService, MaterialRepository],
})
export class MaterialsModule {}
