import React, { useEffect } from 'react'
import CardsTab from '../components/CardsTab'
import { RedirectBtnLight } from '../components/RedirectBtn';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Featured() {
    let urlArr = ['https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png', 'https://ochi.design/wp-content/uploads/2022/09/VISE1-1340x740.jpg', 'https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg', 'https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png'];
    let nameArr = ['FYDE', 'VISE', 'TRAWA', 'BLEND'];
    let buttonsArr = [['audit', 'copywriting', 'sales deck', 'slides design'], ['agency', 'company presentation'], ['brand identity', 'design research', 'investor deck'], ['branded template']];

    useGSAP(() => {
        gsap.from('#featured', {
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            x: -70,
            scrollTrigger: {
                trigger: '#featured',
                start: 'top 80%',
            }
        });
    });

    return (
        <div className='bg-zinc-900' data-scroll data-scroll-sped='0.01'>
            <h1 id='featured' className='regular text-4xl px-4 pt-16 pb-8 border-b border-zinc-800'>Featured projects</h1>
            <CardsTab url1={urlArr[0]} url2={urlArr[1]} name1={nameArr[0]} name2={nameArr[1]} buttons1={buttonsArr[0]} buttons2={buttonsArr[1]} />
            <CardsTab url1={urlArr[2]} url2={urlArr[3]} name1={nameArr[2]} name2={nameArr[3]} buttons1={buttonsArr[2]} buttons2={buttonsArr[3]} />

            <div className="flex justify-center pb-12 border-b border-zinc-800">
                <RedirectBtnLight text={'view all case studies'} />
            </div>
        </div>
    )
}

export default Featured