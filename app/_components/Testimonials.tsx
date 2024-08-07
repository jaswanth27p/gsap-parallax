import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

type Props = {}

export default function Testimonials({ }: Props) {
    const containerRef = useRef(null)
    const headingRef = useRef(null)
    const imageRefs = useRef<any[]>([])

    imageRefs.current = []

    const addToRefs = (el: any) => {
        if (el && !imageRefs.current.includes(el)) {
            imageRefs.current.push(el)
        }
    }

    useGSAP(() => {
        const distances = [0,100, 50];
        const maxDuration = 2; 

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top bottom',
                end: 'bottom center',
                scrub: 1,
            }
        })

        tl.fromTo(headingRef.current, { y: 0 }, { y: -50 })

        imageRefs.current.forEach((image, index) => {
            const distance = distances[index % distances.length]; // Use modulo to cycle through distances
            const duration = (distance / Math.max(...distances)) * maxDuration; // Calculate duration based on distance
            tl.fromTo(image, {
                y: distance+50
            }, {
                y: distance 
            }, 0)  
        })
    }, [])

    return (
        <div ref={containerRef} className='min-h-screen px-4 md:px-10 my-[10%] '>
            <h1 ref={headingRef} className='py-4 text-4xl'>Testimonials</h1>
            <div className='col-span-2 row-span-1 text-md max-w-md'>
                From large residential complexes to iconic institutional buildings, our portfolio showcases our commitment to excellence and creative design solutions.
            </div>
            <div className="grid grid-cols-4 w-full gap-4 mt-16">
                <div ref={addToRefs}>
                    <div className="relative w-full aspect-square">
                        <Image src={'/Hero_BG.png'} fill style={{ objectFit: 'cover' }} alt={'about img'} />
                    </div>
                    <div>Ingenios innovative approach and attention to detail made all the difference in our project. The collaborative process was seamless, and the outcome exceeded our expectations.</div>
                </div>
                <div>
                </div>
                <div ref={addToRefs}>
                    <div className="relative w-full aspect-square ">
                        <Image src={'/About_IMG.png'} fill style={{ objectFit: 'cover' }} alt={'about img'} />
                    </div>
                    <div>Ingenios innovative approach and attention to detail made all the difference in our project. The collaborative process was seamless, and the outcome exceeded our expectations.</div>
                </div>
                <div ref={addToRefs}>
                    <div className="relative w-full aspect-square ">
                        <Image src={'/Hero_BG.png'} fill style={{ objectFit: 'cover' }} alt={'about img'} />
                    </div>
                    <div>Ingenios innovative approach and attention to detail made all the difference in our project. The collaborative process was seamless, and the outcome exceeded our expectations.</div>
                </div>
            </div>
        </div>
    )
}
