import React from 'react';
import { Button, Card } from 'flotiq-components-react';
import { navigate } from 'gatsby';

const ProductCard = ({ name, description, price, productImage, buttonLabel, slug }) => (
    <Card
        bordered={false}
        rounded="none"
        additionalClasses={['!bg-transparent mb-5 cursor-pointer']}
        onClick={() => navigate(`/${slug}`)}
    >
        <Card.Img
            src={productImage}
            alt={name}
            additionalClasses={['w-full']}
        />
        <Card.Body additionalClasses={['!px-0 !pt-3']}>
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
            <Button
                label={buttonLabel}
                rounded="none"
                size="sm"
                additionalClasses={['bg-secondary w-full justify-center text-xl font-light']}
            />
        </Card.Body>
    </Card>
);

export default ProductCard;
