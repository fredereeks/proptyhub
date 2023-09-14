import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoCalendarNumberOutline, IoChatbubbleOutline } from 'react-icons/io5'

export default function NewsCard({id, image, title, link, createdAt, comments, text}) {
    return (
        <Link href={`/news/${id}/${link}`} className="rounded-md overflow-hidden flex flex-col gap-2 bg-white shadow-sm hover:shadow-lg">
            <div className="relative w-full h-[150px] sm:h-[200px] overflow-hidden">
                <Image src={image} alt="User Image" fill={true} className="object-cover left-0 top-0" />
            </div>
            <div className="flex flex-col pt-2 pb-4 px-4 gap-1">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                        <IoCalendarNumberOutline className='-mt-1 text-sm text-indigo-500' />
                        <p className="text-[.7rem] text-slate-500">{createdAt}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <IoChatbubbleOutline className='-mt-1 text-sm text-indigo-500' />
                        <p className="text-[.7rem] text-slate-500">{comments} Comments</p>
                    </div>
                </div>
                <h4 className="text-indigo-700 font-semibold truncate whitespace-pre-wrap line-clamp-2 text-justify text-lg sm:text-xl">{title}</h4>
                <p className="text-slate-500 text-justify leading-loose font-light truncate whitespace-pre-wrap line-clamp-3 text-xs">{text}</p>
            </div>
        </Link>
    )
}
