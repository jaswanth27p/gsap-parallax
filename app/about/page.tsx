"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

type Props = {}

export default function Page({ }: Props) {
    const svgRef = useRef<SVGSVGElement>(null);
    const svgContainerRef = useRef<HTMLDivElement>(null);
    const blackScreenRef = useRef<HTMLDivElement>(null);
    const imgContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const svg = svgRef.current;
        const paths = svg?.querySelectorAll('path');

        const drawDuration = 2;

        if (paths) {
            paths.forEach((path, i) => {
                const length = path.getTotalLength();

                gsap.set(path, {
                    strokeDasharray: length + 1,
                    strokeDashoffset: length + 1,
                });

                gsap.to(path, {
                    strokeDashoffset: 0,
                    duration: drawDuration,
                    ease: 'power2.inOut',
                });
            });

            gsap.to(blackScreenRef.current, {
                height: 0,
                duration: 2,
                ease: 'power4.out',
                delay: drawDuration,
                onComplete: () => {
                    gsap.to('.img-container', {
                        opacity: 1,
                        duration: 1,
                    });
                }
            });
            gsap.fromTo(imgContainerRef.current,{
                y:0
            }, {
                y: -100,
                scrollTrigger: {
                    trigger: imgContainerRef.current,
                    scrub: 1,
                    start:'top top',
                    end:'bottom top',
                }
            });
            gsap.set(paths, {
                stroke: '#EFEFEF',
                delay: drawDuration + 0.1,
                ease: 'power4.out',
                duration: 2,
            });
        }

    }, []);

    return (
        <div className='min-h-screen relative'>
            <div ref={blackScreenRef} className="absolute inset-0 bg-black z-10"></div>
            <div className="bg fixed z-20 flex justify-start items-start">
                <div ref={svgContainerRef}>
                    <svg ref={svgRef} width="320" height="720" viewBox="0 0 320 720" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-369.01 813.099L-971.875 465.614V-229.108L-369.01 -576.593L233.875 -229.107V465.613L-369.01 813.099Z" stroke="#EFEFEF" strokeWidth="172.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
            <div className="content grid grid-cols-8 h-screen relative z-20">
                <ul className='col-span-1 flex flex-col items-end pt-20'>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className=' col-start-3 col-span-6 h-full relative'>
                    <h1 className='text-7xl font-bold pt-20 absolute z-20'>ABOUT</h1>
                    <div className='overflow-hidden w-[80%] aspect-video ml-[15%] mr-[5%] mt-10'>
                        <div ref={imgContainerRef} className="img-container relative w-full h-full scale-125 mt-10 opacity-0">
                            <Image src={'/about.png'} alt="" fill />
                        </div>
                    </div>
                    <div className='w-[60%] ml-auto p-6 mr-4'>
                        Our approach centers around fulfilling functional needs while making perfect sense and addressing the innate human quest for beauty and order. We believe in creating designs that have an immediate aspirational appeal and accrue value over time.
                    </div>
                </div>
            </div>
            <div className="h-screen"></div>
        </div>
    )
}
