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
                    category
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
  
        edgesWithId = edgesWithId.reduce((acc, curr) => acc.concat(curr), []);
          
        let sitiosCategorias = {};
        let categoriasFixed = {};
        
        edgesWithId.forEach(edge => {
          const {
            frontmatter
          } = edge.node;
          const fixedCategory = createRouteFromString(frontmatter.category);
          if(!sitiosCategorias[fixedCategory]) sitiosCategorias[fixedCategory] = []
          sitiosCategorias[fixedCategory].push({node: {frontmatter: {...frontmatter}}});
          
          if(!categoriasFixed[frontmatter.category]) categoriasFixed[frontmatter.category] = fixedCategory
        })


        // Create blog post pages.
        for(const posts in sitiosCategorias) {
          const categoryLength = sitiosCategorias[posts].length;
          sitiosCategorias[posts].forEach((post, index) => {
            const next = index + 1 < categoryLength ? sitiosCategorias[posts][index + 1].node.frontmatter.title : '';
            const prev = index - 1 >= 0 ? sitiosCategorias[posts][index - 1].node.frontmatter.title : '';
            const fixedCategory = createRouteFromString(post.node.frontmatter.category);

            createPage({
              path: `/our-works/works/${fixedCategory}/${post.node.frontmatter.title}`, // required
              component: blogPostTemplate,
              context: {
                sitePath: `/our-works/works/${fixedCategory}/`,
                prev: prev,
                next: next,
                title: post.node.frontmatter.title,
                date: post.node.frontmatter.createDate,
              }
            })
          })
        }        



        createPaginatedPages({
          edges: edgesWithId,
          createPage: createPage,
          pageTemplate: "src/templates/ourWorks.jsx",
          pageLength: 12,
          pathPrefix: "our-works",
          context: {
            categoriasFixed: categoriasFixed,
            currentPath: `our-works/`,
          }
        });

        for(const categoria in sitiosCategorias) {
          createPaginatedPages({
            edges: sitiosCategorias[categoria],
            createPage: createPage,
            pageTemplate: "src/templates/ourWorks.jsx",
            pageLength: 12,
            pathPrefix: `our-works/${categoria}`,
            context: {
              categoriasFixed: categoriasFixed,
              currentPath: `our-works/${categoria}`,
            }
          });
        }

        return
      })
    )
  })
}

function createRouteFromString(string) {
  return string.replace(' ', '_').toLowerCase().replace(/\W/g, '');
}