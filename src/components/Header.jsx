"use client"

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import React from 'react'
import { headerLinks } from '@/data';
import { LinkCard } from '.';
import { FaCaretRight, FaChevronRight } from 'react-icons/fa';

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

    return (
        <section ref={headerRef} className={`bg-white flex flex-col py-2 px-5 w-full top-0 left-0 z-[999] ${fixed ? 'fixed' : 'relative'}`}>
            <div className={`w-full max-w-screen-lg mx-auto relative flex justify-center items-center gap-2`}>
                <Link href="/" className="w-max"><h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-700">Propty<span className="text-indigo-600">Hub</span>.</h2></Link>
                <nav ref={navRef} style={{ left: '0 !important' }} className={`absolute md:relative flex-1 shadow-md transition-all duration-300 ${navShow ? 'left-0 top-full z-50' : 'left-[110%] md:left-0 z-0 top-full'} md:top-0 w-screen md:w-max md:shadow-none bg-white -mx-2 md:mx-0`}>
                    <ul className="list-none flex flex-col md:flex-row md:justify-center gap-0">
                        {
                            headerLinks.map((link) => <LinkCard key={link.id} {...link} />)
                        }
                        {/* <Link href="/auth/login" className="relative flex gap-2 items-center self-center rounded-sm w-full md:w-max md:ml-5 px-4 pt-1 pb-2 h-max bg-indigo-600 text-white text-sm">Login/Register <FaCaretRight className='text-slate-50 mt-1 rotate-0 text-sm font-extralight' /></Link> */}
                    </ul>

                </nav>
                        <Link href="/auth/login" className="rounded-md py-2 px-5 w-max bg-indigo-600 text-white border border-transparent hover:border-indigo-600 hover:bg-white hover:text-indigo-600 text-sm text-center md:ml-auto cursor-pointer flex items-center gap-2 mt-2">See More <FaChevronRight className="text-xs text-inherit" /></Link>
                <div className="flex items-center gap-2 w-[78px] mx-3">
                    {/* <div className="w-[50px] rounded-md cursor-pointer overflow-hidden hover:border-pri bg-transparent border-[1px] border-zinc-200"> */}
                    {/* <div className="relative flex-shrink-0 w-[35px] h-[35px] rounded-md cursor-pointer overflow-hidden hover:border-pri bg-transparent border-[1px] border-zinc-200 group">
                        <div className="opacity-0" id="google_translate_element"></div>
                        <div className="absolute bg-white p-1 text-xs text-slate-700 left-0 top-0 h-full w-full grid place-items-center group-hover:hidden">Lang</div>
                    </div> */}
                    <div className="relative flex-shrink-0 py-2 px-1 cursor-pointer rounded-sm w-[35px] h-[35px] flex md:hidden items-center" onClick={() => setNavShow(prev => !prev)}>
                        <div className={`relative h-[2px] w-full ${navShow ? 'bg-white' : 'bg-slate-500 rounded-lg'} ${navShow ? 'before:rotate-[45deg] before:-translate-y-[400%]' : 'before:rotate-0 before:-translate-y-[400%]'} before:transition-all before:duration-300 before:origin-top-left before:h-full before:w-full before:left-0 before:bg-slate-500 rounded-lg before:absolute before:z-10 ${navShow ? 'after:rotate-[-45deg] after:translate-y-[400%]' : 'after:rotate-0 after:translate-y-[400%]'} after:transition-all after:duration-300 after:origin-bottom-left after:h-full after:w-full after:right-0  after:bg-slate-500 rounded-lg after:absolute after:z-10`}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
