import React from 'react';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <section className='p-8' id='projects'>
      <h2 className='my-10 text-center text-3xl lg:text-8xl cursor-default font-extrabold tracking-wide hover:text-lime-300'>My Work</h2>
      

      {/* Grid Layout for better alignment */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {PROJECTS.map((project) => (
          <a 
            key={project.id} 
            href={project.link} 
            target='_blank' 
            rel='noopener noreferrer' 
            className='block'
          >
            <div className='relative overflow-hidden rounded-xl bg-gray-900 shadow-lg transition-transform duration-300 hover:scale-105'>

              {/* Image Wrapper - Apply Blur Only Here */}
              <div className='h-100 w-full overflow-hidden'>
                <img 
                  src={project.imgSrc} 
                  alt={project.title} 
                  className='h-full w-full object-cover transition duration-300 hover:blur-md'
                />
              </div>

              {/* Text Overlay (Remains Sharp) */}
              <div className='absolute bottom-0 left-0 right-0 bg-black/50 p-6 text-white'>
                <h3 className='text-xl font-semibold transition duration-300 hover:text-2xl'>
                  {project.title}
                </h3>
                <p className='max-w text-sm font-[325] tracking-wider transition duration-300 hover:text-base'>
                  {project.description}
                </p>
              </div>

            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
