import { graphql, useStaticQuery } from "gatsby";

const useBannersData = () => {
  return useStaticQuery(graphql`
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
};
export default useBannersData;
