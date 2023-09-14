import Link from 'next/link'
// import { FaArrowRight } from 'react-icons/fa'

import { estate_home3, estate_home5, estate_couple_carton } from '@/assets/images'
import { features } from '@/data'
import { NewsCard, PropertyCard } from '@/components'


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
                        <p className="text-sm sm:text-base leading-loose text-slate-600">Discover from our blogs, the latest updates, properties and trending news in the real estate terrain. </p>
                    </div>
                    <div className="py-5 grid gap-3 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] sm:grid-cols-3">
                        {
                            [
                                { id: 1230, image: estate_couple_carton, createdAt: "3rd March, 2022", comments: 19, link: "The Newest Piece of Landed Properties Agents dont want you to know about", title: "The Newest Piece of Landed Properties Agents dont want you to know about", text: "ntailes that the educational standard of Maintama saw an exponential rise in patronage, edging out that of Asokoro and Wuse II who are the closest competitors in the past couple weeks as directed by the board of education" },
                                { id: 1231, image: estate_home5, createdAt: "24th July, 2023", comments: 44, link: "Lekki and Magodo becomes the hottest properties in the West", title: "Lekki and Magodo becomes the hottest properties in the West", text: "Being the best entailes that the educational standard of Maintama saw an exponential rise in patronage, edging out that of Asokoro and Wuse II who are the closest competitors in the past couple weeks as directed by the board of education" },
                                { id: 1232, image: estate_home3, createdAt: "1st September, 2023", comments: 62, link: "Maintama Ranks as the most Competitive Neighbourhood", title: "Maintama Ranks as the most Competitive Neighbourhood", text: "Being the best entailes that the educational standard of Maintama saw an exponential rise in patronage, edging out that of Asokoro and Wuse II who are the closest competitors in the past couple weeks as directed by the board of education" },
                            ].map(news => (
                                <NewsCard key={news.id} {...news} />
                            ))
                        }
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
                            features.slice(3,6).map((feature, i) => (<PropertyCard key={feature.id} {...feature} />))
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}
