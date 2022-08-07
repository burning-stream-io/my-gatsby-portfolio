import React from "react";
import Title from "../components/Title";
import { FullCard, HalfCard } from "../components/Cards";
import useEducations from "../data/useEducations";
import IEducation from "../interfaces/IEducation";

const Education = () => {
  const educationData = useEducations();
  const educations: IEducation[] = educationData.allContentfulEducation.edges;
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
        <HalfCard
          icon="https://logo.clearbit.com/flatiron.com"
          subtitle="Front-End Web Development"
          title="Flatiron School"
          link="https://images.ctfassets.net/hfpzws8a209r/2JmbBG92HAxVrTjpvbZ0R7/7a27834c56c3d0d71af55722e1fbf813/Flatiron_School_Certificate_of_Completion.png"
          caption="Certificate of Completion"
          footer="08/2020"
        />
        <HalfCard
          icon="https://logo.clearbit.com/codecademy.com"
          subtitle="Learn JavaScript course"
          title="Codecademy"
          link="https://images.ctfassets.net/hfpzws8a209r/7tgYqomRoFVLk1G8EEcCwc/23f3dd72f15d8dc06a849ae5982ead41/Hewr_Srood___Codecademy.png"
          caption="Certificate of Completion"
          footer="10/2020"
        />
        <HalfCard
          icon="https://logo.clearbit.com/hackerrank.com"
          subtitle="JavaScript (Intermediate)"
          title="HackerRank"
          link="https://images.ctfassets.net/hfpzws8a209r/4uFnps3tSP61clXcIkznM2/18033e7151e8c0ad5537231ea5293b7f/download__1_.png"
          caption="Skill Assessment"
          footer="05/2021"
        />
        <HalfCard
          icon="https://logo.clearbit.com/udemy.com"
          subtitle="NestJS Zero to Hero"
          title="HackerRank"
          link="https://www.udemy.com/certificate/UC-4f9fef38-9833-4369-8d81-46887a4a4f2d/"
          caption="Certificate of Completion"
          footer="08/2021"
        />
      </div>
    </div>
  );
};

export default Education;
