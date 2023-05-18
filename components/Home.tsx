'use client'
import React from 'react'
import { motion } from 'framer-motion';

const Home = () => {

    return (
        <div className='w-full p-10 min-h-screen bg-stone-600'>
            <div className='grid grid-cols-2 gap-4'>
                <div className='flex-col justify-center'>
                    <motion.div
                        drag
                        dragTransition={{
                            min: 50,
                            max: 300,
                            bounceDamping: 8
                        }}
                    >
                        <div style={{ width: "500px" }}>
                            {"Avinash Kokare".split('').map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 1, color: "white" }}
                                    animate={{ opacity: 0, color: "white" }}
                                    transition={{ delay: index * 0.4, repeat: Infinity, repeatType: 'reverse', repeatDelay: 5 }}
                                    className='text-5xl font-bold '
                                    viewport={{ once: true }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                            <motion.h1
                                initial={{ opacity: 0, scale: 0, color: "black" }}
                                animate={{
                                    scale: [1, 2, 1],
                                    borderRadius: ["10%", "20%", "20%", "10%"],
                                    opacity: [1],
                                }}
                                transition={{ duration: 5, repeat: Infinity }}
                            >
                                <p className='font-bold ml-40'>Software Developer</p>
                            </motion.h1>
                        </div>
                    </motion.div>

                    <p className='text-center text-white text-1xl p-10 border-solid border-2 rounded-lg mt-20 bg-black shadow-lg shadow-cyan-500/50'>Building the future, {"One line at a time.".split('').map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, color: "white" }}
                            animate={{ opacity: 1, color: "white" }}
                            transition={{ delay: index * 0.4, }}
                            className='text-2xl font-bold'
                            viewport={{ once: true }}
                        >
                            {char}
                        </motion.span>
                    ))}</p>
                    <p className='mt-36 p-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellat cumque explicabo aspernatur. Exercitationem earum dolor voluptatem dolore numquam iusto blanditiis, error enim, sit molestiae nemo officia accusamus? Ad, amet!</p>
                </div>
                <div className='flex justify-center items-center mt-10'>
                    <motion.img className='border-solid border-2 rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/50 '
                        animate={{ rotate: 30 }}
                        whileHover={{ rotate: 0 }}
                        transition={{ duration: 3 }}
                        src='https://plus.unsplash.com/premium_photo-1682608389237-f4b698f5af82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80'
                        width={300}
                        height={400}
                    >
                    </motion.img>
                </div>
            </div>
        </div>
    )
}

export default Home;