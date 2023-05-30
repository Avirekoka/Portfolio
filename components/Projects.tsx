'use client'
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { projects } from '@/utils/data';
import Link from 'next/link'

const Projects = () => {

    return (
        <>
            <div className='flex mt-8'>
                <div className="ml-10 w-0.5 min-h-screen bg-gray-600"></div>
                <div>
                    {
                        projects.map((project) => {
                            return (
                                <div className='flex w-32 items-center my-10' key={project.id}>
                                    <hr className="border-2 bg-gray-600 w-4" />
                                    <motion.div
                                        className='w-28'
                                    >
                                        <div className="w-full max-w-sm bg-black border border-gray-200 rounded-lg shadow  py-5" style={{ width: "450px" }}>
                                            <div className="pb-10">
                                                <h5 className="ml-4 text-xl font-medium text-gray-900 dark:text-white">{project.id}) {project.projectName}</h5>
                                                <div className="flex ml-4 mt-4 gap-4">
                                                    <Link href={project.githubLink} className="items-center p-2 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">Github</Link>
                                                    <Link href={project.deployedLink} className="items-center p-2 font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-10">Deployed</Link>
                                                </div>
                                                <div className='mt-4'>
                                                    {
                                                        project.description.split('.').map(description => {
                                                            return (
                                                                <><p className='text-white ml-4 pr-2'> -{'>'} {description}.</p></>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                    </motion.div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Projects;