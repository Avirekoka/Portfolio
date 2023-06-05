'use client'
import { navLinks } from '@/utils/data';
import Link from 'next/link';
import React from 'react';


const Navbar = () => {
    return (
        <nav className='w-full flex items-center justify-between h-20 px-10 gap-5 bg-slate-900'>
            <Link href="/">
                <div className='flex items-center gap-3'>
                    <img src='/large.png' width={50} height={50} className='rounded-full' />
                    <span className='font-bold text-2xl text-white'>Nash-Dev</span>
                </div>
            </Link>
            <div className='flex items-center justify-evenly gap-3'>
                {
                    navLinks.map(link => {
                        return (
                            <div key={link.id}>
                                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                    <Link href={link.link}>{link.title}</Link>
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </nav>
    )
}

export default Navbar;