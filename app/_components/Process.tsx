import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

type Props = {}

export default function Prrocess({ }: Props) {
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
            tl.fromTo(image, {
                y: 200 + index * 100 , opacity: 0
            }, {
                y: index%2 * 50, opacity: 1, duration: 1
            }, "-=0.8")
        })
    }, [])

    return (
        <div ref={containerRef} className='min-h-screen px-4 md:px-10 my-[10%] '>
            <h1 ref={headingRef} className='py-4 text-4xl'>Process</h1>
            <div className="grid grid-cols-4 grid-rows-2 w-full gap-4">
                <div className='col-span-2 row-span-1 text-xl'>
                    From large residential complexes to iconic institutional buildings, our portfolio showcases our commitment to excellence and creative design solutions.
                </div>
                <div></div>
                <div className='col-span-1 row-span-1 text-xl'>Each project is a testament to our philosophy of enriching lives through thoughtful architecture, blending aesthetics, practicality, and sustainability.</div>
                <div className="col-span-2 grid grid-cols-2 gap-4">
                    <div ref={addToRefs} className="relative w-full h-full aspect-square">
                        <Image src={'/About_IMG.png'} fill style={{ objectFit: 'cover' }} alt={'about img'} />
                    </div>
                    <div ref={addToRefs} className="relative w-full h-full aspect-square">
                        <Image src={'/Hero_BG.png'} fill style={{ objectFit: 'cover' }} alt={'about img'} />
                    </div>
                </div>
                <div ref={addToRefs} className='col-span-1 row-span-1'>
                    <div className="relative w-full h-full aspect-square">
                        <Image src={'/About_IMG.png'} fill style={{ objectFit: 'cover' }} alt={'about img'} />
                    </div>
                </div>
                <div ref={addToRefs} className='col-span-1 row-span-1'>
                    <div className="relative w-full h-full aspect-square">
                        <Image src={'/About_IMG.png'} fill style={{ objectFit: 'cover' }} alt={'about img'} />
                    </div>
                </div>
            </div>
        </div>
    )
}
