import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

type Props = {}

export default function Hero({ }: Props) {
    const svgRef = useRef<SVGSVGElement>(null);
    const svgContainerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const svg = svgRef.current;
        const paths = svg?.querySelectorAll('path');

        const drawDuration = 2;  
        const staggerDelay = 0.3; 

        if (paths) {
            paths.forEach((path, i) => {
                const length = path.getTotalLength();

                gsap.set(path, {
                    strokeDasharray: length+1,
                    strokeDashoffset: length+1,
                });

                gsap.to(path, {
                    strokeDashoffset: 0,
                    duration: drawDuration,
                    ease: 'power2.inOut',
                    delay: i * staggerDelay,
                });
            });

            const totalDelay = drawDuration + (paths.length - 1) * staggerDelay;
            gsap.to('.white-bg', {
                height:0,
                duration:2,
                ease:'power4.out',
                delay:totalDelay
            });
            gsap.set(paths, {
                stroke: 'white',
                delay: totalDelay+0.1,
                ease: 'power4.out',
                duration:2
            });
        }

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: svgContainerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1,
                markers: false,
            },
        });

        tl.to('.hero-bg', {
            scale: 1.1,
        }, 0);

        tl.to('.center-logo', {
            yPercent: 100,
        }, 0);

        gsap.fromTo(svgContainerRef.current, {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: svgContainerRef.current,
                start: "top 90%",
                end: "bottom 10%",
                scrub: 1,
                markers: false,
            },
        });

    }, []);

    return (
        <div className='relative min-h-screen w-screen flex items-center justify-center parallax-container mb-[20%] overflow-x-hidden'>
            <div className="absolute white-bg inset-0 bg-white "></div>
            <Image
                className='-z-10 hero-bg'
                src={'/Hero_BG.png'}
                alt={'hero bg'}
                fill
                style={{ objectPosition: 'center', objectFit: 'cover' }}
            />
            <div ref={svgContainerRef} className='center-logo relative'>
                <svg ref={svgRef} width="122" height="140" viewBox="0 0 122 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g style={{ mixBlendMode: 'exclusion' }}>
                        <path d="M61.1758 69.9994L119.195 103.498L61.1758 3.00186" stroke="black" strokeWidth="0.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M61.1757 69.9994L119.197 36.4988M61.1757 69.9994L32.166 53.2528L3.1582 36.4969L119.197 36.4988M61.1757 69.9994L32.166 86.7553L3.1582 103.502L61.1757 3.00186V136.995L119.197 36.4988" stroke="black" strokeWidth="0.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3.1582 36.4969L61.1757 136.997" stroke="black" strokeWidth="0.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M119.043 36.4988L61.1776 69.9976L3 36.4988" stroke="black" strokeWidth="0.5" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M61.1776 69.9976V136.991" stroke="black" strokeWidth="0.5" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 36.4988V103.496L61.0213 136.995L119.044 103.496V36.4988L61.0213 3L3 36.4988Z" stroke="black" strokeWidth="4.44" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                </svg>
            </div>
        </div>
    );
}
