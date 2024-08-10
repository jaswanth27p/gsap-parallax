import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const OverlapText = () => {

    return (
        <div className="flex items-center justify-center my-24 min-h-screen relative  ">
            <div className='flex justify-center items-center'>
                <div
                    id="circle"
                    className="w-96 aspect-square bg-black rounded-full absolute"
                    style={{ zIndex: 20 }}
                ></div>
                <h1
                    id="text"
                    className="text-black flex justify-center text-nowrap text-5xl font-bold absolute w-full text-center"
                    style={{ zIndex: 10 }}
                >
                    This is a Full Screen Text with Black Circle Overlap
                </h1>
                <h1
                    id="text"
                    className=" text-white flex justify-center text-5xl font-bold absolute w-96 overflow-hidden text-nowrap  text-center"
                    style={{ zIndex:  30 }}
                >
                    This is a Full Screen Text with Black Circle Overlap
                </h1>
            </div>
        </div>
    );
};

export default OverlapText;
