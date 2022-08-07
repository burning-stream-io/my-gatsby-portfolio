import IContentfulImage from "./IContentfulImage";

export default interface IEducation {
  node: {
    school: string;
    description: string;
    department: string;
    startedDate: string;
    endDate: string;
    subjects: string[];
    icon: IContentfulImage;
  };
}
