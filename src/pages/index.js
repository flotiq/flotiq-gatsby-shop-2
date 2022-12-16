import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../layouts/layout';
import ImageWithText from '../components/ImageWithText';
import ImageWithTextBackground from '../assets/bg-image.jpg';
import Hero from '../sections/Hero';
import BestSellers from '../sections/BestSellers';
import Products from '../sections/Products';
import ReviewsSection from '../sections/ReviewsSection';

const IndexPage = () => {
  const data = useStaticQuery(query);
  const products = data.allProduct.nodes;
  const reviews = [
    {
      review: 'The best store in our town! plants are always in good condition.',
      author: 'Joe Jonas',
    },
    {
      review: 'I ordered 3 packs of roses last friday and they all came so fast and fresh',
      author: 'Kate Smith',
    },
    {
      review: 'The staff was so sweet they helped me decorate my room with plants!',
      author: 'John Doe',
    },
  ];
  return (
    <Layout additionalClass={['bg-white']}>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta
          name="description"
          content={data.site.siteMetadata.description}
        />
      </Helmet>
      <Hero
        headerText="Best Plants for your home"
        paragraphText="Check our store and find the most beautiful plant for your home"
        buttonLabel="All the products"
        heroImage={data.heroImage}
      />
      <BestSellers products={products} additionalClass={['bg-green-gray py-14']} headerText="Best sellers" />
      <Products products={products} additionalClass={['my-5']} headerText="Products" />
      <ReviewsSection
        headerText="Reviews"
        reviews={reviews}
        additionalClass={['my-10 lg:my-24']}
      />
      <ImageWithText
        image={ImageWithTextBackground}
        headerText1="Buy one"
        headerText2="plant get"
        headerText3="one for free"
        buttonLabel="All the products"
        additionalClass={['']}
      />
    </Layout>
  );
};

const query = graphql`
query indexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allProduct(sort: {flotiqInternal: {createdAt: DESC}}, limit: 4) {
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
    heroImage: file(name: {eq: "hero-bg"}) {
      publicURL
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
  }
`;

export default IndexPage;
