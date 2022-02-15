import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../sections/Contact';
import Logo from '../assets/planty-logo.svg';
import contactFormImage from '../assets/contact-form-image.jpg';

const Layout = ({ children, additionalClass = [] }) => (
    <main className={['font-grotesque', ...additionalClass].join(' ')}>
        <Header />
        {children}
        <Contact
            logoImage={Logo}
            additionalClass={['my-5']}
            contactFormImage={contactFormImage}
            formHeaderText="Connect with us"
            nameInputLabel="Name"
            emailInputLabel="Email"
            messageInputLabel="Message"
            buttonLabel="Send"
            phoneNumber="+123 456 789"
            address="Demo Street"
            emailAddress="hello@world.com"
        />
        <Footer />
    </main>
);

export default Layout;
