import {
  IsEmail, IsNotEmpty
} from 'class-validator';

export class AuthDto {
  id: string;
  password: string;
  email:string;
}

export class AuthCredentialsDto {
  @IsNotEmpty()
    password: string;

  @IsNotEmpty()
  @IsEmail()
    email:string;
}
