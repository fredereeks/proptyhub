"use client"

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import React from 'react'
import { headerLinks } from '@/data';
import { LinkCard } from '.';
import { FaCaretRight, FaChevronRight } from 'react-icons/fa';
import { IoLogInOutline } from 'react-icons/io5';

export default function Header() {
    const [navShow, setNavShow] = useState(false);
    // const [searchShow, setSearchShow] = useState(false);
    const [fixed, setFixed] = useState(false);
    const headerRef = useRef(null);
    const navRef = useRef(null);

    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY > 60) {
                setFixed(true)
            }
            else {
                setFixed(false)
            }
        }
        return () => {
            setFixed(false);
            window.scrollTo(0, 0)
            setNavShow(false);
        }
    }, [])

    const toggleDropdown = () => {
        console.log("Workds")
    }
    // console.log({navShow, fixed})

    return (
        <header ref={headerRef} className={`bg-white relative flex flex-col py-2 md:px-4 w-full top-0 left-0 z-[999] ${fixed ? 'fixed shadow-md' : ''}`}>
            <div className={`w-full max-w-screen-lg mx-auto relative px-4 md:px-0 flex justify-between items-center gap-2`}>
                <Link href="/" className="w-max"><h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-700">Propty<span className="text-indigo-600">Hub</span>.</h2></Link>
                <nav style={{left: 0}} ref={navRef} className={`absolute left-0 md:relative flex-1 flex flex-col md:flex-row md:items-center shadow-md transition-all duration-300 ${navShow ? 'max-h-[1000%]' : 'max-h-0 md:max-h-[1000%]'} md:top-0 w-screen md:w-max md:shadow-none bg-white md:mx-0`}>
                    <ul className="list-none flex-1 flex flex-col md:flex-row md:justify-center md:items-center gap-0">
                        {
                            headerLinks.map((link) => <LinkCard key={link.id} {...link} />)
                        }
                    </ul>
                    <Link href="/auth/login" className="md:rounded-md py-2 px-5 w-full md:w-max bg-indigo-600 text-white border border-transparent hover:border-indigo-600 hover:bg-white hover:text-indigo-600 text-sm text-center cursor-pointer flex items-center gap-2 self-end"><IoLogInOutline className="text-inherit" /> Login</Link>

                </nav>
                <div className="flex items-center gap-2 w-[35px]">
                    <div className="relative flex-shrink-0 py-2 px-1 cursor-pointer rounded-sm w-[35px] h-[35px] flex md:hidden items-center" onClick={() => setNavShow(prev => !prev)}>
                        <div className={`relative h-[2px] w-full ${navShow ? 'bg-white' : 'bg-slate-500 rounded-lg'} ${navShow ? 'before:rotate-[40deg] before:-translate-y-[400%]' : 'before:rotate-0 before:-translate-y-[400%]'} before:transition-all before:duration-300 before:origin-top-left before:h-full before:w-full before:left-0 before:bg-slate-500 rounded-lg before:absolute before:z-10 ${navShow ? 'after:rotate-[-40deg] after:translate-y-[400%]' : 'after:rotate-0 after:translate-y-[400%]'} after:transition-all after:duration-300 after:origin-bottom-left after:h-full after:w-full after:right-0  after:bg-slate-500 rounded-lg after:absolute after:z-10`}></div>
                    </div>
                </div>
            </div>
        </header>
    )
}
