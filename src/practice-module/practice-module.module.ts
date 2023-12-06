import { Module } from '@nestjs/common';
import { PracticeModuleController } from './practice-module.controller';
import { PracticeModuleService } from './practice-module.service';

@Module({
  controllers: [PracticeModuleController],
  providers: [PracticeModuleService]
})
export class PracticeModuleModule {}
