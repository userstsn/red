import React from 'react';

interface HeroSectionWithImgProps {
    title: string;
    subtitle: string;
    imgSrc: string;
}

const HeroSectionWithImg: React.FC<HeroSectionWithImgProps> = ({ title, subtitle, imgSrc }) => {
    return (
        <div className="relative bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex items-center justify-between">
                <div className="max-w-lg">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-red-700 leading-tight">{title}</h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-900">{subtitle}</p>
                </div>
                <div className="flex-shrink-0 ml-12">
                    <img src={imgSrc} alt="Blood Donation" className="h-auto w-full rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
    );
};

export default HeroSectionWithImg;
