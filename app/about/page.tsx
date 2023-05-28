'use client'
import React from 'react';
import { motion } from 'framer-motion'
import { experience } from '@/utils/data';
import { IExperience } from '@/interface';

const About = () => {
    const cardVariants = {
        offscreen: {
            x: 500,
        },
        onscreen: {
            x: 0,
            transition: {
                type: "spring",
                bounce: 0.6,
                duration: 0.8
            }
        }
    };
    return (
        <div className='min-h-screen px-20 bg-repeat'>
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

            <div className='flex mt-8'>
                <div className="ml-10 w-0.5 min-h-screen bg-gray-600"></div>
                <div>
                    {
                        experience.map((experience: IExperience) => {
                            return (
                                    <div className='flex w-32 items-center my-10' key={experience.id}>
                                        <hr className="border-2 border-black w-4" />
                                    <motion.div
                                        className='w-28'
                                        initial="offscreen"
                                        whileInView="onscreen"
                                        viewport={{ once: true, amount: 0.5 }}
                                    >
                                        <motion.div
                                            className='px-8 py-4 border-2 bg-black text-white flex-col gap-2 rounded-lg'
                                            style={{ width: "600px" }}
                                            variants={cardVariants}
                                        >
                                            <div className='flex gap-5 items-center justify-between'>
                                                    <img src={experience.companyLogo} alt='Cere Labs' width={100} height={70} className='mb-2 bg-white p-2' />
                                                    <p>Total Experienced - {experience.totalExperience.years}y {experience.totalExperience.months}m</p>
                                                </div>
                                                <p className='mb-4'> -{'>'} I joined {experience.companyName} on {experience.JoinedOn}.</p>
                                                <p> -{'>'} Worked on </p>
                                                <div className='ml-8 mb-4 flex'>
                                                    <div className="ml-10 w-0.5 min-h-fit bg-gray-600"></div>
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