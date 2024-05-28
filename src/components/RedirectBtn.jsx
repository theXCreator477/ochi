// import { motion } from 'framer-motion';
import React from 'react'
import { IoIosArrowRoundUp } from "react-icons/io";

function RedirectBtnDark({text}) {

    function handleHover() {
        console.log('hovered');
    }

    return (
        <div 
        onMouseEnter={handleHover}
        className='flex items-center uppercase regular text-zinc-100 bg-zinc-900 py-3 w-fit justify-center px-5 rounded-full gap-4'>
            <span>{text}</span>
            <a className='text-zinc-900 bg-zinc-100 rounded-full' href="#"><IoIosArrowRoundUp className='text-3xl rotate-45' /></a>
        </div>
    )
}

function RedirectBtnLight({text}) {
    return (
        <div className='flex items-center uppercase regular bg-zinc-100 text-zinc-900 py-3 w-fit justify-center px-5 rounded-full gap-4'>
            <span>{text}</span>
            <a className='text-zinc-100 bg-zinc-900 rounded-full' href="#"><IoIosArrowRoundUp className='text-3xl rotate-45' /></a>
        </div>
    )
}

export {RedirectBtnDark, RedirectBtnLight}