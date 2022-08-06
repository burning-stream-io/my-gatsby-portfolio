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
                  fileName
                }
              }
              link
            }
            titles
            residence
            city
            age
            about {
              about
            }
            stack {
              title
              subtitle
              icon {
                file {
                  fileName
                  url
                }
              }
            }
          }
        }
      }
    }
  `);
};
export default useUser;
