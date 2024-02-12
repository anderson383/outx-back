import { AuthDto } from 'src/application/comanders/dtos/auth.dto';

export abstract class AuthDao {
  abstract validateRoles (): Promise<string>;
}
