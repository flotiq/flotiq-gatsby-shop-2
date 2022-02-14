import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';
import Hero from '../sections/Hero';
import HeroImage from '../assets/hero-bg.jpg';
import ProductCards from '../sections/ProductCards';
import BestSellers from '../sections/BestSellers';
import Products from '../sections/Products';

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
            <BestSellers products={products} additionalClass={['bg-green-gray py-14']} headerText="Best sellers" />
            <ProductCards products={products} additionalClass={['my-5']} />
            <Products products={products} additionalClass={['my-5']} headerText="Products" />
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

export default IndexPage;
