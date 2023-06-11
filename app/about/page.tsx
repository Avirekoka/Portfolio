'use client'
import React, { useEffect } from 'react';
import { motion } from 'framer-motion'
import { experience } from '@/utils/data';
import { IExperience } from '@/interface';
import { calculateYearAndMonth, deviceWidth } from '@/utils/helper-functions';
import styles from './about.module.css';
import Image from 'next/image';

const About = () => {
    const cardVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        offscreen: {
            x: 500,
            opacity: 0,
        },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.2,
                duration: 1
            }
        }
    };

    const { years, months } = calculateYearAndMonth(new Date("22 June 2021"), new Date());
    return (
        <div className='min-h-screen md:px-20'>
            <div className={`md:px-20 md:pb-15 md:pt-10 mt-20 md:h-80 bg-black text-white border-2 rounded-3xl ${styles.avinash}`}>
                <div className='flex justify-center items-center flex-col md:flex-row'>
                    <div>
                        <motion.p className='md:hidden text-3xl mt-5 md:text-6xl font-bold text-center md:text-right'>ABOUT ME.</motion.p>
                        <img src='contactus-1.png' className={`${styles.aboutImage} p-5 md:p-0`} alt='contact us' />
                    </div>
                    <div>
                        <motion.p className={`text-3xl mt-5 md:text-6xl font-bold text-center md:text-right ${styles.aboutMeHeading}`}>ABOUT ME.</motion.p>
                        <p className='p-5 md:p-0 md:ml-10 md:px-20 text-justify'>
                            “I have around two year&apos;s of experience as a junior software engineer. In my short time there, I&apos;ve already contributed to projects and assisted with managing one project for one of the firm&apos;s long-time clients.

                            “Prior to this role, I completed a 2-month internship with Web technology, where I honed my web development skills. Ideally, I would like to continue to specialize in web software engineering, an area where I know your firm excels.”
                        </p>
                    </div>
                </div>
            </div>

            <div className='md:flex mt-8'>
                <p className='text-3xl ml-2 md:ml-0 md:text-5xl text-black font-bold'>EXPERIENCE</p>
                <p className='text-black ml-2'>The only source of knowledge is experience !</p>
            </div>
            <p className='mt-2 ml-2 md:ml-0 text-black'>Total Experience : {years}y {months}m</p>

            <div className='flex my-8'>
                <div className="md:w-0.5 md:min-h-screen bg-black"></div>
                <div>
                    {
                        experience.map((experience: IExperience) => {
                            return (
                                <div className='md:flex md:w-32 items-center my-10' key={experience.id}>
                                    <hr className="border-2 w-4 border-black" />
                                    <motion.div
                                        className='w-28'
                                        initial={deviceWidth() ? 'hidden' : 'offscreen'}
                                        whileInView={deviceWidth() ? 'visible' : 'onscreen'}
                                        viewport={{ once: true, amount: 1 }}
                                        variants={cardVariants}
                                    >
                                        <motion.p className='text-black'>scroll</motion.p>
                                        <motion.div
                                            className={`px-8 py-4 border-2 bg-black text-white flex-col gap-2 rounded-lg ${styles.experienceCard}`}
                                        >
                                            <div className='flex gap-5 items-center justify-between'>
                                                <img src={experience.companyLogo} alt='Cere Labs' width={100} height={70} className='mb-2 bg-white p-2' />
                                                <p>Total Experience - {experience.totalExperience.years}y {experience.totalExperience.months}m</p>
                                                </div>
                                                <p className='mb-4'> -{'>'} I joined {experience.companyName} on {experience.JoinedOn}.</p>
                                                <p> -{'>'} Worked on </p>
                                            <div className='mb-4 flex'>
                                                <div className="ml-10 w-0.5 min-h-fit bg-white"></div>
                                                    <div>
                                                        {
                                                            experience.description.split('.').map(describe => {
                                                                return (
                                                                    <><p className='my-2'> -{'>'} {describe}</p></>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                                <p> -{'>'} {
                                                    experience.EndOn !== "Present" ? `Journey at ${experience.companyName} ends on ${experience.EndOn}.` : `${experience.EndOn}`
                                                }</p>
                                        </motion.div>

                                    </motion.div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default About