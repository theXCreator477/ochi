import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useState } from 'react'

function Cursor() {
    const cursor = useRef(null);
    const smallCursor = useRef(null);

    const [positionX, setPositionX] = useState(0);
    const [positionY, setPositionY] = useState(0);

    useGSAP(() => {
        gsap.to(cursor.current, {
            x: positionX,
            y: positionY,
            duration: 0.3,
        });
    }, [positionX, positionY]);

    useGSAP(() => {
        gsap.to(smallCursor.current, {
            x: positionX,
            y: positionY,
            duration: 0.15,
        });
    }, [positionX, positionY]);

    window.addEventListener('mousemove', (event) => {
        setPositionX(event.clientX - cursor.current.clientWidth / 1.5);
        setPositionY(event.clientY - cursor.current.clientHeight / 1.5);
    });

    return (
        <div>
            <div ref={cursor} className='w-[30px] h-[30px] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 fixed top-0 left-0'></div>

            <div ref={smallCursor} className='w-[12px] h-[12px] rounded-full border-2 border-zinc-100 fixed top-[15px] left-[15px]'></div>
        </div>
    )
}

export default Cursor