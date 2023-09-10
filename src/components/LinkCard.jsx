"use client"

// import { NextRouter } from 'next/router';
import React, {useEffect, useState} from 'react'
// import { FaCaretDown } from 'react-icons/fa';
import Link from 'next/link'


const LinkCard = ({title, url}) => {
    // const location = window.location;
    const [activeLink, setActiveLink] = useState(false);
    useEffect(() => {
        // location.pathname === url ? setActiveLink(true) : setActiveLink(false);
        return () => {
            setActiveLink(false);
        } 
    },[url]);
    return (<Link href={`${url}`} className={`overflow-hidden relative w-full md:w-max before:transiton-all before:md:duration-300 before:md:absolute before:md:bottom-0 before:md:-left-full before:md:h-[2px] before:md:-rounded[2rem] before:md:bg-pri before:md:w-0 before:md:-translate-x-1/2 hover:md:before:w-[30%] hover:md:before:left-1/2 text-slate-600 ${activeLink ? 'bg-pri text-white' : 'border-b-white'} bg-white py-2 px-5 md:px-4 hover:text-pri text-sm`}>{title}</Link>)
}

export default LinkCard