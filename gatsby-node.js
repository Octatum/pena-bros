/* exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      query createWorkPage {
        allFile(filter: {sourceInstanceName: { eq: "ourWorks" } name: { ne: ".gitkeep"}}) {
          edges {
            node {
              name
              childMarkdownRemark {
                frontmatter {
                  title
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      }
    `).then(result => {
      console.log(result)
      result.data.allFile.edges.map(({ node }) => {
        createPage({
          path: node.childMarkdownRemark.fields.slug,
          component: path.resolve("./src/templates/Work.jsx"),
          context: {
            slug: node.childMarkdownRemark.fields.slug
          }
        });
      });
      resolve();
    });
  });
};
 */