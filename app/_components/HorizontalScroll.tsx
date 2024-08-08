import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const images = [
    { src: '/Hero_BG.png', alt: 'Image 1' },
    { src: '/About_IMG.png', alt: 'Image 2' },
    { src: '/Hero_BG.png', alt: 'Image 3' },
    { src: '/About_IMG.png', alt: 'Image 4' },
];

const HorizontalScroll = () => {
    const scrollContainer = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        const container = scrollContainer.current;
        if (!container) return;

        gsap.to(container, {
            xPercent: -75,
            ease: 'none',
            scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: 2,
                markers:true
            },
        });
    }, []);

    return (
        <div className="overflow-hidden">
            <div
                ref={scrollContainer}
                className="flex w-[400vw] h-screen"
            >
                {images.map((image, index) => (
                    <div key={index} className="flex-none w-screen h-screen relative">
                        <Image src={image.src} alt={image.alt} fill style={{ objectFit: 'cover' }} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HorizontalScroll;
