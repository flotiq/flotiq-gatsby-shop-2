import React from 'react';
import { Header, Paragraph } from 'flotiq-components-react';
import { StaticImage } from 'gatsby-plugin-image';

const ReviewsSection = ({ headerText, reviews, additionalClass }) => (
    <div
        className={['flex flex-wrap items-center max-w-7xl '
            + 'mx-auto py-1 md:py-6 px-4 sm:px-6 lg:px-8', ...additionalClass].join(' ')}
    >
        <Header
            additionalClasses={['!font-light !text-6xl basis-full lg:basis-1/4 mb-5 lg:mb-0 text-center lg:text-left']}
        >
            {headerText}
        </Header>
        <div className="basis-full lg:basis-3/4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 ">
            {reviews.map((review) => (
                <div className="px-5 mb-5 lg:mb-0 border-l-2 border-light-gray" key={review.review}>
                    <Paragraph additionalClasses={['!text-2xl !font-light !leading-6 mb-3']}>
                        {review.review}
                    </Paragraph>
                    <div className="flex items-center space-x-3">
                        <StaticImage
                            src="../assets/avatar.png"
                            alt={review.author}
                            width={44}
                            height={44}
                            placeholder="none"
                        />
                        <Paragraph additionalClasses={['!text-xl !font-medium']}>
                            {review.author}
                        </Paragraph>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default ReviewsSection;
