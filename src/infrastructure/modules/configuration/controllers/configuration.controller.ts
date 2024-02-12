import {
  Body,
  Controller, Get, Param, ParseArrayPipe, Query
} from '@nestjs/common';
import { AuthCustomGuard } from '../../auth/guards/auth.guard';
import { GetCategoryHandler } from 'src/application/consults/configuration/get-category.handler';
import { GetGenericListHandler } from 'src/application/consults/configuration/get-generic-list.handler';

@Controller('config')
export class ConfigurationController {
  constructor(
    private _categoryHandler: GetCategoryHandler,
    private _genericListHandler: GetGenericListHandler
  ) {}

  @Get('/categories-company')
  async getCategoryCompany() {
    return this._categoryHandler.execute();
  }

  @Get('/categories-campus/:id')
  async getCategoryCampus(@Param('id') id: string) {
    return this._categoryHandler.executeForCampus(id);
  }

  @Get('/generic-list/:code')
  async getForListItem(@Param('code') code: string) {
    return this._genericListHandler.getOneForCode(code);
  }

  @Get('/generic-list-all')
  async getListItemForParent(
    @Query('codes', ParseArrayPipe) codes: string[],
  ) {
    return this._genericListHandler.getAllForCodes(codes);
  }
}
