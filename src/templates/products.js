import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { Header } from 'flotiq-components-react';
import Layout from '../layouts/layout';
import ProductCards from '../sections/ProductCards';
import BestSellers from '../sections/BestSellers';
import ImageWithText from '../components/ImageWithText';
import ImageWithTextBackground from '../assets/bg-image.jpg';

const ProductsPage = ({ data }) => {
    const products = data.allProduct.nodes;
    return (
        <Layout additionalClass={['bg-white']}>
            <Helmet>
                <title>Flotiq Gatsby shop starter</title>
            </Helmet>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <Header
                        text="Category 1"
                        additionalClasses={['!text-xl md:!text-3xl !font-normal font-roboto !p-0']}
                    />
                </div>
                <ProductCards products={products} additionalClass="my-5" />
            </div>
            <BestSellers products={products} additionalClass={['bg-green-gray py-14']} headerText="Best sellers" />
            <ImageWithText
                image={ImageWithTextBackground}
                headerText1="Buy one"
                headerText2="plant get"
                headerText3="one for free"
                buttonLabel="All the products"
                additionalClass={['my-10']}
            />
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
