import {
  compare, hash
} from 'bcrypt';
import {
  HttpException,
  Injectable, NotFoundException, UnauthorizedException
} from '@nestjs/common';
import {
  LoginResponse, SignInUserHandler
} from './sign-in-user.handler';
import { AuthDao } from 'src/domain/auth/dao/auth.dao';
import {AuthDataSignDto} from 'src/application/comanders/dtos/auth.dto';
import { authFireBase } from 'src/main';
import { CampusRepository } from 'src/domain/configuration/repository/campus';
import { CompanyRepository } from 'src/domain/configuration/repository/company';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {InternalServerErrorException} from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt';
import { RepositoryUser } from 'src/domain/user/repository/repository-user';
import { UserDao } from 'src/domain/user/dao/dao-user';

interface SingUpResponse {
  message: string
  accessToken: string;
  refreshToken: string
}

@Injectable()
export class SignUpUserHandler {
  constructor(
    private _userRepository: RepositoryUser,

    private _companyRepository: CompanyRepository,
    private _campusRepository: CampusRepository,
    private _signInUserHandler: SignInUserHandler,
    private _authDao: AuthDao,
    private _userDao: UserDao,
    private jwtService: JwtService
  ) {}
  public async execute(singUp: AuthDataSignDto): Promise<SingUpResponse> {
    const findUser = await this._userDao.getUserByEmail(singUp.email);

    if (findUser) {
      throw new NotFoundException('El usuario con el correo ya existe xd');
    } else {
      try {
        let campusId = null;
        const userFireBase = await createUserWithEmailAndPassword(authFireBase, singUp.email, singUp.password);

        if (singUp.isCompany) {
          const companyId = await this._companyRepository.createCompanyForSignUp(singUp);

          campusId = await this._campusRepository.createCampusForSignUp(singUp.fullName, companyId);
        }

        await this._userRepository.create({
          ...singUp,
          uid: userFireBase.user.uid,
          campusId
        });

        return {
          message: '¡Usuario creado correctamente!',
          ...await this._signInUserHandler.execute({
            email: singUp.email,
            password: singUp.password
          })
        };
      } catch (err) {
        console.error(err);
        throw new InternalServerErrorException('Ha ocurrido un error al crear el usuario');
      }
    }
  }
}
