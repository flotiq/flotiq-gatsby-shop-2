import React from 'react';
import { navigate } from 'gatsby';
import ProductCard from '../components/ProductCard';

const ProductCards = ({ products, additionalClass }) => (
    <div
        className={['grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 max-w-7xl mt-6 mb-6 '
        + 'mx-auto px-4 py-4 sm:px-6 lg:px-8 xl:px-0', ...additionalClass].join(' ')}
    >
        {products.map((product) => (
            <ProductCard
                key={product.id}
                onClick={() => { navigate(`/${product.slug}`); }}
                name={product.name}
                description={product.description}
                price={product.price}
                productImage={product.productImage[0] && product.productImage[0].localFile.publicURL}
                buttonLabel="Add to cart"
            />
        ))}
    </div>
);

export default ProductCards;
