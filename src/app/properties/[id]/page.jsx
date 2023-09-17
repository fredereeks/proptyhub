import Image from 'next/image'
import Link from 'next/link'
import { FaChevronLeft } from 'react-icons/fa'
import { IoHomeOutline, IoBedOutline, IoCheckmarkCircleOutline, IoCafeOutline, IoBuildOutline, IoBriefcaseOutline, IoLibraryOutline, IoConstructOutline, IoKeyOutline, IoWaterOutline, IoTriangleOutline, IoHeartOutline, IoSearchOutline, IoShareOutline } from 'react-icons/io5'

// import { estate_lit, estate_living_room, estate_bathroom, estate_eating_table } from '@/assets/images'
import { features } from '@/data'
import { PropertyCard } from '@/components'


export const metadata = {
    title: 'ProptyHubs :: SingleProperty',
    description: 'A great platform to rent, buy or sell properties without a crazy commission. We make getting financing or buying a new home easy and efficient',
}

const getProperty = async (id) => {
    const data = features.find(el => el.id.toString() === id)
    return data;
}

export default async function SingleProperty({ params }) {
    const { id } = params;
    const data = await getProperty(id);
    const icons = {
        "beds": <IoBedOutline className="text-sm text-inherit" />,
        "baths": <IoWaterOutline className="text-sm text-inherit" />,
        "rooms": <IoKeyOutline className="text-sm text-inherit" />,
        "apartments": <IoHomeOutline className="text-sm text-inherit" />,
        "shops": <IoConstructOutline className="text-sm text-inherit" />,
        "sqft": <IoTriangleOutline className="text-sm text-inherit" />,
        "status": <IoCheckmarkCircleOutline className="text-sm text-inherit" />,
        "stories": <IoBuildOutline className="text-sm text-inherit" />,
    }

    return (
        <main className="relative">
            <section className="relative py-10 bg-white px-4">
                <div className="relative max-w-screen-lg mx-auto w-full flex flex-col gap-4">
                    <Link href="/properties" className="rounded-md py-2 w-max text-indigo-600 text-sm text-center flex-1 cursor-pointer flex items-center gap-2 mt-2"><FaChevronLeft className="text-xs text-inherit" /> Back to Properties</Link>
                    <div className="flex flex-col gap-3 md:flex-row md:justify-between">
                        <div className="flex-1 flex flex-col">
                            <h2 className="w-full max-w-md text-2xl sm:text-3xl font-semibold text-slate-700">{data.title}</h2>
                            <p className="text-sm pr-2 pt-1 sm:pr-0 leading-tight text-slate-500 text-justify">{data.address}, {data.city}, {data.country}.</p>
                        </div>
                        <div className="flex-1 flex items-end md:justify-end gap-2">
                            <button className="rounded-md py-2 px-4 w-max hover:text-indigo-700 hover:border-indigo-500 bg-indigo-50 border border-indigo-200 text-indigo-600 text-[.6rem] sm:text-sm justify-center cursor-pointer flex items-center gap-2"> <IoShareOutline className="text-sm text-inherit" /> Share</button>
                            <button className="rounded-md py-2 px-4 w-max hover:text-indigo-700 hover:border-indigo-500 bg-indigo-50 border border-indigo-200 text-indigo-600 text-[.6rem] sm:text-sm justify-center cursor-pointer flex items-center gap-2"> <IoHeartOutline className="text-sm text-inherit" /> Favorite</button>
                            <button className="rounded-md py-2 px-4 w-max hover:text-indigo-700 hover:border-indigo-500 bg-indigo-50 border border-indigo-200 text-indigo-600 text-[.6rem] sm:text-sm justify-center cursor-pointer flex items-center gap-2"> <IoSearchOutline className="text-sm sm:text-base text-inherit" /> Properties nearby</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                        <div className="relative col-span-2 row-span-2 rounded-md overflow-hidden  border-transparent hover:border-indigo-200 p-2">
                            <Image src={data.image[0]} alt="Other Property Thumbs" fill={true} className="rounded-md object-cover left-0 top-0 relative" />
                        </div>
                        <div className="relative rounded-md overflow-hidden h-[100px] sm:h-[200px] border-transparent hover:border-indigo-200 p-2">
                            <Image src={data.image[1]} alt="Other Property Thumbs" fill={true} className="rounded-md object-cover left-0 top-0 relative" />
                        </div>
                        <div className="relative rounded-md overflow-hidden h-[100px] sm:h-[200px] border-transparent hover:border-indigo-200 p-2">
                            <Image src={data.image[2]} alt="Other Property Thumbs" fill={true} className="rounded-md object-cover left-0 top-0 relative" />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                        <div className="relative col-span-2 rounded-md overflow-hidden flex flex-col gap-2 justify-between pb-2">
                            <div className="rounded-md overflow-hidden flex flex-wrap gap-2 justify-between border border-slate-200 p-2 sm:p-4">
                                {
                                    Object.entries(data.extras).map(([key, value], i) => {
                                        return (
                                            <div key={i} className="flex-1 flex flex-col justify-center gap-1 text-[.6rem] sm:text-[.7rem] text-slate-500">
                                                <p className="text-inherit font-thin">{key[0].toUpperCase()}{key.slice(1)}</p>
                                                <div className="flex gap-1 items-center text-[.6rem] sm:text-[.7rem] text-slate-500">
                                                    {icons[key]}
                                                    <p className="text-xs text-slate-600 font-medium">{value}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <div className="flex-1 flex flex-col gap-1 text-[.6rem] sm:text-[.7rem] text-slate-500">
                                    <p className="text-inherit font-thin">Status</p>
                                    <div className="flex gap-1 items-center text-[.6rem] sm:text-[.7rem] text-slate-500">
                                        {icons['status']}
                                        <p className="text-xs text-slate-600 font-medium">Active</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col py-10 pb-5">
                                <h2 className="w-full max-w-md text-xl sm:text-2xl font-semibold text-slate-700">About this {data?.type[0].toUpperCase()}{data?.type.slice(1)}</h2>
                                <p className="text-sm py-1 leading-loose text-slate-500 text-justify">{data.title} is an exqusite property that would make your goal feel achieved. Should you come through our great platform to rent, buy or sell properties without a crazy commission. We guarantee we will make getting financing or buying a new home easy and efficient for you from now till eternity.</p>
                            </div>
                        </div>
                        <div className="relative col-span-1 rounded-md overflow-hidden flex flex-col gap-2 justify-between border border-slate-200 p-2 sm:p-4">
                            <div className="flex-1 flex flex-col">
                                <p className="text-xs leading-tight text-slate-500 text-justify">Property Price</p>
                                <h2 className="w-full py-2 max-w-md text-base sm:text-lg font-semibold text-slate-700">&#8358;{data?.price.toLocaleString()}</h2>
                                <Link href={`/properties/buy/${id}`} className="rounded-md py-2 px-5 w-max bg-indigo-600 text-white border border-transparent hover:border-indigo-600 hover:bg-white hover:text-indigo-600 text-sm text-center cursor-pointer flex items-center gap-2 mt-2"><IoHomeOutline className="text-xs text-inherit" /> Buy Property</Link>
                            </div>

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
                            features.filter(el => el.id.toString() !== id).slice(3, 9).map((feature, i) => (<PropertyCard key={feature.id} {...feature} />))
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}
