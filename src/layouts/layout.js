import React from 'react';

const Layout = ({ children, additionalClass = [] }) => (
    <main className={['font-lato', ...additionalClass].join(' ')}>
        {children}
    </main>
);

export default Layout;
