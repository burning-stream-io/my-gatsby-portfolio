import React, { FC } from "react";
import { FullCard, HalfCard } from "../components/Cards";
import Title from "../components/Title";
import "../styles/index.css";

const Home: FC = () => {
  return (
    <div>
      <Title title={"About me"} />
      <FullCard
        caption="Results-driven and motivated Software Engineer with demonstrated
        experience in building modern beautiful software with optimized
        performance, I enjoy building web/mobile applications, with interactive
        design and learning new things in order to deliver better quality
        products."
      />
      <Title title={"Tech stack"} />
      <div className="half-cards-container">
        <HalfCard
          title="React Native"
          caption="Build high performant pixel-perfect, buttery smooth UIs across both mobile platforms."
          icon="https://cdn.worldvectorlogo.com/logos/react-native-1.svg"
          rate={4.5}
        />
        <HalfCard
          title="React"
          caption="Build user interfaces with React, and let React handle the rendering of your data."
          icon="https://cdn.worldvectorlogo.com/logos/react-2.svg"
          rate={4}
        />
        <HalfCard
          title="Node.js"
          caption="Build scalable network applications with Node.js, Express, and Socket.io."
          icon="https://cdn.worldvectorlogo.com/logos/nodejs.svg"
          rate={3.5}
        />

        <HalfCard
          title="NestJS"
          caption="Build scalable network applications with Nest.js"
          icon="https://cdn.worldvectorlogo.com/logos/nestjs.svg"
          rate={3}
        />
      </div>
    </div>
  );
};

export default Home;
