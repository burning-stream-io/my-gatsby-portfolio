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

  return (
    <div className="banner">
      {/* "https://img.freepik.com/free-photo/technological-background-purple-with-code-elements-lights-lines_272306-164.jpg?w=2000" */}
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
            <div className="banner-subtitle-container">
              <div className="banner-subtitle-icon-container">
                <img
                  className="banner-subtitle-icon"
                  src={banners[i].node.icon.file.url}
                />
              </div>
              <p className="banner-subtitle">{banners[i].node.subtitle}</p>
            </div>
          </div>
        </>
      ))}
      {/*<div className="banner-indicator-container">*/}
      {/*  {banners.map((_banner, i) => (*/}
      {/*    <div*/}
      {/*      onClick={() => {*/}
      {/*        clearInterval(sliderRef.current);*/}
      {/*        setActiveBanner(i);*/}
      {/*        sliderRef.current = setInterval(() => {*/}
      {/*          setActiveBanner(*/}
      {/*            (prevState) => (prevState + 1) % banners.length*/}
      {/*          );*/}
      {/*        }, 5000);*/}
      {/*      }}*/}
      {/*      className={`banner-indicator ${*/}
      {/*        i === activeBanner ? "active" : null*/}
      {/*      }`}*/}
      {/*    ></div>*/}
      {/*  ))}*/}
      {/*</div>*/}
    </div>
  );
};

export default Banners;
