import React, { useRef } from 'react'
import { RedirectBtnDark, RedirectBtnLight } from './RedirectBtn'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Start() {
    const start = useRef(null);

    useGSAP(() => {
        gsap.from(start.current.children, {
            duration: 1,
            opacity: 0,
            y: 150,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
                scroll: 'body',
                trigger: start.current,
                start: 'top 70%',
                end: 'top 50%'
            }
        });

    });

    return (
        <div className='bg-[#CDEA68] w-full px-4 py-24 flex flex-col gap-32'>
            <div ref={start} className='text-[13vw] text-zinc-900 semibold uppercase text-center leading-[11vw]'>
                <h1 className=''>ready</h1>
                <h1 className=''>to start</h1>
                <h1 className='ml-12'>the project?</h1>
            </div>

            <div className='flex flex-col gap-2 items-center'>
                <RedirectBtnDark text={'start the project'} />
                <p className='text-zinc-900 regular'>OR</p>
                <RedirectBtnLight text={'hello@ochi.design'} />
            </div>
        </div>
    )
}

export default Start