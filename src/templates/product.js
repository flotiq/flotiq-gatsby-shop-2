import React from 'react';
import { graphql } from 'gatsby';
import { Image, Paragraph, Header } from 'flotiq-components-react';
import Layout from '../layouts/layout';
import Products from '../sections/Products';
import ProductBackButton from '../components/ProductBackButton';

const ProductTemplate = ({ data }) => {
    const { product } = data;
    const products = data.allProduct.nodes;
    return (
        <Layout additionalClass={['bg-white']}>
            <div className="flex flex-wrap max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <ProductBackButton additionalClass={['mt-12 mb-5']} backButtonText="Back to all products" />
                <div className="flex flex-wrap">
                    <div
                        className="flex basis-full lg:basis-1/2 bg-cover bg-center"
                        style={{ backgroundImage:
                                `url('${product.productImage[0] && product.productImage[0].localFile.publicURL}')` }}
                    >
                        <Image
                            url={product.productImage[0] && product.productImage[0].localFile.publicURL}
                            additionalClasses={['w-full lg:hidden']}
                        />
                    </div>
                    <div className="flex flex-col basis-full lg:basis-1/2 pl-0 lg:pl-12 pt-5 pb-10 bg-white">
                        <Header
                            additionalClasses={['text-xl md:text-5xl !font-normal !pb-0']}
                            text={product.name}
                        />
                        <Header
                            additionalClasses={['!font-light !p-0']}
                            text="Category"
                            level={2}
                        />
                        <Paragraph text={product.description} additionalClasses={['mt-10']} />
                    </div>
                </div>
            </div>
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
