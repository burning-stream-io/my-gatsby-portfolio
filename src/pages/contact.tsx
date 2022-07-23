import React from "react";
import { HalfCard } from "../components/Cards";
import ContactMeModal from "../components/CotactMeModal";
import Title from "../components/Title";

const Contact = () => {
  return (
    <div>
      <Title title={"Get in touch"} />
      <div className="half-cards-container">
        <HalfCard
          icon="https://cdn.worldvectorlogo.com/logos/outlook-1.svg"
          title="Email"
          subtitle="Hewr_s@outlook.com"
          link="mailto:Hewr_s@outlook.com"
        />
        <HalfCard
          icon="https://cdn.worldvectorlogo.com/logos/whatsapp-icon.svg"
          title="WhatsApp"
          subtitle="+964 (750) 861-4371"
          link="tel:+964-750-861-4371"
        />
      </div>
      <Title title={"Follow me on"} />
      <div className="half-cards-container">
        {/* facebook */}
        <HalfCard
          icon="https://cdn.worldvectorlogo.com/logos/facebook-2020-1-1.svg"
          title="Facebook"
          subtitle="Hewr Srood"
          link="https://www.facebook.com/hewr.srood"
        />
        {/* instagram */}
        <HalfCard
          icon="https://cdn.worldvectorlogo.com/logos/instagram-5.svg"
          title="Instagram"
          subtitle="hewr_srood"
          link="https://www.instagram.com/hewr_srood/"
        />
        {/* codepen */}
        <HalfCard
          icon="https://cdn.worldvectorlogo.com/logos/codepen-icon.svg"
          title="Codepen"
          subtitle="hewr_srood"
          link="https://codepen.io/hewr-srood/"
        />
        {/* codesandbox */}
        <HalfCard
          icon="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/codesandbox-512.png"
          title="Codesandbox"
          subtitle="hewr_srood"
          link="https://codesandbox.io/u/Hewr-Srood"
        />
        {/* expo */}
        <HalfCard
          icon="https://play-lh.googleusercontent.com/algsmuhitlyCU_Yy3IU7-7KYIhCBwx5UJG4Bln-hygBjjlUVCiGo1y8W5JNqYm9WW3s"
          title="Expo"
          subtitle="hewr"
          link="https://expo.dev/@hewr?tab=snacks"
        />
      </div>
    </div>
  );
};

export default Contact;
