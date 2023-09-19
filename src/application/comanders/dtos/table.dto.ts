import { IsNotEmpty } from 'class-validator';

export class TableListDto {
  id: string;
  name: string;
  code: string;
  auth_id?:string;
  auth_password?:string;
}

export class TableIdCredentialDto {
  id: string;
}

export class TableCredentialsDto {
  @IsNotEmpty()
    device: string;
  @IsNotEmpty()
    password: string;
}
