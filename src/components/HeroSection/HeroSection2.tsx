import React from 'react';

interface HeroSection2Props {
    heading: string;
    subheading: string;
    content: string;
}

const HeroSection2: React.FC<HeroSection2Props> = ({ heading, subheading, content }) => {
    return (
        <div className="relative ">
            <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 relative">
                <h1 className="text-4xl md:text-6xl font-extrabold  text-red-700 leading-tight">{heading}</h1>
                <p className="mt-4 text-lg md:text-xl text-gray-950">{subheading}</p>
                <p className="mt-4 font-sans text-lg md:text-sm text-gray-950">{content}</p>
            </div>
        </div>
    );
};

export default HeroSection2;
