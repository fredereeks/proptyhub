import Image from 'next/image'
import Link from 'next/link'
import { FaChevronLeft, FaShareAlt } from 'react-icons/fa'
import { IoHomeOutline, IoBedOutline, IoCheckmarkCircleOutline, IoBrushOutline, IoSquareOutline, IoHeartOutline, IoSearchOutline } from 'react-icons/io5'

import { estate_lit, estate_living_room, estate_bathroom, estate_eating_table } from '@/assets/images'
import { features } from '@/data'
import { PropertyCard } from '@/components'


export const metadata = {
    title: 'ProptyHubs :: SingleProperty',
    description: 'A great platform to rent, buy or sell properties without a crazy commission. We make getting financing or buying a new home easy and efficient',
}

    const getProperty = async(id) => {
        const data =  features.filter(el => el.id.toString() === id)
        return data;
    }

export default async function SingleProperty({params}) {
    const {id} = params;
    const data = await getProperty(id);
    console.log({data});

    return (
        <main className="relative">
            <section className="relative py-10 bg-white px-4">
                <div className="relative max-w-screen-lg mx-auto w-full flex flex-col gap-4">
                    <Link href="/properties" className="rounded-md py-2 w-max text-indigo-600 text-sm text-center flex-1 cursor-pointer flex items-center gap-2 mt-2"><FaChevronLeft className="text-xs text-inherit" /> Back to Properties</Link>
                    <div className="flex flex-col gap-3 md:flex-row md:justify-between">
                        <div className="flex-1 flex flex-col">
                            <h2 className="w-full max-w-md text-2xl sm:text-3xl font-semibold text-slate-700">{data.title}</h2>
                            <p className="text-sm pr-2 sm:pr-0 leading-loose text-slate-500 text-justify">{data.address},{data.city},{data.country}</p>
                        </div>
                        <div className="flex-1 flex items-end justify-end gap-2">
                            <button className="rounded-md py-2 px-4 w-max hover:bg-indigo-200 hover:text-white hover:border-indigo-300 bg-indigo-50 border border-indigo-200 text-indigo-600 text-xs justify-center cursor-pointer flex items-center gap-2"> <FaShareAlt className="text-sm text-inherit" /> Share</button>
                            <button className="rounded-md py-2 px-4 w-max hover:bg-indigo-200 hover:text-white hover:border-indigo-300 bg-indigo-50 border border-indigo-200 text-indigo-600 text-xs justify-center cursor-pointer flex items-center gap-2"> <IoHeartOutline className="text-sm text-inherit" /> Favorite</button>
                            <button className="rounded-md py-2 px-4 w-max hover:bg-indigo-200 hover:text-white hover:border-indigo-300 bg-indigo-50 border border-indigo-200 text-indigo-600 text-xs justify-center cursor-pointer flex items-center gap-2"> <IoSearchOutline className="text-sm text-inherit" /> Other Properties nearby</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                    <div className="relative col-span-2 row-span-2 rounded-md overflow-hidden ">
                        <Image src={data.image[0]} alt="Other Property Thumbs" fill={true} className="rounded-md p-1 border border-transparent hover:border-indigo-200 object-cover left-0 top-0" />
                    </div>
                    <div className="relative rounded-md overflow-hidden h-[100px] sm:h-[200px]">
                        <Image src={data.image[1]} alt="Other Property Thumbs" fill={true} className="rounded-md p-1 border border-transparent hover:border-indigo-200 object-cover left-0 top-0" />
                    </div>
                    <div className="relative rounded-md overflow-hidden h-[100px] sm:h-[200px]">
                        <Image src={data.image[2]} alt="Other Property Thumbs" fill={true} className="rounded-md p-1 border border-transparent hover:border-indigo-200 object-cover left-0 top-0" />
                    </div>
                    </div>
                    {/* <Image src={estate_lit} alt="Estate Dining" fill={true} className="left-0 top-0 object-cover" /> */}

                </div>
            </section>
            <section className="bg-gray-50 px-4">
                <div className="max-w-screen-lg relative mx-auto py-10 flex flex-col gap-4 overflow-hidden">
                    <div className="flex flex-col gap-2 max-w-lg mx-auto text-left sm:text-center">
                        <h2 className="w-full max-w-md text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-700">Our List of Properties</h2>
                        <p className="text-sm pr-2 sm:pr-0 leading-loose text-slate-500 text-justify">We have some other awesome properties you just might be interested in</p>
                    </div>
                    {/* <div className="col-span-1 md:col-span-3 pt-6 pb-4 grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}> */}
                    <div className="grid-cols-2 sm:grid-cols-3 pt-6 pb-4 grid gap-3">
                        {
                            features.filter(el => el.id.toString() !== id).slice(3,7).map((feature, i) => (<PropertyCard key={feature.id} {...feature} />))
                        }
                    </div>
                </div>
            </section>
            <section className="landlord-tenant bg-white py-20 px-5">
                <div className="max-w-screen-lg mx-auto grid sm:grid-cols-2 auto-rows-auto items-center">
                    <div className="relative rounded-md overflow-hidden h-[200px] sm:h-[350px]">
                        <Image src={estate_lit} alt="User Image" fill={true} className="object-cover left-0 top-0" />
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
