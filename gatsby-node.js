const path = require('path')
const createPaginatedPages = require('gatsby-paginate');

exports.createPages = ({
  graphql,
  actions
}) => {
  const {
    createPage
  } = actions;
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/templates/Work.jsx`)
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(`
        query getAllWorks {
          allMarkdownRemark(
            filter: { fileAbsolutePath: {regex : "\/ourWorks/"} }
            sort: { fields: [frontmatter___createDate], order: DESC}
          ) {
            group(field: frontmatter___createDate) {
              edges {
                node {
                  frontmatter {
                    title
                    description
                    createDate
                    allImages
                    priority
                  }
                }
              }
            }            
          }
        }
    `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        let edgesWithId = result.data.allMarkdownRemark
          .group.map(a => {
            return a.edges
              .sort((a, b) => {
                return a.node.frontmatter.priority - b.node.frontmatter.priority
              })
          });
        
        edgesWithId = edgesWithId.reduce((acc, curr) => acc.concat(curr), [])

        let numericId = 0;
        // Create blog post pages.
        edgesWithId.forEach(edge => {
          const {
            frontmatter
          } = edge.node;
          createPage({
            path: `/our-works/works/${numericId}`, // required
            component: blogPostTemplate,
            context: {
              title: frontmatter.title,
              date: frontmatter.createDate,
              numberId: numericId,
              maxPosts: edgesWithId.length
            },
          })
          edgesWithId[numericId].numericId = numericId;

          numericId += 1;
        })

        createPaginatedPages({
          edges: edgesWithId,
          createPage: createPage,
          pageTemplate: "src/templates/ourWorks.jsx",
          pageLength: 6,
          pathPrefix: "our-works",
          context: {}
        });
        return
      })
    )
  })
}