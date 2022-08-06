import IContentfulImage from "./IContentfulImage";

export default interface ISkill {
  node: {
    title: string;
    icon: IContentfulImage;
    caption: string;
  };
}
