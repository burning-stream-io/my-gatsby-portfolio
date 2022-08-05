import IContentfulImage from "./IContentfulImage";

export default interface ISkillsData {
  node: {
    title: string;
    icon: IContentfulImage;
    caption: string;
  };
}
