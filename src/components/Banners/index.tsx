import React, { ReactNode, useEffect, useRef, useState } from "react";
import IBannerData from "../../interfaces/IBannerData";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS } from "@contentful/rich-text-types";
import Lottie from "lottie-react";
import scrollAnimation from "../../assets/scroll.json";
import "./index.css";

import { isBrowser } from "../../utilities";
import useBannersQuery from "../../data/useBannersData";

const Banners = () => {
  const [activeBanner, setActiveBanner] = useState<number>(0);
  const options = {
    renderNode: {
      [BLOCKS.UL_LIST]: (_: any, children: ReactNode) => {
        return <ul className="banner-list">{children}</ul>;
      },
    },
  };

  const scrollTo = () => {
    if (isBrowser()) {
      if (window.innerWidth > 768) {
        window.scrollTo({
          top: window.innerHeight * 0.5,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: window.innerHeight * 1.28,
          behavior: "smooth",
        });
      }
    }
  };

  const data = useBannersQuery();
  const banners: IBannerData[] = data.allContentfulBanner.edges;
  const sliderRef = useRef<NodeJS.Timer>();

  useEffect(() => {
    sliderRef.current = setInterval(() => {
      setActiveBanner((prevState) => (prevState + 1) % banners.length);
    }, 5000);

    return () => {
      clearInterval(sliderRef.current);
    };
  }, []);

  return (
    <div className="banner">
      {banners.map((banner, i) => (
        <div key={i}>
          <img
            className={`banner-image ${activeBanner === i ? "active" : ""}`}
            src={banner.node.image[0].file.url}
            alt={`banner-${i}`}
          />
          <div
            className={`banner-content ${activeBanner === i ? "active" : ""}`}
          >
            <h1 className="banner-title">{banners[i].node.title}</h1>
            {renderRichText(banner.node.quotes, options)}
          </div>
        </div>
      ))}
      <div className="banner-scroll-container">
        <Lottie
          onClick={scrollTo}
          className="banner-scroll"
          animationData={scrollAnimation}
        />
      </div>
    </div>
  );
};

export default Banners;
