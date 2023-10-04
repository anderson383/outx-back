import {
  compare, hash
} from 'bcrypt';
import {
  HttpException,
  Injectable, NotFoundException, UnauthorizedException
} from '@nestjs/common';
import { AuthDao } from 'src/domain/auth/dao/auth.dao';
import {AuthDataSignDto} from 'src/application/comanders/dtos/auth.dto';
import { authFireBase } from 'src/main';
import { CompanyRepository } from 'src/domain/configuration/repository/company';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { JwtService } from '@nestjs/jwt';
import { RepositoryUser } from 'src/domain/user/repository/repository-user';
import { UserDao } from 'src/domain/user/dao/dao-user';

@Injectable()
export class SignUpUserHandler {
  constructor(
    private _userRepository: RepositoryUser,

    private _companyRepository: CompanyRepository,
    private _authDao: AuthDao,
    private _userDao: UserDao,
    private jwtService: JwtService
  ) {}
  async execute(singUp: AuthDataSignDto): Promise<string> {
    const findUser = await this._userDao.getUserByEmail(singUp.email);

    if (findUser) {
      throw new NotFoundException('El usuario con el correo ya existe');
    } else {
      const userFireBase = await createUserWithEmailAndPassword(authFireBase, singUp.email, singUp.password);

      await this._userRepository.create({
        ...singUp,
        uid: userFireBase.user.uid
      });

      if (singUp.isCompany) {
        await this._companyRepository.createCompanyForSignUp(singUp);
      }

      return '¡Usuario creado correctamente!';
    }
  }
}
