import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';
import ReviewsSection from '../sections/ReviewsSection';
import Avatar from '../assets/avatar.png';

const IndexPage = ({ data }) => {
    const products = data.allProduct.nodes;
    const reviews = [
        { review: 'The best store in our town! plants are always in good condition.',
            author: 'Joe Jonas' },
        { review: 'I ordered 3 packs of roses last friday and they all came so fast and fresh',
            author: 'Kate Smith' },
        { review: 'The staff was so sweet they helped me decorate my room with plants!',
            author: 'John Doe' },
    ];
    return (
        <Layout additionalClass={['bg-white']}>
            <Helmet>
                <title>Flotiq Gatsby shop starter</title>
            </Helmet>
            <ReviewsSection headerText="Reviews" reviews={reviews} avatar={Avatar} />
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
