import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect, useRef, useState } from "react";
import IBannerData from "../../interfaces/IBannerData";
import "./index.css";
const Banners = () => {
  const [activeBanner, setActiveBanner] = useState<number>(0);

  const data = useStaticQuery(graphql`
    {
      allContentfulBanner {
        edges {
          node {
            title
            subtitle
            icon {
              file {
                url
                fileName
                contentType
              }
            }
            image {
              file {
                url
                fileName
                contentType
              }
            }
          }
        }
      }
    }
  `);
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
const quotes=[
    `“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler`,
    `“First, solve the problem. Then, write the code.” – John Johnson`,
    `“Experience is the name everyone gives to their mistakes.” – Oscar Wilde`,
    `In order to be irreplaceable, one must always be different” – Coco Chanel`,
    `Learn continually. There is always "one more thing to learn" - Steve Jobs`
]
  return (
    <div className="banner">
      {banners.map((banner, i) => (
        <>
          <img
            className={`banner-image ${activeBanner === i ? "active" : ""}`}
            src={banner.node.image[0].file.url}
            alt={`banner-${i}`}
          />
          <div
            className={`banner-content ${activeBanner === i ? "active" : ""}`}
          >
            <h1 className="banner-title">{banners[i].node.title}</h1>
            <ul className="banner-list">
              {
                quotes.map( (quote,i)=><li key={i}>{quote}</li>)
              }
            </ul>
            <div className="banner-subtitle-container">

            </div>
          </div>
        </>
      ))}

    </div>
  );
};

export default Banners;
