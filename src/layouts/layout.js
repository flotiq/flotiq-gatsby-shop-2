import React from 'react';
import Footer from '../components/Footer';

const Layout = ({ children, additionalClass = [] }) => (
    <main className={['font-lato', ...additionalClass].join(' ')}>
        {children}
        <Footer />
    </main>
);

export default Layout;
