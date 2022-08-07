import React, { FC, useEffect, useState } from "react";
import "./index.css";
import Typewriter from "typewriter-effect";
import HorizontalLine from "../HorizontalLine";
import { BsEnvelopeFill } from "react-icons/bs";
import Button from "../Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ContactMeModal from "../CotactMeModal";
import useUser from "../../data/useUser";
import IUser from "../../interfaces/IUser";

gsap.registerPlugin(ScrollTrigger);
type Props = {
  hide?: boolean;
};
const Aside: FC<Props> = ({ hide }) => {
  const userData = useUser();
  const user: IUser = userData.allContentfulUser.edges[0].node;
  const [contactMeModal, setContactMeModal] = useState(false);
  const handleContactMeModal = () => {
    setContactMeModal((prev) => {
      return !prev;
    });
  };
  const handleOpenContactMeModal = () => {
    if (!contactMeModal) {
      handleContactMeModal();
    }
  };
  const handleCloseContactMeModal = () => {
    if (contactMeModal) {
      handleContactMeModal();
    }
  };

  useEffect(() => {
    if (window.innerWidth > 768) {
      gsap.to(".sidebar-container", {
        scrollTrigger: {
          trigger: ".sidebar-container",
          start: 50,
          end: 200,
          scrub: 3,
          toggleActions: "restart pause reverse pause",
        },
        ease: "power2.out",
        scale: 0.7,
        top: "10vh",
        borderRadius: 10,
      });
    }
  }, []);
  return (
    <div className={`sidebar-container ${hide ? "hide" : ""}`}>
      <div className="sidebar-content">
        <div className="sidebar-avatar">
          <img src={user.avatar.file.url} alt={user.avatar.file.fileName} />
        </div>
        <h5 className="sidebar-title">{user.fullName}</h5>
        <br />
        <Typewriter
          options={{
            wrapperClassName: "sidebar-typewriter-wrapper",
            cursorClassName: "sidebar-typewriter-cursor",
            strings: user.titles,
            autoStart: true,
            loop: true,
          }}
        />
        <HorizontalLine
          borderColor="rgba(225, 225, 235, 0.9)"
          margin="3rem 0"
        />
        <div className="sidebar-social">
          {user.formalAccounts.map((account, index) => (
            <a
              key={index}
              href={account.link}
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar-social-item"
            >
              <img
                alt={account.icon.file.fileName}
                className={"sidebar-social-item-icon"}
                src={account.icon.file.url}
              />
            </a>
          ))}
        </div>
        <HorizontalLine
          borderColor="rgba(225, 225, 235, 0.9)"
          margin="2.5rem 0"
        />
        {/* user location */}
        <div className="sidebar-user-info">
          <div className="sidebar-user-info-item">
            <span className="sidebar-user-info-item-name">Residence</span>
            <span className="sidebar-user-info-item-value text-right">
              {user.residence}
            </span>
          </div>
          <div className="sidebar-user-info-item">
            <span className="sidebar-user-info-item-name">City</span>
            <span className="sidebar-user-info-item-value text-right">
              {user.city}
            </span>
          </div>
          <div className="sidebar-user-info-item">
            <span className="sidebar-user-info-item-name">Age</span>
            <span className="sidebar-user-info-item-value text-right">
              {user.age}
            </span>
          </div>
        </div>
        <HorizontalLine
          borderColor="rgba(225, 225, 235, 0.9)"
          margin="2.5rem 0"
        />

        <Button
          handleClick={handleOpenContactMeModal}
          title="Contact me"
          icon={<BsEnvelopeFill />}
        />
        <ContactMeModal
          isOpen={contactMeModal}
          onClose={handleCloseContactMeModal}
        />
      </div>
    </div>
  );
};

export default Aside;
