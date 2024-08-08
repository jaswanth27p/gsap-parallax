import Image from 'next/image'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP);

type Props = {}

export default function Hero({ }: Props) {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.parallax-container',
                start: "top top",
                end: "bottom top",
                scrub: 1,
            },
        })

        tl.to('.hero-bg', {
            scale: 1.1, 
        }, 0)
        tl.to('.center-logo', {
            yPercent:100
        }, 0)
    }, [])

    return (
        <div className='relative min-h-screen w-screen flex items-center justify-center parallax-container mb-[20%] overflow-x-hidden'>
            <Image className='-z-10 hero-bg' src={'/Hero_BG.png'} alt={'hero bg'} fill style={{ objectPosition: 'center', objectFit: 'cover' }} />
            <Image className='center-logo' src={'/LOGO_CENTER.svg'} alt={'center logo'} width={125} height={125} />
        </div>
    )
}
