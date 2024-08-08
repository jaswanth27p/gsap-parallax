import Image from 'next/image'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

type Props = {}

export default function About({ }: Props) {
  useGSAP(() => {
    gsap.to('.white-top', {
      height: 100,
      ease: 'none',
      scrollTrigger: {
        trigger: '.parent-container',
        start: 'top bottom',
        end: 'bottom top',
        scrub:1,
      },
    })
    gsap.to('.white-bottom', {
      height:0,
      ease: 'none',
      scrollTrigger: {
        trigger: '.parent-container',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    })
  }, [])

  return (
    <div className='min-h-screen px-4 md:px-10 my-[10%]'>
      <h1 className='py-4 text-4xl'>About Us</h1>
      <div className='relative h-[350px] w-full parent-container overflow-hidden'>
        <div className="absolute inset-0 moving-div">
          <Image src={'/About_IMG.png'} fill style={{objectFit:'cover'}} alt={'about img'} />
        </div>
        <div className="absolute white-top inset-0 w-full h-[0px] bg-white"></div>
        <div className="absolute white-bottom left-0 bottom-0 w-full h-[100px] bg-white"></div>
      </div>
      <div className="grid grid-cols-4 py-4">
        <div className='col-span-3'></div>
        <div className='col-span-1 text-md'>Our approach centers around fulfilling functional needs while making perfect sense and addressing the innate human quest for beauty and order. We believe in creating designs that have an immediate aspirational appeal and accrue value over time.</div>
      </div>
    </div>
  )
}
