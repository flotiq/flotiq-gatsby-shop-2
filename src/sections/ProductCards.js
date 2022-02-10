import React from 'react';
import ProductCard from '../components/ProductCard';

const ProductCards = ({ additionalClass }) => (
    <div
        className={['flex max-w-7xl mt-6 mb-6 mx-auto px-4 py-4 sm:px-6 lg:px-8 xl:px-0', ...additionalClass].join(' ')}
    >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </div>
);

export default ProductCards;
