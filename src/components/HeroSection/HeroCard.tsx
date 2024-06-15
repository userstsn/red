import React from 'react';

interface HeroCardProps {
    imageUrl: string;
    title: string;
    subtitle: string;
}

const HeroCard: React.FC<HeroCardProps> = ({ imageUrl, title, subtitle }) => {
    return (
        <div className="relative w-64 rounded-lg  shadow-lg ">
            <div className="bg-white rounded-lg  shadow-md">
                <img src={imageUrl} alt={title} className="w-16 h-16 mx-auto mt-4" />
                <div className="p-4 text-center">
                    <h2 className="text-xl font-bold mt-4">{title}</h2>
                    <p className="text-sm font-light font-sans text-gray-600 mt-2">{subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default HeroCard;
