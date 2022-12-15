import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { Paragraph, Header, Button } from 'flotiq-components-react';
import { PlusIcon, MinusIcon } from '@heroicons/react/solid';
import { Helmet } from 'react-helmet';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../layouts/layout';
import Products from '../sections/Products';
import ProductBackButton from '../components/ProductBackButton';

const ProductTemplate = ({ data }) => {
    const [quantity, setQuantity] = useState(1);
    const { product } = data;
    const products = data.allProduct.nodes;
    return (
        <Layout additionalClass={['bg-white']}>
            <Helmet>
                <title>{product.name}</title>
                <meta
                    name="description"
                    content={product.description}
                />
            </Helmet>
            <div className="flex flex-wrap max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <ProductBackButton additionalClass={['mt-12 mb-5']} backButtonText="Back to all products" />
                <div className="flex flex-wrap mb-10">
                    <div
                        className="flex basis-full lg:basis-1/2"
                    >
                        <GatsbyImage
                            image={getImage(product.productImage[0] && product.productImage[0].localFile)}
                            className="w-full"
                            alt={product.name}
                        />
                    </div>
                    <div className="flex flex-col basis-full lg:basis-1/2 pl-0 lg:pl-12 pt-5 pb-10 bg-white">
                        <Header additionalClasses={['text-xl md:text-5xl !font-normal !pb-0']}>
                            {product.name}
                        </Header>
                        <Header additionalClasses={['!font-light !p-0']} level={2}>
                            Category
                        </Header>
                        <Paragraph additionalClasses={['mt-10 text-lg']}>
                            {product.description}
                        </Paragraph>
                        <div className="flex flex-col md:flex-row md:items-center md:space-x-16 mt-10">
                            <Header
                                additionalClasses={['text-red !p-0 order-2 md:order-1 mt-3 md:mt-0']}
                            >
                                {`$${product.price}`}
                            </Header>
                            <div className="flex items-center text-2xl font-normal order-1 md:order-2">
                                Quantity:
                                <div className="flex items-center md:items-stretch ml-8 font-roboto">
                                    <button
                                        type="button"
                                        className="flex items-center justify-center border
                                        border-r-0 border-light-gray bg-light-gray py-1 px-3 hover:text-secondary"
                                        onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                                    >
                                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                    </button>
                                    <button
                                        type="button"
                                        className="border-t border-b border-light-gray py-1 px-4"
                                    >
                                        {quantity}
                                    </button>
                                    <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
                                    <button
                                        type="button"
                                        className="flex items-center justify-center border
                                        border-r-0 border-light-gray bg-light-gray py-1 px-3 hover:text-secondary"
                                        onClick={() => setQuantity(quantity + 1)}
                                    >
                                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <Button
                            label="Add to cart"
                            rounded="none"
                            additionalClasses={
                                ['bg-secondary justify-center w-fit mt-8 text-2xl font-light !px-24 snipcart-add-item']
                            }
                            data-item-id={product.slug}
                            data-item-price={product.price}
                            data-item-image={product.productImage[0] && product.productImage[0].localFile.publicURL}
                            data-item-name={product.name}
                            data-item-url="/"
                            data-item-quantity={quantity}
                        />
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
    product(slug: {eq: $slug}) {
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
            gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
          }
        }
      }
      productGallery {
        localFile {
          publicURL
        }
      }
    }
    allProduct(
      sort: {flotiqInternal: {createdAt: DESC}}
      limit: 4
      filter: {slug: {ne: $slug}}
    ) {
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
              gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
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
              gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
            }
          }
        }
      }
    }
  }
`;

export default ProductTemplate;
