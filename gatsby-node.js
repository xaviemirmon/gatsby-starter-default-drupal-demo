const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allNodePage {
          edges {
            node {
              drupal_id,
              drupal_internal__nid,
              title
            }
          }
        }
      }
    `).then(result => {

      if (result.errors) {
        reject(result.errors)
      }

      result.data.allNodePage.edges.forEach(({ node }) => {
        let path_alias = `node/${node.drupal_internal__nid}`;
        const drupal_id = node.drupal_id
        createPage({
          // This is the path, or route, at which the page will be visible.
          path: path_alias,
          drupal_id,
          // This the path to the file that contains the React component
          component: path.resolve(`./src/templates/drupal-page.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL
            // variables.
            drupal_id,
          },
        })
      });

      resolve()
    })
  })
};