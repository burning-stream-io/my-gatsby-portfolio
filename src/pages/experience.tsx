import React from "react";
import { FullCard, HalfCard } from "../components/Cards";
import Title from "../components/Title";
import "../styles/index.css";

const Experience = () => {
  return (
    <div className="container">
      <Title title={"Experience"} />
      <FullCard
        subtitle="Mobile Application Developer"
        title="Lezzoo"
        logo="https://lezzoo.com/assets/images/logo-icon.svg"
        startDate="Jun 2021"
        endDate="Jul 2022"
        captions={[
          "Implementing the UI/UX designs into functional components within the react native apps.",
          "Handling calculations of prices, discounts, and any mathematical processes within the mobile app codes.",
          "Connecting the components and modules to APIs and handling data viewing.",
          "Fixing previously existing bugs or issues within the mobile app codes.",
          "Testing the codes and their functionalities and making sure they are up to standards.",
          "Optimizing the mobile app codes",
          "Working with a group of developers on a daily basis.",
        ]}
      />

      <Title title={"Projects"} />
      <FullCard
        subtitle="Front-end Developer"
        title="Freelancer"
        logo="https://cdn-icons-png.flaticon.com/512/5024/5024509.png"
        startDate="2018"
        endDate="Present"
        captions={[
          "Worked as a Team or individually to develop the frontend of multiple websites.",
          "Implemented the UI/UX designs into functional components with pixel perfect design.",
          "Participated in the requirements gathering and design process of the project.",
          "Maintained the codebase and oversaw the development of the project.",
        ]}
      />
    </div>
  );
};

export default Experience;
