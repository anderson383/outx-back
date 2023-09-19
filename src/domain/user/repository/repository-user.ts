import { UserCreateDto } from 'src/application/comanders/dtos/user-create.dto';

export abstract class RepositoryUser {
  abstract create(user: UserCreateDto): Promise<string>;
}
