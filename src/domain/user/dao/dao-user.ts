import { UserEntity } from 'src/infrastructure/modules/user/entity/user.entity';
import { UserListDto } from 'src/application/comanders/dtos/user-list.dto';

export abstract class UserDao {
  abstract list(): Promise<UserListDto[]>;
  abstract getUserByEmail(email:string): Promise<UserEntity>;
  abstract getUserByUid(email:string): Promise<UserEntity>;
}
