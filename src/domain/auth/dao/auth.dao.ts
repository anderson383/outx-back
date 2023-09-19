import { AuthDto } from 'src/application/comanders/dtos/auth.dto';

export abstract class AuthDao {
  abstract login (userCredentials: AuthDto): Promise<string>;

  abstract validateRoles (): Promise<string>;
}
