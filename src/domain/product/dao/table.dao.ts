import { TableListDto } from 'src/application/comanders/dtos/table.dto';

export abstract class TableDao {
  abstract listTableForConfig (): Promise<TableListDto[]>;
  abstract getTable (id:string): Promise<TableListDto>;

  abstract getTableForDeviceAndPass(device:string, pass:string): Promise<TableListDto>
}
