import { graphql, useStaticQuery } from "gatsby";

const useSocialAccounts = () => {
  return useStaticQuery(graphql`
    {
      allContentfulSocialAccounts(sort: { order: DESC, fields: id }) {
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
export default useSocialAccounts;
