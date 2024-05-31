import React, { useEffect, useState } from 'react'

function Eyes() {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        window.addEventListener('mousemove', (event) => {
            let x = (window.innerWidth/2) - event.clientX;
            let y = (window.innerHeight/2) - event.clientY;
            let angle = Math.atan2(y, x) * (180/Math.PI);
            setRotate(angle);
        });
    });

    return (
        <div
        id='eyes'
        data-scroll data-scroll-speed='0.1'
        className='relative bottom-[30vw] z-2'>
            <div className='flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-[7vw]'>
                <div className='bg-zinc-100 w-[12rem] h-[12rem] flex justify-center items-center rounded-full'>
                    <div style={{transform: `rotate(${rotate}deg)`}} className='eyeControl w-full'>
                        <div className='bg-zinc-900 w-[8rem] h-[8rem] flex items-center rounded-full ml-4'>
                            <div className='ml-4 w-[1.75rem] h-[1.75rem] rounded-full bg-zinc-100'></div>
                        </div>
                    </div>
                </div>

                <div className='bg-zinc-100 w-[12rem] h-[12rem] flex justify-center items-center rounded-full'>
                    <div style={{transform: `rotate(${rotate}deg)`}} className='eyeControl w-full'>
                        <div className='bg-zinc-900 w-[8rem] h-[8rem] flex items-center rounded-full ml-4'>
                            <div className='ml-4 w-[1.75rem] h-[1.75rem] rounded-full bg-zinc-100'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes