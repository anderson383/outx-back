
export abstract class CampusRepository {
  abstract createCampusForSignUp(name:string, companyId:string): Promise<string>;
}
