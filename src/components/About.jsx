import React, { useEffect, useRef } from 'react'
import { RedirectBtnDark } from '../components/RedirectBtn';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

function About() {
    // const item1 = useRef(null);
    const {contextSafe} = useGSAP();

    const animateAbout = contextSafe(() => {
        const tl = gsap.timeline();
        gsap.from('#item1', {
            y: 40,
            opacity: 0,
            duration: 0.5,
            scrollTrigger: {
                trigger: '#item1',
                start: 'top 80%',
            }
        });
        
        gsap.from('#item2', {
            x: -40,
            opacity: 0,
            duration: 0.75,
            scrollTrigger: {
                trigger: '#item2',
                start: 'top 80%',
            }
        });

        gsap.from('#item3', {
            y: 60,
            opacity: 0,
            duration: 0.75,
            scrollTrigger: {
                trigger: '#item3',
                start: 'top 80%',
            }
        });
    });

    useEffect(() => {
        animateAbout();
    });

    return (
        <div
        id='about'
        data-scroll data-scroll-speed='0.01'
        className='bg-[#CDEA68] rounded-2xl text-emerald-950'>
            <p id='item1' className='regular tracking-wide leading-tight text-4xl px-4 pt-20 pb-12'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</p>

            <hr className='border-emerald-950'/>

            <div className=' regular py-4 px-8 flex pb-20 border-b border-emerald-950'>
                <p className='w-1/2'>What you can expect:</p>
                <p className='w-1/2'>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether its live or digital, delivered for one or a hundred people. <br /><br />
                    We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
            </div>

            <div className='flex justify-between p-4'>
                <div id='item2' className='flex gap-6 flex-col relative'>
                    <h1 className='regular relative z-[2] text-4xl'>Our approach:</h1>
                    <RedirectBtnDark text={'read more'}/>
                </div>

                <img id='item3' className='rounded-2xl w-1/2' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
            </div>

        </div>
    )
}

export default About