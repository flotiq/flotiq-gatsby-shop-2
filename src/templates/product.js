import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';
import Products from '../sections/Products';

const ProductTemplate = ({ data }) => {
    const { product } = data;
    const products = data.allProduct.nodes;
    return (
        <Layout additionalClass={['bg-white']}>
            <Products products={products} additionalClass={['my-5']} headerText="Similar products" />
        </Layout>
    );
};

export const pageQuery = graphql`
    query ProductBySlug($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        product( slug: { eq: $slug } ) {
            name
            price
            slug
            description
            id
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
            productGallery {
                localFile {
                    publicURL
                }
            }
        }
        allProduct(sort: {fields: flotiqInternal___createdAt, order: DESC}, limit: 4, filter: {slug: {ne: $slug}}) {
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

export default ProductTemplate;
