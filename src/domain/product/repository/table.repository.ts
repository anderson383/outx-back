
export abstract class TableRepository {
  abstract updateCredentialsForQR (tableId:string, authId, authPass:string): Promise<string>;
}
