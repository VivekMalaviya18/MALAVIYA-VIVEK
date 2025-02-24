import React from 'react'
import { LuImport } from 'react-icons/lu'
import benson from '../assets/benson.webp'
import fifth_one from '../assets/fifth_one.webp'
import hero from '../assets/hero.webp'

const Hero = () => {
  return (
    <section className='flex flex-col items-center justify-center'>
        <h1 className='mt-16 overflow-hidden text-[12vw] font-semibold uppercase leading-none'>
            Vivek <br /> Malaviya
        </h1>
        <div className="mt-8">
            <a href="/MALAVIYA VIVEK RESUME KS.pdf"
                target='_blank'
                rel='noopener noreferrer'
                download
                className='flex items-center rounded-xl bg-lime-400 p-2 px-3 font-sans font-medium text-black hover:bg-lime-500'>
                <span>Resume PDF</span>
                <LuImport className='ml-2' />
            </a>
        </div>
        <div className="w-full">
            <img src={hero} alt='Vivek Malaviya' className='mt-8 h-96 w-full object-cover'/>
        </div>
    </section>
  )
}

export default Hero