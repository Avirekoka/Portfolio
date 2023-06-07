'use client'
import { INavLink } from '@/interface';
import { navLinks } from '@/utils/data';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';


const Navbar = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    const [pathName, setPathName] = useState((window as any).location.pathname);

    const setState = (link: string) => {
        setToggle(false);
        setPathName(link);
    };


    return (
        <nav className="border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center">
                    <div className='flex items-center gap-3'>
                        <Image alt='Navbar' src='/large.png' width={50} height={50} className='rounded-full' />
                        <span className="md:text-2xl self-center font-semibold whitespace-nowrap dark:text-white">Nash-Dev</span>
                    </div>
                </Link>
                <button type="button" className="inline-flex items-center p-2 ml-3  md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 rounded" onClick={() => setToggle((prevToggle) => !prevToggle)}>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div className={`${toggle ? 'visible' : 'hidden'} w-full md:block md:w-auto`} id="navbar-dropdown">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                        {
                            navLinks.map((navLink: INavLink) => {
                                return (
                                    <>
                                        <li key={navLink.id}>
                                            <Link href={navLink.link} className={`block py-2 pl-3 pr-4 text-red my-1 rounded ${navLink.link === pathName ? 'bg-blue-500' : 'bg-white'}`} aria-current="page" onClick={() => setState(navLink.link)}>{navLink.title}</Link>
                                        </li>
                                    </>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Navbar;