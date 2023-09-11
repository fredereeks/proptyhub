import Image from 'next/image'
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'

import { estate_lit, estate_dining, estate_eating_table } from '@/assets/images'
import { features } from '@/data'
import { PropertyCard } from '@/components'

export default function Home() {
    return (
        <main className="relative">
            <section className="relative bg-white py-20 px-4 after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[#0003]">
                <Image src={estate_dining} alt="ProptyHub Hero" fill={true} className="left-0 top-0 object-cover" />
                <div className="relative max-w-screen-lg mx-auto w-full py-20 flex flex-col gap-10 z-10">
                    <div className="py-5 flex flex-col gap-3 text-center">
                        <h2 className="w-full max-w-lg mx-auto text-2xl sm:text-3xl md:text-4xl font-semibold text-white">The Best Place to Find your Home for Safe Living.</h2>
                        <p className="text-sm sm:text-base leading-loose text-white">We are here to help you find, sell or rent your home faster, cheaper and sooner. </p>
                        <div className="flex justify-center items-center gap-3 mx-auto w-full max-w-sm py-5">
                            <Link href="/homes" className="max-w-[10rem] sm:max-w-[15rem] rounded-md py-3 px-2 sm:p-4 hover:bg-slate-600 hover:text-white border border-slate-600 bg-slate-50/50 text-slate-600 text-sm sm:text-base text-center flex-1 cursor-pointer flex justify-center items-center gap-1 sm:gap-2 font-bold">Get Started <FaChevronRight className="text-xs text-inherit" /></Link>
                            <Link href="/homes" className="max-w-[10rem] sm:max-w-[15rem] rounded-md py-3 px-2 sm:p-4 bg-slate-600 text-white border border-transparent hover:border-slate-600 hover:bg-white hover:text-slate-600 text-sm sm:text-base text-center flex-1 cursor-pointer flex justify-center items-center gap-1 sm:gap-2 font-bold">Submit Property <FaChevronRight className="text-xs text-inherit" /></Link>
                        </div>
                    </div>

                </div>
            </section>
            <section className="bg-gray-100 py-20 px-4">
                <div className="max-w-screen-lg relative mx-auto flex flex-col gap-4">
                    <div className="flex flex-col gap-2 max-w-lg mx-auto text-left sm:text-center">
                        <h2 className="w-full max-w-md text-2xl sm:text-3xl md:text-4xl font-semibold text-indigo-600">Our Featured Properties</h2>
                        <p className="text-sm pr-2 sm:pr-0 leading-loose text-slate-500 text-justify">We have awesome properties you just cannot afford to miss!</p>
                    </div>
                    {/* <div className="col-span-1 md:col-span-3 pt-6 pb-4 grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}> */}
                    <div className="grid-cols-2 sm:grid-cols-3 pt-6 pb-4 grid gap-3 grid-flow-dense">
                        {
                            features.map((feature, i) => (<PropertyCard key={feature.key} {...feature} span={i === 0 || i === 3 ? 'col-span-2' : 'col-span-1'} />))
                        }
                    </div>
                </div>
            </section>
            <section className="landlord-tenant bg-white py-20 px-5">
                <div className="max-w-screen-lg mx-auto grid sm:grid-cols-2 auto-rows-auto items-center">
                    <div className="relative rounded-md overflow-hidden h-[300px] sm:h-[450px]">
                        <Image src={estate_eating_table} alt="User Image" fill={true} className="object-cover left-0 top-0" />
                    </div>
                    <div className="max-w-md mx-auto w-full flex flex-col gap-3 justify-center py-5 sm:py-10 md:py-20 px-5">
                        <div className="max-w-xs w-full flex gap-2 border border-slate-200 px-[.35rem] py-[.3rem] rounded-md bg-slate-50 relative">
                            <Link href="/tenants" className="border border-slate-200 grid place-items-center py-2 px-4 text-indigo-600 bg-white text-sm text-center flex-1 rounded-md">For tenants</Link>
                            <Link href="/landlords" className="grid place-items-center py-2 px-4 text-slate-600 hover:bg-white hover:text-indigo-600 border border-transparent hover:border-slate-200 text-sm text-center flex-1 rounded-md">For Landlords</Link>
                        </div>
                        <div className="py-5 flex flex-col gap-3">
                            <h2 className="w-full max-w-md text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-800">We make it easy for tenants and landlords.</h2>
                            <p className="text-sm leading-loose text-slate-500 text-justify">Whether its selling your current home, getting financing or buying a new home, we make it easy and efficient. The best part? you get to save money from our services. </p>
                            <Link href="/auth/login" className="rounded-md  py-2 px-5 w-max bg-indigo-600 text-white border border-transparent hover:border-indigo-600 hover:bg-white hover:text-indigo-600 text-sm text-center flex-1 cursor-pointer flex items-center gap-2 mt-2">See More <FaChevronRight className="text-xs text-inherit" /></Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
