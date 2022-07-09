/** @jsx h */
import { h } from "preact";
import { useState, useEffect } from "preact/hooks"
import { tw } from "@twind";
import ShareLink from '../components/ShareLink.tsx'

export default function Modal() {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        self.addEventListener('openModal', () => {
            setIsOpen(!isOpen)
        })
    }, [])

    const links: {
        name: string,
        url: string,
        icon: string
    }[] = [
            {
                name: 'facebook',
                url: '#',
                icon: '/facebook.svg'
            },
            {
                name: 'whatsapp',
                url: '#',
                icon: '/whatsapp.svg'
            },
            {
                name: 'telegram',
                url: '#',
                icon: '/telegram.svg'
            },
            {
                name: 'instagram',
                url: '#',
                icon: '/instagram.svg'
            },
        ]

    return (
        <div class={tw`relative z-10 ${!isOpen && 'hidden'}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class={tw`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${isOpen ? 'ease-out duration-300 opacity-100' : 'ease-out duration-300 opacity-0'}`}></div>
            <div class={`z-10 inset-0 overflow-y-auto ${isOpen && 'fixed'}`}>
                <div class={tw`flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0 ${isOpen ? ' ease-out duration-300 opacity-100 translate-y-0 sm:scale-100' : 'ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'}`}>
                    <div class={tw`relative bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all`}>
                        <div class={tw`bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4`}>
                            <div class={tw`flex items-center justify-between mb-6`}>
                                <h4 class={tw`font-bold`}>Bagikan</h4>
                                <button class={tw`w-6 h-6 rounded-full`} onClick={() => setIsOpen(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div class={tw`grid grid-cols gap-y-2`}>
                                {links.map(link => {
                                    return <ShareLink name={link.name} icon={link.icon} url={link.url} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
