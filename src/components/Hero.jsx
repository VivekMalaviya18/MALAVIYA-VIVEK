import React from "react";
import { LuImport } from "react-icons/lu";
import hero from "../assets/hero.webp";
import { motion } from "framer-motion";
import cm from "../assets/cm.lottie";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const techQuote = [
    "Coding like poetry should be short and concise.",
    // "The best error message is the one that never shows up.",
    "If, at first, you do not succeed, call it version 1.0.",
    "The best way to learn is to do.",
    // "First, solve the problem. Then, write the code.",
    "Programming isn’t about what you know; it’s about what you can figure out."
];

const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
         
   {/* Right Diagonal Animation (\ direction) */}
            <div className="absolute right-[-5%] top-[35%] w-1/3 overflow-hidden rotate-[70deg] hidden lg:block">
                <motion.div
                    className="flex gap-10 whitespace-nowrap"
                    animate={{
                        x: ["100%", "-185%"] // Adjusted for seamless looping
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 12,
                        ease: "linear"
                    }}
                >
                    {techQuote.map((item, index) => (
                        <span
                            key={index}
                            className="text-lg font-semibold opacity-50 hover:opacity-100 hover:text-orange-400 transition"
                        >
                            {item}
                        </span>
                    ))}
                    {techQuote.map((item, index) => (
                        <span
                            key={index + 10}
                            className="text-lg font-semibold opacity-50 hover:opacity-100 hover:text-orange-400 transition"
                        >
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>

            <div className="absolute left-5 top-1/5 transform -translate-y-1/2 translate-x-1/18">
                <DotLottieReact 
                    src={cm} 
                    loop 
                    autoplay 
                    renderer="svg" 
                    rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }} 
                    className="w-[550px] h-[550px] will-change-transform" 
                />
            </div>




            {/* Big Name */}
            <h1 className="mt-16 overflow-hidden text-[12vw] font-extrabold uppercase leading-none tracking-tight text-center z-10">
                Vivek
                <br />
                Malaviya
            </h1>

            {/* Resume Button */}
            <div className="mt-8 z-10">
                <a
                    href="/MALAVIYA VIVEK RESUME KS.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="download"
                    className="flex items-center rounded-xl bg-orange-200 p-3 px-5 font-sans font-semibold text-black hover:bg-orange-400"
                >
                    <span>Resume PDF</span>
                    <LuImport className="ml-2" />
                </a>
            </div>

            {/* Hero Image */}
            <div className="w-full z-0">
                <img
                    src={hero}
                    alt="Vivek Malaviya"
                    className="mt-8 h-96 w-full object-cover rounded-lg shadow-lg"
                />
            </div>
        </section>
    );
};

export default Hero;
