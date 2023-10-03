import {
  compare, hash
} from 'bcrypt';
import {
  HttpException,
  Injectable, NotFoundException, UnauthorizedException
} from '@nestjs/common';
import {
  AuthCredentialsDto, AuthDataSignDto
} from 'src/application/comanders/dtos/auth.dto';
import { AuthDao } from 'src/domain/auth/dao/auth.dao';
import { JwtService } from '@nestjs/jwt';
import { UserDao } from 'src/domain/user/dao/dao-user';
import { RepositoryUser } from 'src/domain/user/repository/repository-user';
import { CompanyRepository } from 'src/domain/configuration/repository/company';

@Injectable()
export class SignUpUserHandler {
  constructor(
    private _userRepository: RepositoryUser,

    private _companyRepository: CompanyRepository,
    private _authDao: AuthDao,
    private _userDao: UserDao,
    private jwtService: JwtService
  ) {}
  async execute(singUp: AuthDataSignDto): Promise<any> {
    const findUser = await this._userDao.getUserByEmail(singUp.email);

    if (findUser) {
      throw new NotFoundException('El usuario con el correo ya existe');
    } else {
      this._userRepository.create(singUp);
      if (singUp.isCompany) {
        this._companyRepository.createCompanyForSignUp(singUp);
      }
    }
  }
}
