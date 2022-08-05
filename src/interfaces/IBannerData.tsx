import IContentfulImage from "./IContentfulImage";
import { RenderRichTextData } from "gatsby-source-contentful/rich-text";

export default interface IBannerData {
  node: {
    title: string;
    image: IContentfulImage[];
    icon: IContentfulImage;
    quotes: RenderRichTextData<any>;
  };
}
