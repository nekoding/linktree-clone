/** @jsx h */
import { h, Fragment } from 'preact'
import { tw } from "@twind";

interface SocialInfo {
    icon: string,
    url: string,
    name: string
}

function SocialLink(props: SocialInfo) {
    return (
        <a href={props.url} class={tw`bg-white p-3 grid grid-cols-3 items-center rounded-full text-center`} target="_blank">
            <img src={props.icon} alt={props.name} class={tw`inline-block h-10 w-10 rounded-full`} />
            <span class={tw`block text-lg whitespace-nowrap`}>{props.name}</span>
        </a>
    )
}

export default SocialLink