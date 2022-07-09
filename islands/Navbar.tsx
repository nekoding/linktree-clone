/** @jsx h */
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { tw } from "@twind";

export default function Navbar() {

    const [scrollPosition, setScrollPosition] = useState(0);

    const updateScrollPosition = () => {
        setScrollPosition(window.scrollY)
    }

    const openModal = () => {
        self.dispatchEvent(new Event('openModal'));
    }

    useEffect(() => {
        self.addEventListener('scroll', updateScrollPosition);
    }, [scrollPosition])

    return (
        <nav class={tw`sticky top-0 max-w-md mx-auto`}>
            <button type="button" class={tw`absolute bg-white p-2 rounded-full flex justify-center items-center right-0 top-0 ${scrollPosition > 30 ? 'opacity-0 hidden' : 'opacity-100'} transition ease-in-out delay-150`} onClick={openModal}>
                <svg xmlns="http://www.w3.org/2000/svg" class={tw`w-4 h-4`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
            </button>

            <div class={tw`flex justify-between items-center absolute rounded-full p-2 w-full ${scrollPosition > 40 ? 'opacity-1 translate-y-2' : 'opacity-0 translate-y-0'} transition transform ease-in-out delay-150`} style="background-color: rgba(255, 255, 255, 0.5); backdrop-filter: blur(10px);">
                <img src="https://media-exp2.licdn.com/dms/image/C5603AQFIN_45pjqB6w/profile-displayphoto-shrink_100_100/0/1599700365283?e=1662595200&v=beta&t=3SR-tCSfysCFMt0aT9izS10axlTRsI5rxb6SlDTzs70" alt="" class={tw`inline-block h-10 w-10 rounded-full`} />
                <span class={tw`block text-lg whitespace-nowrap`}>Enggar Tivandi</span>
                <button type="button" class={tw`text-white bg-black p-2 rounded-full`} onClick={openModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" class={tw`w-4 h-4 text-white`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                </button>
            </div>
        </nav>
    )
}
