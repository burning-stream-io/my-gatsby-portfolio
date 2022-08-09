import IContentfulImage from "./IContentfulImage";

export default interface ICertificate {
  node: {
    title: string;
    subtitle: string;
    certificate: IContentfulImage;
    icon: IContentfulImage;
    type: string;
    date: string;
  };
}
