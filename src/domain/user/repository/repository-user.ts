import { AuthDataSignDto } from 'src/application/comanders/dtos/auth.dto';
import { UserCreateDto } from 'src/application/comanders/dtos/user-create.dto';

export abstract class RepositoryUser {
  abstract create(user: AuthDataSignDto): Promise<string>;
}
