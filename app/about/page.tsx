'use client'
import React from 'react';
import { motion } from 'framer-motion'

const About = () => {
    return (
        <div className='min-h-screen bg-contact-us-page px-20'>
            <div className='px-20 pb-15 pt-10 mt-20 h-80 bg-black text-white border-2 rounded-3xl'>
                <div className='flex justify-center items-center'>
                    <div className='flex-initial'>
                        <img src='contactus-1.png' width={1000} height={150} />
                    </div>
                    <div className='flex-initial'>
                        <motion.p className='text-6xl font-bold text-right'>ABOUT ME.</motion.p>
                        <p className='ml-10 px-20 text-justify'>
                            “I have around two year's of experience as a junior software engineer. In my short time there, I've already contributed to projects and assisted with managing one project for one of the firm's long-time clients.

                            “Prior to this role, I completed a 2-month internship with Web technology, where I honed my web development skills. Ideally, I would like to continue to specialize in web software engineering, an area where I know your firm excels.”
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About