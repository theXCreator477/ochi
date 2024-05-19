import React from 'react'
import { RedirectBtnDark } from '../components/RedirectBtn';

function About() {
    return (
        <div
        data-scroll data-scroll-speed='0.01'
        className='relative z-1 bg-[#CDEA68] rounded-2xl text-emerald-950'>
            <p className='regular tracking-wide leading-tight text-4xl px-4 pt-20 pb-12 border-b border-emerald-950'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</p>

            <div className=' regular py-4 px-8 flex pb-20 border-b border-emerald-950'>
                <p className='w-1/2'>What you can expect:</p>
                <p className='w-1/2'>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether its live or digital, delivered for one or a hundred people. <br /><br />
                    We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
            </div>

            <div className='flex justify-between p-4'>
                <div className='flex gap-6 flex-col'>
                    <h1 className='regular text-4xl'>Our approach:</h1>
                    <RedirectBtnDark text={'read more'}/>
                </div>

                <img className='rounded-2xl w-1/2' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
            </div>

        </div>
    )
}

export default About