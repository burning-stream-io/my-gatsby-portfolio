import { graphql, useStaticQuery } from "gatsby";

const useEducations = () => {
  return useStaticQuery(graphql`
    {
      allContentfulEducation(sort: { order: ASC, fields: id }) {
        edges {
          node {
            school
            startedDate
            endDate
            department
            description
            subjects
            icon {
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
export default useEducations;
