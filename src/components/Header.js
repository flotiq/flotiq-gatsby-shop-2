import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ShoppingBagIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'gatsby';
import Logo from '../assets/planty-logo.svg';

const Header = () => (
    <Disclosure as="nav">
        {({ open }) => (
            <>
                <div className="max-w-7xl mx-auto py-1 md:py-6 px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="w-full flex justify-center md:justify-between">
                            <Link to="/" className="flex-shrink-0 flex items-center">
                                <img
                                    className="block h-10 md:h-16 w-auto"
                                    src={Logo}
                                    alt="Planty"
                                    width={157.7}
                                    height={63}
                                />
                            </Link>
                            <div className="hidden md:ml-6 md:flex md:space-x-16">
                                <Link
                                    to="/products/"
                                    className="inline-flex items-center px-1 pt-1 text-xl font-medium text-secondary"
                                >
                                    Store
                                </Link>
                                <Link
                                    to="/"
                                    className="hover:text-secondary inline-flex items-center
                                    px-1 pt-1 text-xl font-light"
                                >
                                    About
                                </Link>
                                <Link
                                    to="/"
                                    className="hover:text-secondary inline-flex items-center
                                    px-1 pt-1 text-xl font-light"
                                >
                                    FAQ
                                </Link>
                            </div>
                        </div>
                        <div className="hidden md:ml-14 md:flex md:items-center">
                            <button
                                type="button"
                                className="bg-white p-1 rounded-full text-secondary hover:text-gray focus:outline-none
                                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 relative"
                            >
                                <span className="sr-only">View notifications</span>
                                <ShoppingBagIcon className="h-6 w-6 snipcart-checkout" aria-hidden="true" />
                                <span className="absolute h-3 w-3 bottom-0 right-1 bg-red rounded-full" />
                            </button>
                        </div>
                        <div className="-mr-2 flex items-center md:hidden">
                            <Disclosure.Button
                                className="inline-flex items-center justify-center p-2 text-secondary"
                            >
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </Disclosure.Button>
                        </div>
                    </div>
                </div>

                <Disclosure.Panel className="md:hidden">
                    <div className="pt-2 pb-3 space-y-1">
                        <Disclosure.Button
                            as="a"
                            href="#"
                            className="border-secondary text-primary
                            block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                        >
                            Store
                        </Disclosure.Button>
                        <Disclosure.Button
                            as="a"
                            href="#"
                            className="border-transparent text-primary hover:border-secondary
                            block pl-3 pr-4 py-2 border-l-4 text-base font-light"
                        >
                            About
                        </Disclosure.Button>
                        <Disclosure.Button
                            as="a"
                            href="#"
                            className="border-transparent text-primary hover:border-secondary
                            block pl-3 pr-4 py-2 border-l-4 text-base font-light"
                        >
                            FAQ
                        </Disclosure.Button>
                        <button
                            type="button"
                            className="ml-2 bg-white p-1 rounded-full text-secondary hover:text-gray focus:outline-none
                                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 snipcart-checkout"
                        >
                            <span className="sr-only">View notifications</span>
                            <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                </Disclosure.Panel>
            </>
        )}
    </Disclosure>

);

export default Header;
