import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function PropertyCard({ id, image, title, price, extras, span }) {
    const colspan = span || 'col-span-1';
    return (
        <Link href={`/properties/${id}`} className={`relative ${colspan} h-[160px] sm:h-[200px] md:h-[300px] rounded-md overflow-hidden group`}>
            <Image src={image[0]} alt={title} fill={true} className="left-0 z-10 top-0 object-cover transition-all duration-500 scale-100 group-hover:scale-150" />
            <div className="absolute right-0 bottom-0 bg-slate-600/80 sm:bg-slate-600/50 p-4 flex flex-col gap-3 z-20 rounded-md text-white">
                <div className="flex flex-col">
                    <h4 className="text-xs md:text-sm text-inherit font-bold">&#8358;{price.toLocaleString()}</h4>
                    <p className="text-[.7rem] text-inherit font-thin">{title}</p>
                </div>
                <div className="pt-2 flex gap-2 justify-between items-center">
                    {
                        Object.entries(extras).map(([key, value], i) => (
                            <div key={i} className="flex items-center text-[.6rem] sm:text-[.7rem] text-white">
                                <p className="text-inherit font-thin">{key[0].toUpperCase()}{key.slice(1)}:</p>
                                <p className="text-inherit font-thin">{value}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Link>
    )
}
