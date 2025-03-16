import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { EDUCATION } from '../constants';



const Education = () => {
  return (
    <section id="education" className="py-16 bg-cover bg-center">
      <h2 className="my-10 text-center text-3xl lg:text-8xl cursor-default font-extrabold tracking-wide hover:text-lime-300">
        Education
      </h2>

      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
        {EDUCATION.map((item, id) => (
          <motion.div
            key={id}
            className="relative rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 border-l-4 border-lime-400 backdrop-blur-md bg-white/10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: id * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Icon */}
            <div className="absolute -top-6 left-4 bg-lime-400 p-3 rounded-full shadow-xl">
              <FaGraduationCap className="text-2xl text-black" />
            </div>

            {/* Degree */}
            <h3 className="font-semibold text-xl lg:text-2xl mb-2 text-lime-300">
              {item.degree}
            </h3>

            {/* School */}
            <p className="text-lg text-gray-200 mb-1">{item.school}</p>

            {/* Year */}
            <p className="text-sm text-gray-400 font-bold mb-4">{item.year}</p>

            {/* Description */}
            <p className="text-gray-300 text-md leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
