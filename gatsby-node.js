const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const singleProduct = path.resolve('./src/templates/product.js');
    const productsPage = path.resolve('./src/templates/products.js');
    const result = await graphql(`
        query GetProducts {
  allProduct(sort: {flotiqInternal: {createdAt: DESC}}) {
    edges {
      node {
        slug
      }
    }
  }
}
`);

    if (result.errors) {
        throw result.errors;
    }
    const products = result.data.allProduct.edges;

    // Create paginated index
    const productsPerPage = 12;
    const numPages = Math.ceil(products.length / productsPerPage);

    Array.from({ length: numPages }).forEach((item, i) => {
        createPage({
            path: i === 0 ? '/products/' : `/products/${i + 1}`,
            component: productsPage,
            context: {
                limit: productsPerPage,
                skip: i * productsPerPage,
                numPages,
                currentPage: i + 1,
            },
        });
    });

    // Create product pages.
    products.forEach((product, index) => {
        const previous = index === products.length - 1 ? null : products[index + 1].node;
        const next = index === 0 ? null : products[index - 1].node;

        createPage({
            path: product.node.slug,
            component: singleProduct,
            context: {
                slug: product.node.slug,
                previous,
                next,
            },
        });
    });
};
