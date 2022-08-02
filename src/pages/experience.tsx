import React from "react";
import { FullCard } from "../components/Cards";
import Title from "../components/Title";
import "../styles/index.css";

const Experience = () => {
  return (
    <div className="container">
      <Title title={"Skills"} />
      <FullCard
        title="Front-End"
        // subtitle="\n"
        // titleHref="http://su.edu.krd/"
        logo="https://cdn-icons.flaticon.com/png/512/5433/premium/5433819.png?token=exp=1659350973~hmac=197f498e875e9841c23a42e743eabe67"
        caption="HTML, CSS, Bootstrap, Materialize, Tailwind, JS, TS, GSAP, React, Framer-Motion, React-Native, Reanimated, CI/CD, GatsbyJs ,NextJs , Redux, Saga."
      />
      <br />
      <FullCard
        title="Back-End"
        logo="https://cdn-icons.flaticon.com/png/512/5432/premium/5432506.png?token=exp=1659351037~hmac=54fb65d9c6f34ac6383996ad27182269"
        caption="NodeJs/Express, NestJs, MySQL, PostgreSQL, Type ORM, MongoDB, Firebase"
      />
      <br />

      <FullCard
        title="Others"
        logo="https://cdn-icons.flaticon.com/png/512/5433/premium/5433784.png?token=exp=1659353339~hmac=80b4e7afa6a3825ed793dc8a0849f217"
        caption="Jest, Detox, Figma, Framer, Affinity Designer, Jira, BitBucket"
      />

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
          "Developed a court-management system as my capstone project that digitized submitting a case to a court by letting a citizen submit it and allow lawyers, and judges to handle the other process for them.",
          "Developed an e-commerce website for electronic products.",
          "Developed a website for Salahaddin University students to access and download previous lectures, exams, and resources.",
          "Developed a warehouse inventory management system where they can manage inventory and have POS integrated into the system, As well as having reporting functionality in place with different types of dashboards for the stakeholders.",
          "Developed a dashboard for Salahaddin university for the alumni thesis, the project was containing a website and an admin panel for managing the content, I did the front end of the admin panel.",
        ]}
      />
    </div>
  );
};

export default Experience;
