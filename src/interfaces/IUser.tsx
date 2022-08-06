import IAccount from "./IAccount";
import IContentfulImage from "./IContentfulImage";

export default interface IUser {
  name: string;
  fullName: string;
  formalAccounts: IAccount["node"][];
  titles: string[];
  residence: string;
  city: string;
  age: number;
  about: {
    about: string;
  };
  stack: {
    title: string;
    subtitle: string;
    icon: IContentfulImage;
  }[];
}
