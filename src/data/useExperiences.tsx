import { graphql, useStaticQuery } from "gatsby";

const useExperiences = () => {
  return useStaticQuery(graphql`
    {
      allContentfulExperience(sort: { order: DESC, fields: id }) {
        edges {
          node {
            company
            startedDate
            endDate
            responsibilities
            companyLogo {
              file {
                url
              }
            }
          }
        }
      }
    }
  `);
};
export default useExperiences;
