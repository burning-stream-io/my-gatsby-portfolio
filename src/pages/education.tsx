import React from "react";
import Title from "../components/Title";
import { FullCard, HalfCard } from "../components/Cards";
import useEducations from "../data/useEducations";
import IEducation from "../interfaces/IEducation";
import useCertificates from "../data/useCertificates";
import ICertificate from "../interfaces/ICertificate";

const Education = () => {
  const educationData = useEducations();
  const educations: IEducation[] = educationData.allContentfulEducation.edges;

  const certificateData = useCertificates();
  const certificates: ICertificate[] =
    certificateData.allContentfulCertificates.edges;
  return (
    <div className="container">
      <br />
      <Title title={"Education"} />
      {educations.map((education, i) => {
        return (
          <>
            <FullCard
              title={education.node.school}
              subtitle={education.node.department}
              logo={education.node.icon.file.url}
              startDate={education.node.startedDate}
              endDate={education.node.endDate}
              caption={education.node.description}
              captions={education.node.subjects}
            />
            <br />
          </>
        );
      })}

      <Title title={"Certificates"} />
      <div className="half-cards-container">
        {certificates.map((certificate, i) => {
          return (
            <HalfCard
              title={certificate.node.title}
              subtitle={certificate.node.subtitle}
              caption={certificate.node.type}
              link={certificate.node.certificate.file.url}
              icon={certificate.node.icon.file.url}
              footer={certificate.node.date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Education;
