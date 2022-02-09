import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';

const ProductTemplate = ({ data }) => {
    const { product } = data;
    return (
        <Layout additionalClass={['bg-white']}>
            <div>Product</div>
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
    }
`;

export default ProductTemplate;
