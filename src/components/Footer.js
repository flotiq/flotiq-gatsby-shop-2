import React from 'react';
import LogoBadge from '../assets/flotiq-logo-badge.svg';

const Footer = () => (
    <footer className="flex flex-col items-center justify-center">
        <div className="w-auto px-5 py-3 md:py-5 mt-5 md:mt-20
                inline-flex justify-between md:justify-center items-center
                bg-light-gray rounded-t-lg"
        >
            <div className="flex items-center mr-12">
                <img
                    className="block h-5 md:h-6 w-auto mr-2"
                    src={LogoBadge}
                    alt="Flotiq"
                />
                <p className="text-center text-xs md:text-base font-semibold">
                    Powered by Flotiq
                </p>
            </div>
            <p className="text-center text-xs md:text-base font-light">
                Copyright &copy; Flotiq 2022
            </p>
        </div>
    </footer>
);

export default Footer;
