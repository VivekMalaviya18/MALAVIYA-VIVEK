import React from 'react';
import { ABOUT } from '../constants';
import { motion } from 'framer-motion';
import me3 from '../assets/me-three.jpg'


const About = () => {
  return (
    <section id="about" className="py-16">
      <h2 className="my-10 text-center text-3xl lg:text-8xl cursor-default font-extrabold tracking-wide ">
        About Me
      </h2>
      
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-center gap-8 m-8 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src={me3}
          alt="Vivek Malaviya"
          className=" w-75 h-115 rounded-full object-cover border-5 border-orange-300 shadow-lg grayscale-90 hover:grayscale-10 transition ease-in-out duration-700 hover:drop-shadow-2xl transform hover:scale-105"
        />
        <p className="text-xl lg:text-3xl tracking-wide [word-spacing:10px] leading-relaxed text-center lg:text-left">
          Hi, I’m <span className="text-orange-300 font-bold">Vivek Malaviya</span>, a <span className="text-orange-400 font-bold">Frontend Developer</span> passionate about creating <span className="font-semibold">modern, responsive websites</span> and <span className="font-semibold">interactive user experiences.</span>
          {ABOUT}
        </p>
      </motion.div>
    </section>
  );
};

export default About;
