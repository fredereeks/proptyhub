import nodeMailer from 'nodemailer'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import { IoDocumentsSharp } from 'react-icons/io5'


import { contacts } from '@/data'
import { estate_reading_table } from '@/assets/images'
import { TextInput, TextArea } from '@/components'


export const metadata = {
    title: 'ProptyHubs :: Contact',
    description: 'A great platform to rent, buy or sell properties without a crazy commission. We make getting financing or buying a new home easy and efficient',
}

const response = (text = "") => {
    return text;
}

async function sendMessage(data) {
    "use server"
    try {
        const firstname = data.get("firstname")
        const lastname = data.get("lastname")
        const phone = data.get("phone")
        const email = data.get("email")
        // const photo = data.get("photo")
        const message = data.get("message")
        // console.log({firstname,lastname,phone,email,photo,message})

        const html = `
            <section className="flex flex-col">
                <h2 className="text-slate-700 text-center">New Message!</h2>
                <div className="flex gap-1">
                    <div className="h-10 w-10 rounded-full bg-indigo-600 flex-shrink-0"></div>
                    <div className="flex flex-col flex-1">
                        <h4 className="font-bold text-slate-600 text-lg">${firstname} ${lastname}</h4>
                        <p className="text-xs text-slate-500">Email: ${email} | Phone: ${phone}</p>
                    </div>
                    <div className="text-sm text-slate-700 text-justify">${message}</div>
                </div>
            </section>
        `;
        const transport = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'brunomany1@gmail.com',
                pass: 'ajxggaomajuiauxi'
            }
        })

        const info = await transport.sendMail({
            from: `Proptyhubs.com <brunomany1@gmail.com>`,
            to: 'Proptyhubs Admin <julius7007@hotmail.com>',
            bcc: 'Uncle Jones <adedejifrederickr@gmail.com>',
            replyTo: email,
            subject: 'New Email from ProptyHub',
            html
        })

        console.log(`Message sent: ${info.messageId}`)
        redirect("/")

    } catch (error) {
        console.log({ error })
    }
}

export default function Contact() {

    return (
        <main className="relative">
            <section className="contact bg-white py-20 px-5">
                <div className="max-w-screen-lg w-full mx-auto flex justify-center">
                    <div className="relative border border-slate-500 flex flex-col justify-center gap-6 sm:gap-8 md:gap-10 mx-auto w-[22rem] sm:w-[32rem] md:w-full">
                        <h2 className="text-slate-800 text-center mx-auto text-xl sm:text-2xl font-semibold max-w-lg">We have a <span className="text-indigo-500">Supportive Team </span> always on Standby!</h2>
                        <p className="text-slate-500 text-center mx-auto text-sm md:text-base leading-loose max-w-lg">Whether you are a landlord, tenant, agent or just a visitor, our support team are ready to always to serve</p>
                        <div className="grid grid-cols-2 gap-2 sm:gap-5 justify-center">
                            {
                                contacts.map(contact => (
                                    <aside key={contact.id} className="flex gap-2 sm:gap-3 items-start mx-auto">
                                        <span>{contact.icon}</span>
                                        <div className="flex flex-col gap-3">
                                            <h5 className="text-slate-700 text-md sm:text-lg font-medium">{contact.title}</h5>
                                            <p className="text-slate-500 text-xs sm:text-sm">{contact.text}</p>
                                        </div>
                                    </aside>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-lg mx-auto grid sm:grid-cols-2 py-10 auto-rows-auto items-center">
                    <div className="relative rounded-md overflow-hidden h-[300px] sm:h-full">
                        <Image src={estate_reading_table} alt="Estate Reading Table" fill={true} className="object-cover left-0 top-0" />
                    </div>
                    <div className="max-w-md mx-auto w-full flex flex-col gap-3 justify-center py-5 sm:py-10 md:py-20 px-5">
                        <form action={sendMessage} className="py-5 flex flex-col gap-3">
                            <div className="flex flex-col pb-2">
                                <h2 className="w-full max-w-sm text-xl sm:text-2xl font-semibold text-indigo-600">Feel Free to Contact Us.</h2>
                                <p className="text-sm leading-loose text-slate-500 text-justify">We are attentive to your enquiries, we respond to al messages.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <TextInput type={'text'} id={'lastname'} name={'firstname'} placeholder={'John'} required={true} key={'2348720'} />
                                <TextInput type={'text'} id={'lastname'} name={'lastname'} placeholder={'Doe'} required={true} key={'2348721'} />
                                <TextInput type={'email'} id={'email'} name={'email'} placeholder={'johndoe@gmail.com'} required={true} key={'2348722'} />
                                <TextInput type={'text'} id={'phone'} name={'phone'} placeholder={'+234908724741'} required={false} key={'2348723'} />
                                <TextArea type={'text'} id={'message'} name={'message'} placeholder={'Please, enter your message here...'} required={true} key={'2348724'} />
                            </div>
                            <button type="submit" className="rounded-md  py-2 px-5 w-max bg-indigo-600 text-white hover:bg-indigo-800 text-sm text-center flex-1 cursor-pointer flex items-center gap-2 mt-2"><IoDocumentsSharp className="text-sm text-inherit" /> Send Message </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}
