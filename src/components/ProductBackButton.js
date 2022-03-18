import React from 'react';
import { ArrowNarrowLeftIcon } from '@heroicons/react/solid';
import { Link } from 'gatsby';

const ProductBackButton = ({ additionalClass, backButtonText }) => (
    <Link
        to="/"
        className={['flex items-center font-light text-sm md:text-2xl', ...additionalClass].join(' ')}
    >
        <ArrowNarrowLeftIcon className="mr-3 h-5 w-5 text-primary" />
        {backButtonText}
    </Link>
);

export default ProductBackButton;
