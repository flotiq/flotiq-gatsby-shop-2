import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';

const IndexPage = ({ data }) => {
    const products = data.allProduct.nodes;
    return (
        <Layout additionalClass={['bg-white']}>
            <Helmet>
                <title>Flotiq Gatsby shop starter</title>
            </Helmet>
            {products.map((product) => (
                <a href={`/${product.slug}`}><p key={product.id}>{product.name}</p></a>
            ))}
        </Layout>
    );
};

export const pageQuery = graphql`
    query indexQuery($skip: Int!, $limit: Int!) {
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
                    localFile {
                        publicURL
                    }
                }
                productImage {
                    localFile {
                        publicURL
                    }
                }
            }
        }
    }
`;

export default IndexPage;
