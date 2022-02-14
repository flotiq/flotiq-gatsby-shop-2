import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';
import Hero from '../sections/Hero';
import HeroImage from '../assets/hero-bg.jpg';

const IndexPage = ({ data }) => {
    const products = data.allProduct.nodes;
    return (
        <Layout additionalClass={['bg-white']}>
            <Helmet>
                <title>Flotiq Gatsby shop starter</title>
            </Helmet>
            <Hero
                headerText="Best Plants for your home"
                paragraphText="Check our store and find the most beautiful plant for your home"
                buttonLabel="All the products"
                heroImage={HeroImage}
            />
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
