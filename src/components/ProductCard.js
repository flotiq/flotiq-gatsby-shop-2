import React from 'react';
import { Link } from 'gatsby';
import { Button, Card } from 'flotiq-components-react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const ProductCard = ({ name, description, price, productImage, buttonLabel, slug }) => (
    <Card
        bordered={false}
        rounded="none"
        additionalClasses={['!bg-transparent mb-5 cursor-pointer']}
    >
        <Link to={`/${slug}`}>
            <GatsbyImage
                image={getImage(productImage)}
                alt={name}
                className="w-full"
            />
        </Link>
        <Card.Body additionalClasses={['!px-0 !pt-3']}>
            <Link to={`/${slug}`}>
                <Card.Title additionalClasses={['flex justify-between !font-medium !text-2xl']}>
                    <span>{name}</span>
                    <span>
                        $
                        {price}
                    </span>
                </Card.Title>
                <div
                    className="line-clamp-2 mt-2 mb-3 text-lg font-light"
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            </Link>
            <Button
                label={buttonLabel}
                rounded="none"
                size="sm"
                additionalClasses={['bg-secondary w-full justify-center text-xl font-light snipcart-add-item']}
                data-item-id={slug}
                data-item-price={price}
                data-item-image={productImage.publicURL}
                data-item-name={name}
                data-item-url="/"
            />
        </Card.Body>
    </Card>
);

export default ProductCard;
