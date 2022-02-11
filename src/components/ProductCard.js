import React from 'react';
import { Button, Card } from 'flotiq-components-react';

const ProductCard = ({ name, description, price, productImage }) => (
    <Card
        bordered={false}
        rounded="none"
    >
        <Card.Img
            src={productImage}
            alt={name}
        />
        <Card.Body additionalClasses={['!px-0']}>
            <Card.Title additionalClasses={['flex justify-between !font-medium']}>
                <span>{name}</span>
                <span>
                    $
                    {price}
                </span>
            </Card.Title>
            <Card.Text additionalClasses={['line-clamp-4']}>
                {description}
            </Card.Text>
            <Button
                label="Button"
                rounded="none"
                size="sm"
            />
        </Card.Body>
    </Card>
);

export default ProductCard;
