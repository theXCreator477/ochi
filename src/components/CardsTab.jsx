import { motion, useAnimation } from 'framer-motion'
import React from 'react'

function CardsTab({ url1, url2, name1, name2, buttons1, buttons2 }) {
  const hovEffect = [useAnimation(), useAnimation()];

  function handleHoverStart(i) {
    hovEffect[i].start({ y: '0%' });
  }

  function handleHoverEnd(i) {
    hovEffect[i].start({ y: '100%' });
  }

  return (
    <div className='flex relative justify-center gap-6 px-8 py-12'>

      <div className='flex overflow-hidden absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 text-center pointer-events-none'>
        {name1.split('').map((item, index) => (
          <motion.span
            initial={{ y: '100%' }}
            animate={hovEffect[0]}
            transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
            className='semibold text-[10vw] text-[#CDEA68]' key={index}>{item}</motion.span>
        ))}
      </div>

      <div className='flex overflow-hidden absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 text-center pointer-events-none'>
        {name2.split('').map((item, index) => (
          <motion.span
            initial={{ y: '100%' }}
            animate={hovEffect[1]}
            transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
            className='semibold text-[10vw] text-[#CDEA68]' key={index}>{item}</motion.span>
        ))}
      </div>

      <motion.div
        onHoverStart={() => handleHoverStart(0)}
        onHoverEnd={() => handleHoverEnd(0)}
        className='w-1/2 relative'>

        <h1 className='p-2 text-lg regular'>&#x2022;&nbsp;&nbsp;{name1}</h1>

        <motion.div
          animate={{ scale: 1 }}
          whileHover={{ scale: 0.95 }}
          transition={{ease: [0.16, 1, 0.3, 1], duration: 1 }}
          className='rounded-2xl h-[35vw] overflow-hidden'>

          <motion.img
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.15 }}
            transition={{ease: [0.33, 1, 0.68, 1], duration: 0.75, delay: 0.1}}
            className='rounded-2xl object-cover h-full w-full' src={url1} alt="" />

        </motion.div>

        <div className='my-3 flex gap-2'>{buttons1.map((item, index) => (
          <button className='border-zinc-100 border rounded-full px-4 py-1 uppercase regular text-xs' key={index}>{item}</button>
        ))}
        </div>

      </motion.div>

      <motion.div
        onHoverStart={() => handleHoverStart(1)}
        onHoverEnd={() => handleHoverEnd(1)}
        className='w-1/2 relative'>

        <h1 className='p-2 text-lg regular'>&#x2022;&nbsp;&nbsp;{name2}</h1>

        <motion.div
          animate={{ scale: 1 }}
          whileHover={{ scale: 0.95 }}
          transition={{ease: [0.16, 1, 0.3, 1], duration: 1 }}
          className='rounded-2xl h-[35vw] overflow-hidden'>

          <motion.img
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.15 }}
            transition={{ease: [0.33, 1, 0.68, 1], duration: 0.75, delay: 0.1}}
            className='rounded-2xl object-cover h-full w-full' src={url2} alt="" />

        </motion.div>

        <div className='my-3 flex gap-2'>{buttons2.map((item, index) => (
          <button className='border-zinc-100 border rounded-full px-4 py-1 uppercase regular text-xs' key={index}>{item}</button>
        ))}
        </div>

      </motion.div>

    </div>
  )
}

export default CardsTab