/** @jsx h */
import { h } from 'preact'
import { tw } from "@twind";

interface ShareLink {
    icon: string,
    name: string,
    url: string
}

function ShareLink(props: ShareLink) {
    return (
        <a href={props.url} class={tw`flex items-center space-x-5 p-3`}>
            <img src={props.icon} alt={props.name} class={tw`w-4 h-4 rounded`} />
            <span class={tw`text-sm`}>Share on {props.name.charAt(0).toUpperCase() + props.name.slice(1)}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class={tw`h-4 w-4`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
        </a>
    )
}

export default ShareLink