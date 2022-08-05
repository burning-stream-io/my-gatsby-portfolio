import IContentfulImage from "./IContentfulImage";

export default interface IExperienceData {
  node: {
    company: string;
    jobTitle: string;
    startedDate: string;
    endDate: string;
    responsibilities: string[];
    companyLogo: IContentfulImage;
  };
}
