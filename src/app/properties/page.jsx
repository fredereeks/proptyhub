import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { IoHomeOutline } from 'react-icons/io5'

import { estate_lit, estate_living_room, estate_lawn, estate_reading_table, estate_couple_carton } from '@/assets/images'
import { features } from '@/data'
import { PropertyCard } from '@/components'


export const metadata = {
    title: 'ProptyHubs :: Properties',
    description: 'A great platform to rent, buy or sell properties without a crazy commission. We make getting financing or buying a new home easy and efficient',
  }

export default function Properties() {
    return (
        <main className="relative">
            <section className="relative py-20 bg-indigo-50 px-4">
                <div className="relative max-w-screen-lg mx-auto w-full grid grid-cols-[1.5fr_.5fr_1fr_1fr] gap-3 grid-flow-dense">
                    <div className="col-span-3 sm:col-span-2 md:col-span-1 py-5 flex flex-col gap-3 justify-center">
                        <h2 className="w-full max-w-lg mx-auto text-2xl sm:text-3xl md:text-4xl font-bold text-slate-700">Find the <span className="text-indigo-600">Best Places</span> Near You.</h2>
                        <p className="text-sm sm:text-base leading-loose text-slate-600">Discover beautiful places to live nearby and comfortably with your family. </p>
                    </div>
                    <div className="col-span-1 sm:col-span-2 grid place-items-center rounded-md overflow-hidden relative h-[180px] sm:h-[200px] md:h-[250px] group">
                        <Image src={estate_lawn} alt="Estate Dining" fill={true} className="left-0 top-0 object-cover" />
                    </div>
                    <div className="grid place-items-center rounded-md overflow-hidden relative h-[160px] sm:h-[200px] md:h-[250px] group">
                        <Image src={estate_living_room} alt="Estate Bathroom" fill={true} className="left-0 top-0 object-cover" />
                    </div>
                    <form className="col-span-4 md:col-span-2 grid grid-cols-2 gap-2 bg-white p-3 sm:p-4 shadow-lg rounded-md overflow-hidden relative group">
                        <h2 className="sm:col-span-2 w-full max-w-lg mx-auto text-base sm:text-xl font-bold text-slate-700">Search your Property.</h2>
                        <select name="type" id="type" className="px-3 py-1 text-sm bg-slate-200 text-slate-600 rounded-md">
                            <option value="null">Property Type</option>
                        </select>
                        <select name="location" id="location" className="px-3 py-1 text-sm bg-slate-200 text-slate-600 rounded-md">
                            <option value="null">Property Location</option>
                        </select>
                        <select name="type" id="type" className="px-3 py-1 text-sm bg-slate-200 text-slate-600 rounded-md">
                            <option value="null">Property Type</option>
                        </select>
                        <select name="location" id="location" className="px-3 py-1 text-sm bg-slate-200 text-slate-600 rounded-md">
                            <option value="null">Property Location</option>
                        </select>
                        <button type="submit" className="rounded-md mt-1 py-1 px-4 w-max bg-slate-700 text-white hover:bg-slate-800 text-sm text-center cursor-pointer flex items-center gap-2">Search Now <FaArrowRight className="text-xs text-inherit" /> </button>
                    </form>
                    <div className="col-span-4 sm:col-span-2 grid place-items-center rounded-md overflow-hidden relative h-[160px] sm:h-[200px] md:h-[250px] group">
                        <Image src={estate_reading_table} alt="Estate Bathroom" fill={true} className="left-0 top-0 object-cover" />
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
