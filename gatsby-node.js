const path = require('path');
const createPaginatedPages = require('gatsby-paginate');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/templates/Work.jsx`);
    resolve(
      graphql(`
        query getAllWorks {
          allSanityOurWorks {
            group(field: category) {
              edges {
                node {
                  createDate
                  priority
                  category
                  title
                  cover {
                    asset {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        let edgesWithId = result.data.allSanityOurWorks.group.map(a =>
          a.edges.sort((a, b) => a.node.priority - b.node.priority)
        );

        edgesWithId = edgesWithId.reduce((acc, curr) => acc.concat(curr), []);

        let sitiosCategorias = {};
        let categoriasFixed = {};

        edgesWithId.forEach(({ node }) => {
          const { category } = node;
          const fixedCategory = createRouteFromString(category);
          if (!sitiosCategorias[fixedCategory])
            sitiosCategorias[fixedCategory] = [];
          sitiosCategorias[fixedCategory].push(node);

          if (!categoriasFixed[category])
            categoriasFixed[category] = fixedCategory;
        });

        // Create blog post pages.
        for (const posts in sitiosCategorias) {
          const categoryLength = sitiosCategorias[posts].length;
          sitiosCategorias[posts].forEach((post, index) => {
            const next =
              index + 1 < categoryLength
                ? sitiosCategorias[posts][index + 1].title
                : '';
            const prev =
              index - 1 >= 0 ? sitiosCategorias[posts][index - 1].title : '';
            const fixedCategory = createRouteFromString(post.category);
            const postTitle = createRouteFromString(post.title);

            createPage({
              path: `/our-works/works/${fixedCategory}/${postTitle}`, // required
              component: blogPostTemplate,
              context: {
                sitePath: `/our-works/works/${fixedCategory}/`,
                prev: prev,
                next: next,
                title: post.title,
                date: post.createDate,
              },
            });
          });
        }

        createPaginatedPages({
          edges: edgesWithId,
          createPage: createPage,
          pageTemplate: 'src/templates/ourWorks.jsx',
          pageLength: 12,
          pathPrefix: 'our-works',
          context: {
            categoriasFixed: categoriasFixed,
            currentPath: `our-works/`,
          },
        });

        for (const categoria in sitiosCategorias) {
          createPaginatedPages({
            edges: sitiosCategorias[categoria],
            createPage: createPage,
            pageTemplate: 'src/templates/ourWorks.jsx',
            pageLength: 12,
            pathPrefix: `our-works/${categoria}`,
            context: {
              categoriasFixed: categoriasFixed,
              currentPath: `our-works/${categoria}`,
            },
          });
        }
      })
    );
  });
};

function createRouteFromString(string) {
  return string
    .replace(' ', '_')
    .toLowerCase()
    .replace(/\W/g, '');
}
