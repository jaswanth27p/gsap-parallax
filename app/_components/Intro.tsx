import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

type Props = {}

export default function Intro({ }: Props) {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const svg = svgRef.current;
        const paths = svg?.querySelectorAll('path');

        if (paths) {
            paths.forEach((path, i) => {
                const length = path.getTotalLength();

                gsap.set(path, {
                    strokeDasharray: length,
                    strokeDashoffset: length,
                });

                gsap.to(path, {
                    strokeDashoffset: 0,
                    duration: 2,
                    ease: 'power2.inOut',
                     
                });
            });
        }
    }, []);

    return (
        <div className='min-h-screen bg-black flex justify-center items-center'>
            <svg ref={svgRef} width="122" height="140" viewBox="0 0 122 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g style={{ mixBlendMode: 'exclusion' }}>
                    <path d="M61.1758 69.9994L119.195 103.498L61.1758 3.00186" stroke="white" strokeWidth="0.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M61.1757 69.9994L119.197 36.4988M61.1757 69.9994L32.166 53.2528L3.1582 36.4969L119.197 36.4988M61.1757 69.9994L32.166 86.7553L3.1582 103.502L61.1757 3.00186V136.995L119.197 36.4988" stroke="white" strokeWidth="0.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.1582 36.4969L61.1757 136.997" stroke="white" strokeWidth="0.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M119.043 36.4988L61.1776 69.9976L3 36.4988" stroke="white" strokeWidth="0.5" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M61.1776 69.9976V136.991" stroke="white" strokeWidth="0.5" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 36.4988V103.496L61.0213 136.995L119.044 103.496V36.4988L61.0213 3L3 36.4988Z" stroke="white" strokeWidth="4.44" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </svg>
        </div>
    )
}
