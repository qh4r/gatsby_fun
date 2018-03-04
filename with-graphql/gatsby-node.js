const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

onCreateNode = ({ node, getNode, boundActionCreators  }) => {
  console.log("NODE", node.internal.type);
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === `MarkdownRemark`) {
    // no idea how to force path to be different
    const slug = createFilePath({ node, getNode, basePath: `pages/` });
    // possible to change path in here (replace)
    createNodeField({
      node,
      name: `slug`,
      value: slug.replace('files', 'pages'),
    })
  }
};

createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
).then(result => {
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    // possible to change path in here (replace)
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: {
      // Data passed to context is available in page queries as GraphQL variables.
      slug: node.fields.slug,
        },
      })
    })
    console.log("GQL RESULTS", JSON.stringify(result, null, 4));
    resolve();
  });
});
};

module.exports = {
  onCreateNode,
  createPages,
}
