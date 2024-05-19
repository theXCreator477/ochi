import React from 'react'
import { IoIosArrowRoundUp } from "react-icons/io";

function RedirectBtnDark({text}) {
    return (
        <div className='flex items-center uppercase regular text-zinc-100 bg-zinc-900 py-3 w-fit justify-center px-6 rounded-full gap-2'>
            <span>{text}</span>
            <a className='' href="#"><IoIosArrowRoundUp className='text-3xl rotate-45' /></a>
        </div>
    )
}

function RedirectBtnLight({text}) {
    return (
        <div className='flex items-center uppercase regular bg-zinc-100 text-zinc-900 py-3 w-fit justify-center px-6 rounded-full gap-2'>
            <span>{text}</span>
            <a className='' href="#"><IoIosArrowRoundUp className='text-3xl rotate-45' /></a>
        </div>
    )
}

export {RedirectBtnDark, RedirectBtnLight}