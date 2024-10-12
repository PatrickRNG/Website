const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const slug = path.basename(node.fileAbsolutePath, '.mdx');

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve('./src/templates/blog.jsx');
  const res = await graphql(`
    query {
      allMdx(
        filter: { frontmatter: { published: { eq: true } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);

  const posts = res.data.allMdx.nodes;

  posts.forEach((post, index) => {
    const slug = post.fields.slug;
    const previous = index === posts.length - 1 ? null : posts[index + 1];
    const next = index === 0 ? null : posts[index - 1];

    createPage({
      component: blogTemplate,
      path: `/blog/${slug}`,
      context: {
        slug,
        previous,
        next,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ actions, loaders }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules\/(?!three-mesh-bvh|@mediapipe|@react-spring\/core|@react-spring\/shared)/, // Transpile these specific packages
          use: [
            loaders.js(), // This uses Babel to transpile
          ],
        },
      ],
    },
  });
};
