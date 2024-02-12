
import { AuthDataSignDto } from 'src/application/comanders/dtos/auth.dto';

export abstract class CompanyRepository {
  abstract createCompanyForSignUp(user: AuthDataSignDto): Promise<string>;
}
