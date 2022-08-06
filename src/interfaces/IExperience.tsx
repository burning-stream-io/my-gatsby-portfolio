import IContentfulImage from "./IContentfulImage";

export default interface IExperience {
  node: {
    company: string;
    jobTitle: string;
    startedDate: string;
    endDate: string;
    responsibilities: string[];
    companyLogo: IContentfulImage;
  };
}
