"use client"
import React, { useEffect, useState, useRef } from 'react';

interface HeroIncrementProps {
    label: string;
    number: number;
}

const HeroIncrement: React.FC<HeroIncrementProps> = ({ label, number }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const numberRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, // Trigger when 50% of element is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        if (numberRef.current) {
            observer.observe(numberRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            const increment = () => {
                if (count < number) {
                    setTimeout(() => setCount(count + 10), 20); // Faster increment speed (adjust as needed)
                }
            };

            increment();
        }
    }, [isVisible, count, number]);

    return (
        <div ref={numberRef} className="relative bg-red-200 bg-opacity-50 py-12 px-6 text-center">
            <p className="text-red-700 font-bold text-lg mb-2">{label}</p>
            <p className="text-6xl text-red-700 font-extrabold mb-4">{count}+</p>
        </div>
    );
};

export default HeroIncrement;
