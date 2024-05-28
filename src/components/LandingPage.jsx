import React, { useEffect, useRef } from 'react'
import '../index.css'
import { motion } from 'framer-motion'
import landing from '../assets/landing.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function LandingPage() {
    const landingRef = useRef(null);
    const {contextSafe} = useGSAP();

    const animateLandingRef = contextSafe(() => {
        gsap.from(landingRef.current.children, {
            y: 100,
            opacity: 0,
            duration: 0.75,
            delay: 0.5,
            stagger: 0.15,
        });
    });

    useEffect(() => {
        animateLandingRef();
    });

    return (
        <div
        data-scroll data-scroll-speed='-0.7'
        className='px-8 pb-32'>
            <div ref={landingRef} className="py-24 border-b-[1px] border-zinc-800">
                {["we create", "eye-opening", "presentations"].map((item, index) => (
                    <div key={index} className='flex gap-4 items-center'>
                        {index === 1 && 
                        
                        <motion.img
                        initial={{ width: 0 }}
                        animate={{ width: '7rem' }}
                        transition={{ ease: [0.85, 0, 0.15, 1], duration: 1.25, delay: 1.5 }}
                        className='rounded-2xl w-[7rem] h-[4.5rem] mt-2 bg-red-500 flex justify-center'
                        src={landing}>

                            

                        </motion.img>}

                        <h1 key={index} className='semibold text-8xl uppercase leading-[4.75rem]'>{item}</h1>
                    </div>
                ))}
            </div>

            <div className="flex justify-between py-4">
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                    <p key={index} className='regular text-sm'>{item}</p>
                ))}
                <p className='py-1 px-4 border rounded-full'>START THE PROJECT</p>
            </div>
        </div>
    )
}

export default LandingPage