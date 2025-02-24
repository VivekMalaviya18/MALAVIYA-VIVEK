import React from 'react'
import { EDUCATION } from '../constants'

const Education = () => {
  return (
    <section id='education'>
        <h2 className='my-10 text-center text-3xl lg:text-8xl cursor-default font-extrabold tracking-wide hover:text-lime-300'>
            Education
        </h2>
        <div className='mx-auto max-w-6xl'>
            {EDUCATION.map((education,id) => (
                <div key={id} className='mx-4 mb-20'>
                    <h2 className='font-medium tracking-wide lg:text-2xl'>
                        {education.degree}
                    </h2>
                    <div className='flex justify-between'>
                        <p className='py-3 lg:text-xl'>
                            {education.school}
                        </p>
                        <p className='py-3 lg:text-xl font-sans font-bold'>
                            {education.year}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Education