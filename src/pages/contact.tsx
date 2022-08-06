import React from "react";
import { HalfCard } from "../components/Cards";
import Title from "../components/Title";
import useMainAccounts from "../data/useMainAccounts";
import IAccount from "../interfaces/IAccount";
import useSocialAccounts from "../data/useSocialAccounts";

const Contact = () => {
  const mainAccountsData = useMainAccounts();
  const mainAccounts: IAccount[] =
    mainAccountsData.allContentfulMainAccounts.edges;
  const socialAccountsData = useSocialAccounts();
  const socialAccounts: IAccount[] =
    socialAccountsData.allContentfulSocialAccounts.edges;
  return (
    <div>
      <br />
      <Title title={"Get in touch"} />
      <div className="half-cards-container">
        {mainAccounts && mainAccounts.length > 0
          ? mainAccounts.map((account, index) => (
              <HalfCard
                key={index}
                title={account.node.title}
                subtitle={account.node.subtitle}
                icon={account.node.icon.file.url}
                link={account.node.link}
              />
            ))
          : null}
      </div>
      <Title title={"Follow me on"} />
      <div className="half-cards-container">
        {socialAccounts && socialAccounts.length > 0
          ? socialAccounts.map((account, index) => (
              <HalfCard
                key={index}
                title={account.node.title}
                subtitle={account.node.subtitle}
                icon={account.node.icon.file.url}
                link={account.node.link}
              />
            ))
          : null}
      </div>
      <br />
    </div>
  );
};

export default Contact;
