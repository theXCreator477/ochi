import React, { useEffect, useRef } from 'react'
import '../index.css'
import { motion } from 'framer-motion'
import landing from '../assets/landing.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function LandingPage() {
    const landingRef = useRef(null);
    const landingImg = useRef(null);

    useGSAP(() => {
        gsap.from(landingRef.current.children, {
            y: 100,
            opacity: 0,
            duration: 0.75,
            delay: 0.5,
            stagger: 0.15,
        });
    });

    return (
        <div 
        id='landing'
        data-scroll data-scroll-speed='-0.7'
        className='px-8 pb-32'>
            <div id='mt-container' ref={landingRef} className="text-[6vw] leading-[5vw] py-24 border-b-[1px] border-zinc-800">
                {["we create", "eye-opening", "presentations"].map((item, index) => (
                    <div key={index} className='flex gap-4 items-center'>
                        {index === 1 && 
                        
                        <motion.img
                        ref={landingImg}
                        initial={{ width: 0 }}
                        animate={{ width: '1.25em' }}
                        transition={{ ease: [0.85, 0, 0.15, 1], duration: 1.25, delay: 1.5 }}
                        className='rounded-2xl w-[1.25em] h-[0.8em] mt-2 bg-red-500 flex justify-center'
                        src={landing}>
                        </motion.img>}

                        <h1 key={index} className='semibold uppercase'>{item}</h1>
                    </div>
                ))}
            </div>

            <div className="flex justify-between py-4">
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                    <p key={index} className='regular text-sm'>{item}</p>
                ))}
                <p className='py-1 px-4 border rounded-full w-fit'>START THE PROJECT</p>
            </div>
        </div>
    )
}

export default LandingPage