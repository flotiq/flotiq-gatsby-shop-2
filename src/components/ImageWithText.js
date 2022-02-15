import React from 'react';
import { Button, Header } from 'flotiq-components-react';

const ImageWithText = ({ image, headerText1, headerText2, headerText3, buttonLabel }) => (
    <div className="max-w-7xl mx-auto px-0 lg:px-8">
        <div className="bg-cover bg-center" style={{ backgroundImage: `url('${image}')` }}>
            <div className="px-4 md:px-10 py-10 md:p-14 md:pb-48 flex flex-col items-start font-roboto text-white
        w-full lg:w-1/2 bg-gradient-to-r from-primary to-transparent"
            >
                <Header
                    text={headerText1}
                    additionalClasses={['block !font-thin !text-5xl md:!text-7xl !p-0 mb-1 md:mb-3']}
                />
                <Header
                    text={headerText2}
                    additionalClasses={['block !font-thin !text-5xl md:!text-7xl !p-0 mb-1 md:mb-3']}
                />
                <Header
                    text={headerText3}
                    additionalClasses={['block !font-thin !text-5xl md:!text-7xl !p-0']}
                />
                <Button
                    label={buttonLabel}
                    rounded="none"
                    additionalClasses={['mt-5 md:mt-10 bg-white text-secondary']}
                />
            </div>
        </div>
    </div>
);

export default ImageWithText;
