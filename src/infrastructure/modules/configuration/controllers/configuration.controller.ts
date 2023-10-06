import {
  Body,
  Controller, Get, Param
} from '@nestjs/common';
import { AuthCustomGuard } from '../../auth/guards/auth.guard';
import { GetCategoryHandler } from 'src/application/consults/configuration/get-category.handler';

@Controller('config')
export class ConfigurationController {
  constructor(
    private _categoryHandler: GetCategoryHandler,
  ) {}

  @Get('/categories-company')
  async getCategoryCompany() {
    return this._categoryHandler.execute();
  }

  @Get('/categories-campus/:id')
  async getCategoryCampus(@Param('id') id: string) {
    return this._categoryHandler.executeForCampus(id);
  }
}
