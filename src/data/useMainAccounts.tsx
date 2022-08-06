import { graphql, useStaticQuery } from "gatsby";

const useMainAccounts = () => {
  return useStaticQuery(graphql`
    {
      allContentfulMainAccounts(sort: { order: DESC, fields: id }) {
        edges {
          node {
            link
            subtitle
            title
            icon {
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
export default useMainAccounts;
