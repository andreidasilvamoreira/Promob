import { Module } from '@nestjs/common';
import { EstimateService } from './services/estimate.service';
import { EstimateRepository } from './repositories/estimate.repository';
import { EstimateItemService } from './services/estimate-item.service';

@Module({
  controllers: [EstimateController, EstimateItemController],
  providers: [
    EstimateService,
    EstimateRepository,
    EstimateItemService,
    EstimateItemService,
  ],
})
export class EstimatesModule {}
