import React from 'react';

interface HeroCard2Props {
    title: string;
    subtitle: string;
    count: string;
}

const HeroCard2: React.FC<HeroCard2Props> = ({ title, subtitle, count }) => {
    return (
        <div className="relative w-72 rounded-lg  shadow-lg ">
            <div className="bg-white rounded-t-lg  shadow-md text-center p-6">
                <div className="bg-red-200 rounded-full w-16 h-16 flex items-center justify-center text-red-700 text-4xl font-bold mx-auto -mt-8 mb-4">
                    {count}
                </div>
                <div className="p-2 text-left">
                    <h2 className="text-xl font-bold mb-2">{title}</h2>
                    <p className="text-sm font-sans font-light">{subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default HeroCard2;
