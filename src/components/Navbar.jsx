import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { LINKS } from '../constants/index.jsx'
import { AnimatePresence,motion } from 'framer-motion'

const Navbar = () => {

const [isOpen, setIsOpen] = useState(false)

const toggleMenu = () => {
    setIsOpen(!isOpen)
}

useEffect(() => {
    if (isOpen) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }
}, [isOpen])


const containerVariants = {
    hidden:{
        opacity: 0,
        y: '-200%',
    },
    visible:{
        opacity: 1,
        y:0,
        transition:{
            staggerChildren: 0.3
        }
    }
}

 const linkVariants = {
        hidden:{
            opacity: 0,
            y: -20
        },
        visible:{
            opacity: 1,
            y: 0
        }
 }

  return (
    <>
        <nav className='fixed right-4 top-5 z-30'>
            <motion.button 
            onClick={toggleMenu} 
            className='rounded-md p-3 border border-red-500/0 hover:border-orange-300 transition-colors duration-300'
            initial={{rotate: 0, scale:1}}
            animate={isOpen ? { rotate: 90, scale: 1 } : { rotate: 0, scale: 1 }}
            transition={{type: 'spring', stiffness: 260, damping: 10, ease:'easeInOut'}}
            >
                {isOpen ? (
                    <FaTimes className='text-2xl h-6 w-6 text-orange-300 transition-transform duration-300' />
                ) : (
                    <FaBars className='text-2xl h-6 w-6 text-white  transition-transform duration-300' />
                )}
            </motion.button>
        </nav>
        <AnimatePresence>
        {isOpen && (
            <motion.div 
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            className='fixed inset-0 z-20 flex flex-col items-center justify-center bg-black text-white'>
                <ul className='space-y-6 text-3xl'>
                    {LINKS.map((link) =>(
                        <motion.li
                        variants={linkVariants}
                        key={link.id}>
                            <a href={`#${link.id}`} onClick={toggleMenu} className='text-5xl font-semibold uppercase tracking-wide hover:text-orange-300 lg:text-9xl'>{link.name}
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        )}
        </AnimatePresence>
    </>
  )
}

export default Navbar