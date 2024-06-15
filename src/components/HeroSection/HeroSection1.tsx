import React from 'react';

interface HeroSection1Props {
    heading: string;
    subheading: string;
}

const HeroSection1: React.FC<HeroSection1Props> = ({ heading, subheading }) => {
    return (
        <div className="relative">
            <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 relative">
                <h1 className="text-4xl md:text-6xl font-extrabold  text-red-700 leading-tight">{heading}</h1>
                <p className="mt-4 text-lg md:text-xl text-gray-950">{subheading}</p>
            </div>
        </div>
    );
};

export default HeroSection1;
