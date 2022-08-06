import React from "react";
import { FullCard } from "../components/Cards";
import Title from "../components/Title";
import "../styles/index.css";
import useSkills from "../data/useSkills";
import ISkill from "../interfaces/ISkill";
import useExperiences from "../data/useExperiences";
import IExperience from "../interfaces/IExperience";

const Experience = () => {
  const skillsData = useSkills();
  const experienceData = useExperiences();
  const skills: ISkill[] = skillsData.allContentfulSkills.edges;
  const experiences: IExperience[] =
    experienceData.allContentfulExperience.edges;
  return (
    <div className="container">
      <br />
      <Title title={"Experience"} />
      {experiences && experiences.length > 0
        ? experiences.map((experience, index) => {
            console.log(experience.node.startedDate);
            return (
              <div>
                <FullCard
                  title={experience.node.company}
                  subtitle={experience.node.jobTitle}
                  logo={experience.node.companyLogo.file.url}
                  startDate={experience.node.startedDate}
                  endDate={experience.node.endDate}
                  captions={experience.node.responsibilities}
                />
                <br />
              </div>
            );
          })
        : null}

      <Title title={"Skills"} />
      <br />
      {skills && skills.length > 0
        ? skills.map((skill: ISkill, index) => (
            <div key={index}>
              <FullCard
                key={index}
                title={skill.node.title}
                logo={skill.node.icon.file.url}
                caption={skill.node.caption}
              />
              <br />
            </div>
          ))
        : null}
    </div>
  );
};

export default Experience;
