import React from 'react'
import '../index.css'
import { motion } from 'framer-motion'

function Marquee() {
  return (
    <div
    data-scroll data-scroll-speed='-0.2'
    className='bg-[#004D43] rounded-tl-2xl rounded-tr-2xl whitespace-nowrap overflow-hidden flex'>
      <motion.h1
      initial={{x: '0'}}
      animate={{x: '-100%'}}
      transition={{ease: 'linear', repeat: Infinity, duration: 7}}
      className='leading-[25vw] uppercase text-[25vw] semibold'>we are ochi &nbsp;&nbsp;</motion.h1>
      <motion.h1
      initial={{x: '0'}}
      animate={{x: '-100%'}}
      transition={{ease: 'linear', repeat: Infinity, duration: 7}}
      className='leading-[25vw] uppercase text-[25vw] semibold'>we are ochi &nbsp;&nbsp;</motion.h1>
    </div>
  )
}

export default Marquee