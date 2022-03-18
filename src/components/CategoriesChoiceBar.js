import React from 'react';
import { Link } from 'gatsby';

const CategoriesChoiceBar = ({ additionalClass, categoryTabs }) => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    return (
        <div className={['md:max-w-2xl flex justify-between '
        + 'mx-auto px-2 sm:px-6 lg:px-8', ...additionalClass].join(' ')}
        >
            <div className="sm:hidden w-full">
                <label htmlFor="categoryTabs" className="sr-only">
                    Select a tab
                </label>
                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                <select
                    id="tabs"
                    name="tabs"
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300
                    focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    defaultValue={categoryTabs.find((tab) => tab.current).name}
                >
                    {categoryTabs.map((tab) => (
                        <option key={tab.name}>{tab.name}</option>
                    ))}
                </select>
            </div>
            <div className="w-full hidden sm:block">
                <nav className="w-full -mb-px flex justify-between" aria-label="Tabs">
                    {categoryTabs.map((tab) => (
                        <Link
                            key={tab.name}
                            to={tab.href}
                            className={classNames(
                                tab.current
                                    ? 'underline !font-semibold text-primary hover:text-gray-700 '
                                    + 'whitespace-nowrap py-4 font-light text-xl'
                                    : 'text-primary hover:text-gray-700 whitespace-nowrap py-4 font-light text-xl',
                            )}
                            aria-current={tab.current ? 'page' : undefined}
                        >
                            {tab.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default CategoriesChoiceBar;
