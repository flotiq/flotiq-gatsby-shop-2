import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, navigate } from 'gatsby';
import Layout from '../layouts/layout';
import Products from '../sections/Products';
import ProductCard from '../components/ProductCard';

const ProductsPage = ({ data }) => {
    const products = data.allProduct.nodes;
    return (
        <Layout additionalClass={['bg-white']}>
            <Helmet>
                <title>Flotiq Gatsby shop starter</title>
            </Helmet>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10
                mt-6 mb-6"
                >
                    {products.slice(0, 4).map((product) => (
                        <ProductCard
                            key={product.id}
                            onClick={() => { navigate(`/${product.slug}`); }}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            productImage={product.productImage[0] && product.productImage[0].localFile.publicURL}
                            buttonLabel="Add to cart"
                            slug={product.slug}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export const pageQuery = graphql`
    query productsQuery($skip: Int!, $limit: Int!) {
        site {
            siteMetadata {
                title
            }
        }
        allProduct(sort: {fields: flotiqInternal___createdAt, order: DESC}, limit: $limit, skip: $skip,) {
            nodes {
                name
                price
                slug
                description
                id
                productGallery {
                    extension
                    url
                    width
                    height
                    localFile {
                        publicURL
                        childImageSharp {
                            gatsbyImageData(layout: FULL_WIDTH)
                        }
                    }
                }
                productImage {
                    extension
                    url
                    width
                    height
                    localFile {
                        publicURL
                        childImageSharp {
                            gatsbyImageData(layout: FULL_WIDTH)
                        }
                    }
                }
            }
        }
    }
`;

export default ProductsPage;
