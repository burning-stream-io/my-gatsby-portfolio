import React, { FC } from "react";
import { FullCard, HalfCard } from "../components/Cards";
import Title from "../components/Title";
import "../styles/index.css";
import useUser from "../data/useUser";
import IUser from "../interfaces/IUser";

const Home: FC = () => {
  const userData = useUser();
  const user: IUser = userData.allContentfulUser.edges[0].node;
  return (
    <div>
      <Title title={"About me"} />
      <FullCard caption={user.about.about} />
      <Title title={"Tech stack"} />
      <div className="half-cards-container">
        {user.stack.length > 0
          ? user.stack.map((tech) => (
              <HalfCard
                title={tech.title}
                caption={tech.subtitle}
                icon={tech.icon.file.url}
                rate={3.5}
              />
            ))
          : null}
      </div>
      <br />
    </div>
  );
};

export default Home;
