import React, { useEffect, useState, useRef, FC } from "react";
import "./index.css";
import Typewriter from "typewriter-effect";
import { StaticImage } from "gatsby-plugin-image";
import HorizontalLine from "../HorizontalLine";
import {
  BsEnvelopeFill,
  BsGithub,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import Button from "../Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ContactMeModal from "../CotactMeModal";

gsap.registerPlugin(ScrollTrigger);
type Props = {
  hide?: boolean;
};
const Aside: FC<Props> = ({ hide }) => {
  const [contactMeModal, setContactMeModal] = useState(false);
  const handleContactMeModal = () => {
    setContactMeModal(!contactMeModal);
  };
  const social = [
    {
      name: "Github",
      url: "https://github.com/Hewr-Srood",
      icon: <BsGithub className="sidebar-social-item-icon" />,
    },
    {
      name: "Twitter",
      url: "",
      icon: <BsTwitter className="sidebar-social-item-icon" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/hewr-srood/",
      icon: <BsLinkedin className="sidebar-social-item-icon" />,
    },
  ];

  const userInfo = [
    {
      name: "residence",
      value: "Iraq",
    },
    {
      name: "city",
      value: "Erbil",
    },
    {
      name: "age",
      value: "22",
    },
  ];

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
        top: 110,
        scale: 0.7,
        borderRadius: 10,
      });
    }
  }, []);
  return (
    <div className={`sidebar-container ${hide ? "hide" : ""}`}>
      <div className="sidebar-content">
        <div className="sidebar-avatar">
          <StaticImage src="../../images/user.jpeg" alt="myself" />
        </div>
        <h5 className="sidebar-title">Hewr Srood</h5>
        <Typewriter
          options={{
            wrapperClassName: "sidebar-typewriter-wrapper",
            cursorClassName: "sidebar-typewriter-cursor",
            strings: [
              "Software Engineer",
              "Web | React developer",
              "Mobile | React Native developer",
            ],
            autoStart: true,
            loop: true,
          }}
        />
        <HorizontalLine
          borderColor="rgba(225, 225, 235, 0.9)"
          margin="3rem 0"
        />
        <div className="sidebar-social">
          {social.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar-social-item"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <HorizontalLine
          borderColor="rgba(225, 225, 235, 0.9)"
          margin="2.5rem 0"
        />
        {/* user location */}
        <div className="sidebar-user-info">
          {userInfo.map((item) => (
            <div key={item.name} className="sidebar-user-info-item">
              <span className="sidebar-user-info-item-name">{item.name}</span>
              <span className="sidebar-user-info-item-value text-right">
                {item.value}
              </span>
            </div>
          ))}
        </div>
        <HorizontalLine
          borderColor="rgba(225, 225, 235, 0.9)"
          margin="2.5rem 0"
        />

        <Button
          onClick={handleContactMeModal}
          title="Contact me"
          icon={<BsEnvelopeFill />}
        />
        <ContactMeModal
          isOpen={contactMeModal}
          onClose={handleContactMeModal}
        />
      </div>
    </div>
  );
};

export default Aside;
