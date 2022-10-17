import React from 'react';
import { Header } from 'flotiq-components-react';
import { Link } from 'gatsby';
import ProductCards from './ProductCards';

const Products = ({ products, additionalClass, headerText }) => (
    <div className={['max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', ...additionalClass].join(' ')}>
        <div className="flex items-center justify-between">
            <Header additionalClasses={['!text-xl md:!text-3xl !font-normal font-roboto !p-0']}>
                {headerText}
            </Header>
            <Link
                className="text-right underline underline-offset-2 decoration-1 text-lg hover:text-secondary"
                to="/products/"
            >
                View all products
            </Link>
        </div>
        <ProductCards products={products} additionalClass={['my-5']} />
    </div>
);

export default Products;
