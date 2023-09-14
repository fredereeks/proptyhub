"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'


import { estate_keys, estate_sky } from '@/assets/images'
import { TextInput } from '@/components'
import { IoHomeOutline, IoPersonOutline } from 'react-icons/io5'

export default function Login() {
    const [showAgentForm, setShowAgentForm] = useState(false)


    return (
        <main className="relative">
            <section className="landlord-tenant bg-white py-20 px-5">
                <div className="max-w-screen-lg mx-auto grid sm:grid-cols-2 auto-rows-auto items-center">
                    <div className="relative rounded-md overflow-hidden h-[300px] sm:h-[450px]">
                        <Image src={showAgentForm ? estate_keys : estate_sky} alt="User Image" fill={true} className="object-cover left-0 top-0" />
                    </div>
                    <div className="max-w-md mx-auto w-full flex flex-col gap-3 justify-center py-5 sm:py-10 md:py-20 px-5">
                        <div className="max-w-sm mx-auto w-full flex gap-2 border border-slate-200 px-[.35rem] py-[.3rem] rounded-md bg-gray-50 relative">
                            <button onClick={() => setShowAgentForm(() => true)} className={`grid place-items-center py-2 px-4  hover:bg-white hover:text-indigo-600 border border-transparent ${showAgentForm ? 'text-indigo-600 border-indigo-500 bg-white' : 'text-slate-600'} text-xs sm:text-sm text-center flex-1 rounded-md`}>Login as a Member</button>
                            <button onClick={() => setShowAgentForm(() => false)} className={`grid place-items-center py-2 px-4 hover:bg-white hover:text-indigo-600 border border-transparent ${!showAgentForm ? 'text-indigo-600 border-indigo-500 bg-white' : 'text-slate-600'} text-xs sm:text-sm text-center flex-1 rounded-md`}>Login as Agent</button>
                        </div>
                        {
                            showAgentForm ?

                                <form className="py-5 flex flex-col gap-3">
                                    <div className="flex flex-col pb-2">
                                        <h2 className="w-full max-w-sm text-xl sm:text-2xl font-semibold text-slate-800">Welcome back, Esteemed Member.</h2>
                                        <p className="text-sm leading-loose text-slate-500 text-justify">We are the &quot;trusted hand&quot; you have always desire. </p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <TextInput type={'text'} id={'member-username'} name={'username'} placeholder={'Username/Email'} required={true} key={'2348722'} />
                                        <TextInput type={'password'} id={'member-password'} name={'password'} placeholder={'*******'} required={true} key={'2348723'} />
                                    </div>
                                    <button type="submit" className="rounded-md  py-2 px-5 w-max bg-indigo-600 text-white hover:bg-indigo-800 text-sm text-center flex-1 cursor-pointer flex items-center gap-2 mt-2"><IoPersonOutline className="text-sm text-inherit" /> Login </button>
                                </form>
                                :
                                <form className="py-5 flex flex-col gap-3">
                                    <div className="flex flex-col pb-2">
                                        <h2 className="w-full max-w-sm text-xl sm:text-2xl font-semibold text-slate-800">Hello, Agent. Welcome.</h2>
                                        <p className="text-sm leading-loose text-slate-500 text-justify">We trust you come bearing good news. </p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <TextInput type={'text'} id={'agent-username'} name={'username'} placeholder={'Username/Email'} required={true} key={'2348724'} />
                                        <TextInput type={'password'} id={'agent-password'} name={'password'} placeholder={'*******'} required={true} key={'2348725'} />
                                    </div>
                                    <button type="submit" className="rounded-md  py-2 pl-5 pr-6 w-max bg-indigo-600 text-white hover:bg-indigo-800 text-sm text-center flex-1 cursor-pointer flex items-center gap-2 mt-2"><IoHomeOutline className="text-sm text-inherit" /> Login</button>
                                </form>
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}
