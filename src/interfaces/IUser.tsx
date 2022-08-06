import IAccount from "./IAccount";

export default interface IUser {
  name: string;
  fullName: string;
  formalAccounts: IAccount["node"][];
  titles: string[];
  residence: string;
  city: string;
  age: number;
}
