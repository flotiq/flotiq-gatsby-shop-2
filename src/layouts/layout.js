import React from 'react';

const Layout = ({ children, additionalClass = [] }) => (
    <main className={['font-grotesque', ...additionalClass].join(' ')}>
        {children}
    </main>
);

export default Layout;
