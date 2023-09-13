import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { IoCalendarNumberOutline, IoChatbubbleOutline, IoHomeOutline } from 'react-icons/io5'

import { estate_lit, estate_living_room, estate_lawn, estate_keys, estate_couple_carton } from '@/assets/images'
import { features } from '@/data'
import { PropertyCard } from '@/components'


export const metadata = {
    title: 'ProptyHubs :: News',
    description: 'A great platform to rent, buy or sell properties without a crazy commission. We make getting financing or buying a new home easy and efficient',
  }

export default function News() {
    return (
        <main className="relative">
            <section className="relative py-20 bg-indigo-50 px-4">
                <div className="relative max-w-screen-lg mx-auto w-full flex flex-col gap-3">
                    <div className="col-span-3 sm:col-span-2 md:col-span-1 py-5 flex flex-col gap-3 justify-center">
                        <h2 className="w-full max-w-lg mx-auto text-2xl sm:text-3xl md:text-4xl font-bold text-slate-700">Important and <span className="text-indigo-600">Informative Articles</span> for our Clients.</h2>
                        <p className="text-sm sm:text-base leading-loose text-slate-600">Discover from our blogs latest updates, properties and trending news in the real estate terrain. </p>
                    </div>
                    <div className="py-5 grid gap-3 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] sm:grid-cols-3">
                        <aside className="rounded-md overflow-hidden flex flex-col gap-2 bg-white shadow-sm hover:shadow-lg">
                            <div className="relative w-full h-[150px] sm:h-[200px] md:h-[250px] overflow-hidden">
                                <Image src={estate_keys} alt="User Image" fill={true} className="object-cover left-0 top-0" />
                            </div>
                            <div className="flex flex-col p-2 gap-1">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-1">
                                        <IoCalendarNumberOutline className='text-xs text-indigo-500' />
                                        <p className="text-xs text-slate-500">25th June, 2022</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <IoChatbubbleOutline className='text-xs text-indigo-500' />
                                        <p className="text-xs text-slate-500">25 Comments</p>
                                    </div>
                                </div>
                                <h4 className="text-slate-700 font-semibold truncate line-clamp-2 text-lg sm:text-xl">Maintama Ranks as the most Competitive Neighbourhood</h4>
                                <p className="text-slate-500 font-semibold truncate line-clamp-3 text-sm">Being the best entailes that the educational standard of Maintama saw an exponential rise in patronage, edging out that of Asokoro and Wuse II who are the closest competitors in the past couple weeks as directed by the board of education</p>
                            </div>
                        </aside>
                        <aside className="rounded-md overflow-hidden flex flex-col gap-2 bg-white shadow-sm hover:shadow-lg">
                            <div className="relative w-full h-[150px] sm:h-[200px] md:h-[250px] overflow-hidden">
                                <Image src={estate_living_room} alt="User Image" fill={true} className="object-cover left-0 top-0" />
                            </div>
                            <div className="flex flex-col p-2 gap-1">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-1">
                                        <IoCalendarNumberOutline className='text-xs text-indigo-500' />
                                        <p className="text-xs text-slate-500">25th June, 2022</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <IoChatbubbleOutline className='text-xs text-indigo-500' />
                                        <p className="text-xs text-slate-500">25 Comments</p>
                                    </div>
                                </div>
                                <h4 className="text-slate-700 font-semibold truncate line-clamp-2 text-lg sm:text-xl">Maintama Ranks as the most Competitive Neighbourhood</h4>
                                <p className="text-slate-500 font-semibold truncate line-clamp-3 text-sm">Being the best entailes that the educational standard of Maintama saw an exponential rise in patronage, edging out that of Asokoro and Wuse II who are the closest competitors in the past couple weeks as directed by the board of education</p>
                            </div>
                        </aside>
                        <aside className="rounded-md overflow-hidden flex flex-col gap-2 bg-white shadow-sm hover:shadow-lg">
                            <div className="relative w-full h-[150px] sm:h-[200px] md:h-[250px] overflow-hidden">
                                <Image src={estate_lawn} alt="User Image" fill={true} className="object-cover left-0 top-0" />
                            </div>
                            <div className="flex flex-col p-2 gap-1">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-1">
                                        <IoCalendarNumberOutline className='text-xs text-indigo-500' />
                                        <p className="text-xs text-slate-500">25th June, 2022</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <IoChatbubbleOutline className='text-xs text-indigo-500' />
                                        <p className="text-xs text-slate-500">25 Comments</p>
                                    </div>
                                </div>
                                <h4 className="text-slate-700 font-semibold truncate line-clamp-2 text-lg sm:text-xl">Maintama Ranks as the most Competitive Neighbourhood</h4>
                                <p className="text-slate-500 font-semibold truncate line-clamp-3 text-sm">Being the best entailes that the educational standard of Maintama saw an exponential rise in patronage, edging out that of Asokoro and Wuse II who are the closest competitors in the past couple weeks as directed by the board of education</p>
                            </div>
                        </aside>
                    </div>
                    
                </div>
            </section>
            <section className="bg-gray-50 px-4">
                <div className="max-w-screen-lg relative mx-auto py-20 flex flex-col gap-4 overflow-hidden">
                    <div className="flex flex-col gap-2 max-w-lg mx-auto text-left sm:text-center">
                        <h2 className="w-full max-w-md text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-700">Our List of Properties</h2>
                        <p className="text-sm pr-2 sm:pr-0 leading-loose text-slate-500 text-justify">We have awesome properties you just cannot afford to miss!</p>
                    </div>
                    {/* <div className="col-span-1 md:col-span-3 pt-6 pb-4 grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}> */}
                    <div className="grid-cols-2 sm:grid-cols-3 pt-6 pb-4 grid gap-3">
                        {
                            features.map((feature, i) => (<PropertyCard key={feature.id} {...feature} />))
                        }
                    </div>
                </div>
            </section>
            <section className="landlord-tenant bg-white py-20 px-5">
                <div className="max-w-screen-lg mx-auto grid sm:grid-cols-2 auto-rows-auto items-center">
                    <div className="relative rounded-md overflow-hidden h-[200px] sm:h-[350px]">
                        <Image src={estate_couple_carton} alt="User Image" fill={true} className="object-cover left-0 top-0" />
                    </div>
                    <div className="max-w-md mx-auto w-full flex flex-col gap-3 justify-center py-5 sm:py-10 md:py-20 px-5">
                        <div className="py-5 justify-center flex flex-col gap-3">
                            <h2 className="w-full max-w-md text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-800">Single Property House.</h2>
                            <p className="text-sm leading-loose text-slate-500 text-justify">Proptyhub is trusted by thousands of happy people and companies. Our goal is to provide the best properties at affordable prices. We are business to bring your dream home to you and your family sooner and cheaper.</p>
                            <div className="flex flex-col gap-3 max-w-md w-full">
                                <div className="flex gap-5 items-center">
                                    <p className="text-sm sm:text-base leading-loose text-slate-600 text-justify font-semibold">Price:</p>
                                    <p className="text-sm sm:text-base leading-loose text-indigo-600 text-justify font-bold">&#8358;30,000,000</p>

                                </div>
                            </div>
                            <Link href="/auth/login" className="rounded-md py-2 px-5 w-max bg-indigo-600 text-white border border-transparent hover:border-indigo-600 hover:bg-white hover:text-indigo-600 text-sm text-center flex-1 cursor-pointer flex items-center gap-2 mt-2"><IoHomeOutline className="text-xs text-inherit" /> Buy Property</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
