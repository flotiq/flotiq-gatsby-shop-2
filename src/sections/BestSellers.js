import React from 'react';
import { Link } from 'gatsby';
import { Header } from 'flotiq-components-react';
import ProductCard from '../components/ProductCard';

const BestSellers = ({ products, additionalClass, headerText }) => (
    <div className={['w-full', ...additionalClass].join(' ')}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10
                mt-6 mb-6"
            >
                {products.slice(0, 4).map((product) => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        productImage={product.productImage[0] && product.productImage[0].localFile}
                        buttonLabel="Add to cart"
                        slug={product.slug}
                    />
                ))}
            </div>
        </div>

    </div>
);

export default BestSellers;
