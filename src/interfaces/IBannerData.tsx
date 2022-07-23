import IContentfulImage from "./IContentfulImage";

export default interface IBannerData {
  node: {
    title: string;
    subtitle: string;
    image: IContentfulImage[];
    icon: IContentfulImage;
  };
}
