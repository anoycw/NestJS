import { Body, Controller, Get, Post } from '@nestjs/common';
import { PracticeModuleService } from './practice-module.service';

@Controller('practice-module')
export class PracticeModuleController {
  constructor(private PracticeModuleService: PracticeModuleService) {}
  @Get()
  getAllData(): any {
    return this.PracticeModuleService.getAllData();
  }

  @Post()
  saveAllData(@Body() requestBody: any): any {
    console.log('requestBodysssssss', requestBody);
    return this.PracticeModuleService.saveAllData();
  }
}
