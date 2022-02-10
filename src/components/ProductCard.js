import React from 'react';
import { Card } from 'flotiq-components-react';

const ProductCard = () => (
    <Card
        bordered={false}
        rounded="none"
        additionalClasses={['basis-1/4 shrink']}
    >
        <Card.Img
            src="https://flotiq.com/blog/static/8050fcb7456bc70ea329293be5f34f40/e3fc1/_media-3a62e398-fbe3-46e8-ba5b-05a2690390ae.webp"
        />
        <Card.Body>
            Test
        </Card.Body>
    </Card>
);

export default ProductCard;
