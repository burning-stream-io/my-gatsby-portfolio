import { graphql, useStaticQuery } from "gatsby";

const useSkillsData = () => {
  return useStaticQuery(graphql`
    {
      allContentfulSkills(sort: { order: DESC, fields: id }) {
        edges {
          node {
            title
            icon {
              file {
                url
              }
            }
            caption
          }
        }
      }
    }
  `);
};
export default useSkillsData;
