import {IoPhoneLandscapeOutline, IoChatbubbleEllipsesOutline, IoMailUnreadOutline, IoGlobeOutline} from 'react-icons/io5'
export const contacts = [
    {
        id: 72341,
        title: "Call Us",
        text: <a href="tel:+2348029190257" className="text-slate-500 text-xs sm:text-sm">(+234) 8029190257</a>,
        icon: <IoPhoneLandscapeOutline className="text-indigo-500 mt-1 text-lg sm:text-xl"/>,
    },
    {
        id: 72342,
        title: "Chat Us",
        text: <a href="tel:+2348816075406" className="text-slate-500 text-xs sm:text-sm">(+234) 8816075406</a>,
        icon: <IoChatbubbleEllipsesOutline className="text-indigo-500 mt-1 text-lg sm:text-xl"/>,
    },
    {
        id: 72343,
        title: "Email Us",
        text: <a href="mailto:info@proptyhubs.com" className="text-slate-500 text-xs sm:text-sm">info@proptyhub.com</a>,
        icon: <IoMailUnreadOutline className="text-indigo-500 mt-1 text-lg sm:text-xl"/>,
    },
    {
        id: 72344,
        title: "Social Media",
        text: <a href="https://www.instagram.com/proptyhubs" target="_blank" rel="noopener noreferrer" className="text-slate-500 text-xs sm:text-sm">instagram.com/proptyhubs</a>,
        icon: <IoGlobeOutline className="text-indigo-500 mt-1 text-lg sm:text-xl"/>,
    },
]