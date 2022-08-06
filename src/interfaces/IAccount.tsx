import IContentfulImage from "./IContentfulImage";

export default interface IAccount {
  node: {
    title: string;
    subtitle: string;
    icon: IContentfulImage;
    link: string;
  };
}
