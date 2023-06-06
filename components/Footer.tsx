'use client'
import React from 'react';
import Link from 'next/link';
import { InstagramSVG } from '@/svg-components/InstagramSVG';
import GithubSVG from '@/svg-components/GithubSVG';
import FacebookSVG from '@/svg-components/FacebookSVG';
import LinkedinSVG from '@/svg-components/LinkedinSVG';

const Footer = () => {
    return (
        <footer className="shadow dark:bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between gap-10 px-10">
                    <div className='flex-col items-center'>
                        <Link href="/" className="flex items-center justify-center mb-4 sm:mb-0 gap-3">
                            <img src="/large.png" className='rounded-full w-16 md:w-20' />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Nash-Dev</span>
                        </Link>
                    </div>
                    <div className='md:h-20 md:border-l-2 md:border-gray-300'></div>
                    <span className="max-w-72 my-6 block text-sm text-gray-500 text-center dark:text-gray-400">© 2023 <Link href="/" className="hover:underline">Nash-Dev</Link>. All Rights Reserved.</span>
                    <div className='md:h-20 md:border-l-2 md:border-gray-300'></div>
                    <div className='flex items-center justify-center gap-10'>
                        {/* Instagram */}
                        <InstagramSVG />

                        {/* Github */}
                        <GithubSVG />

                        {/* Facebook */}
                        <FacebookSVG />

                        {/* Linkdin */}
                        <LinkedinSVG />
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer