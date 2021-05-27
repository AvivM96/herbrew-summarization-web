import React from "react";
import Particles from 'react-particles-js';
import {particlesConfig} from "./particles-config";

const WelcomeMessage: React.FC = () => {
    return (
        <div className="relative flex justify-center rounded-xl text-white bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-xl">
            <Particles params={particlesConfig} className="absolute w-full h-full z-10"/>
            <span className="block text-3xl font-bold sm:text-5xl sm:w-2/3 p-6 sm: sm:py-16">Welcome To The Hebrew Automated Text Summarization App !</span>
        </div>
    )
};

export default WelcomeMessage