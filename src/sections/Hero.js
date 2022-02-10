import React from 'react';
import { Button, Card, Header, Image, Paragraph } from 'flotiq-components-react';
import { navigate } from 'gatsby';

const Hero = ({ heroImage, headerText, paragraphText, buttonLabel, onClick }) => (

    <Card
        vertical
        onClick={onClick}
        bordered={false}
        rounded="none"
        additionalClasses={['mb-4 cursor-pointer mx-auto ']}
        proportionsForVertical={{
            body: '2/5',
            img: '3/5',
            breakpoint: 'lg',
        }}
    >
        <Card.Body
            additionalClasses={[
                'flex flex-col items-start justify-center '
                + 'order-2 lg:order-1 px-10 xl:pl-32 lg:pr-5 !py-22 xl:!py-28 min-h-1/2vh',
            ]}
        >
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
        </Card.Body>
        <div
            style={{ backgroundImage: `url('${heroImage}')` }}
            className="w-full lg:w-auto order-1 lg:order-2 lg:basis-3/5 bg-cover bg-center"
        >
            <Card.Img src={heroImage} additionalClasses={['block lg:hidden w-full']} />
        </div>

    </Card>
);

export default Hero;
