import { graphql, useStaticQuery } from "gatsby";

const useUser = () => {
  return useStaticQuery(graphql`
    {
      allContentfulUser {
        edges {
          node {
            fullName
            name
            formalAccounts {
              icon {
                file {
                  url
                }
              }
              link
            }
            titles
            residence
            city
            age
          }
        }
      }
    }
  `);
};
export default useUser;
