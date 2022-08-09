import { graphql, useStaticQuery } from "gatsby";

const useCertificates = () => {
  return useStaticQuery(graphql`
    {
      allContentfulCertificates(sort: { fields: updatedAt, order: DESC }) {
        edges {
          node {
            title
            subtitle
            type
            date
            icon {
              file {
                url
                fileName
              }
            }
            certificate {
              file {
                url
                fileName
              }
            }
          }
        }
      }
    }
  `);
};
export default useCertificates;
