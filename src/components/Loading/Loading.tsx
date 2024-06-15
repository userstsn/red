"use client"
import React, { useState, useEffect } from 'react';
import './Loading.css'; // Import the CSS file for additional animation styling

const Loading = () => {
    const messages = ['Fetching...', 'Loading...', 'Hold tight...', 'Almost there...'];
    const [currentMessage, setCurrentMessage] = useState(messages[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMessage((prevMessage) => {
                const currentIndex = messages.indexOf(prevMessage);
                const nextIndex = (currentIndex + 1) % messages.length;
                return messages[nextIndex];
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="spinner-wrapper">
                <div className="spinner">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <svg className="svg-filter">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="
                            1 0 0 0 0
                            0 1 0 0 0
                            0 0 1 0 0
                            0 0 0 50 -16" result="goo" />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>
                </defs>
            </svg>
            <div className="mt-4 text-xs font-semibold text-gray-700">{currentMessage}</div>

        </div>
    );
};

export default Loading;
