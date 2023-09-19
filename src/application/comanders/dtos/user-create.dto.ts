import {
  IsNotEmpty, IsObject, IsString
} from 'class-validator';

export class UserCreateDto {
  @IsString()
  @IsNotEmpty()
    name: string;

  @IsObject()
  @IsNotEmpty()
    jsonData: object;
}
