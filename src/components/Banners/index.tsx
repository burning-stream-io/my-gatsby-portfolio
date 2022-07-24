import {graphql, useStaticQuery} from "gatsby";
import React, {ReactNode, useEffect, useRef, useState} from "react";
import IBannerData from "../../interfaces/IBannerData";
import {renderRichText} from 'gatsby-source-contentful/rich-text'
import {BLOCKS} from '@contentful/rich-text-types'

import "./index.css";

const Banners = () => {
    const [activeBanner, setActiveBanner] = useState<number>(0);
    const options = {
        renderNode: {
            [BLOCKS.UL_LIST]: (_: any, children: ReactNode) => {
                return (
                    <ul className="banner-list">
                        {children}
                    </ul>
                )
            },

        },
    }
    const data = useStaticQuery(graphql`
        {
          allContentfulBanner {
            edges {
              node {
                title
                icon {
                  file {
                    url
                    fileName
                    contentType
                  }
                }
                quotes {
                  raw
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
                        {renderRichText(banner.node.quotes, options)}
                        <div className="banner-subtitle-container">
                        </div>
                    </div>
                </>
            ))}

        </div>
    );
};

export default Banners;
