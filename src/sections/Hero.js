import React from 'react';
import { Button, Header, Image, Paragraph } from 'flotiq-components-react';
import { navigate } from 'gatsby';

const Hero = ({ heroImage, headerText, paragraphText, buttonLabel }) => (
    <div className="flex flex-wrap items-center justify-between">
        <div className="px-10 xl:pl-32 lg:pr-5 py-16 basis-full lg:basis-5/12 order-2 lg:order-1">
            <Header
                text={headerText}
                additionalClasses={['!font-thin !text-5xl md:!text-6xl lg:!text-7xl font-roboto']}
            />
            <Paragraph text={paragraphText} additionalClasses={['w-full lg:w-1/2 !font-thin !text-2xl mt-5']} />
            <Button
                label={buttonLabel}
                onClick={() => { navigate('/'); }}
                rounded="none"
                size="md"
                variant="info"
                additionalClasses={['!text-white !font-light !text-2xl !bg-secondary mt-8 hover:opacity-80']}
            />
        </div>
        <div
            style={{ backgroundImage: `url('${heroImage}')` }}
            className="w-full basis-full lg:basis-7/12 order-1 lg:order-2 bg-cover bg-center"
        >
            <Image url={heroImage} additionalClasses={['block lg:hidden w-full']} />
        </div>

    </div>
);

export default Hero;
