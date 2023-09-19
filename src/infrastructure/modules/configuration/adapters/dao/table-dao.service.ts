import { EntityManager } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { TableDao } from 'src/domain/product/dao/table.dao';
import { TableListDto } from 'src/application/comanders/dtos/table.dto';
@Injectable()
export class TableDaoService implements TableDao {
  constructor(@InjectEntityManager() private entityManager: EntityManager) {}
  async listTableForConfig(): Promise<TableListDto[]> {
    const query = this.entityManager
      .createQueryBuilder<TableListDto>('Table', 'table')
      .select(['table.id', 'table.name', 'table.code']);

    return query.getMany();
  }

  async getTable(id: string): Promise<TableListDto> {
    const query = this.entityManager
      .createQueryBuilder<TableListDto>('Table', 'table')
      .select(['table.id', 'table.name', 'table.code', 'table.auth_id', 'table.auth_password']).where('id =:id', {id});

    return query.getOne();
  }

  async getTableForDeviceAndPass(device:string, pass:string): Promise<TableListDto> {
    const query = this.entityManager
      .createQueryBuilder<TableListDto>('Table', 'table')
      .select(['table.id', 'table.name', 'table.code', 'table.auth_id', 'table.auth_password'])
      .where('auth_id=:device', {device})
      .andWhere('auth_password=:pass', {pass});

    return query.getOne();
  }
}
