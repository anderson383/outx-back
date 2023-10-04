import {
  IsBoolean,
  IsEmail, IsNotEmpty, IsString, ValidateIf
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

export class AuthDataSignDto {
  @IsNotEmpty()
  @IsString()
    fullName: string;

  @IsNotEmpty()
  @IsEmail()
    email:string;

  @IsNotEmpty()
  @IsString()
    sex: string;

  @IsNotEmpty()
  @IsString()
    password: string;

  @IsBoolean()
    isCompany: boolean;

  // if bussines required next fields
  @ValidateIf(object => object.isCompany === true)
  @IsNotEmpty()
  @IsString()
    fullNameCompany: string;

  @ValidateIf(object => object.isCompany === true)
  @IsNotEmpty()
  @IsString()
    nit: string;

  @ValidateIf(object => object.isCompany === true)
  @IsNotEmpty()
  @IsString()
    reasonSocial: string;

  @ValidateIf(object => object.isCompany === true)
  @IsNotEmpty()
  @IsString()
    cedula: string;

  @ValidateIf(object => object.isCompany === true)
  @IsNotEmpty()
  @IsString()
    category: string;

  uid?: string;
}
