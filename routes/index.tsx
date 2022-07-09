/** @jsx h */
import { h, Fragment } from "preact";
import { tw } from "@twind";
import Modal from "../islands/Modal.tsx"
import SocialLink from '../components/SocialLink.tsx'
import Navbar from '../islands/Navbar.tsx'

export default function Home() {

  const socials: {
    name: string,
    url: string,
    icon: string
  }[] = [
      {
        "name": "Facebook",
        "url": "https://facebook.com/tyvandi",
        "icon": "/facebook.svg"
      },
      {
        "name": "Instagram",
        "url": "https://www.instagram.com/tivandi.id/",
        "icon": "/instagram.svg"
      },
      {
        "name": "Linkedin",
        "url": "https://www.linkedin.com/in/enggar-tivandi-5a5a621a8/",
        "icon": "/linkedin.svg"
      },
      {
        "name": "Github",
        "url": "https://github.com/nekoding",
        "icon": "/github.svg"
      },
      {
        "name": "Twitter",
        "url": "#",
        "icon": "/twitter.svg"
      },
      {
        "name": "Discord",
        "url": "https://discordapp.com/users/nekoding#0290",
        "icon": "/discord.svg"
      },
      {
        "name": "Signal",
        "url": "#",
        "icon": "/signal.svg"
      },
      {
        "name": "LINE",
        "url": "https://line.me/ti/p/v7KMWq1ZQf",
        "icon": "/line.svg"
      }
    ];

  return (
    <div class={tw`bg-indigo-400 min-h-screen p-5`} style="background-image: linear-gradient(to top, #88d3ce 0%, #6e45e2 100%);">

      <head>
        <title>Enggar Tivandi</title>
        <meta property="og:title" content="Enggar Tivandi" />
        <meta property="og:site_name" content="enggar tivandi social links" />
        <meta property="og:url" content="links.enggartivandi.com" />
        <meta property="og:description" content="software developer" />
        <meta property="og:type" content="website" />
      </head>

      <Navbar />

      <div class={tw`max-w-md mx-auto`}>
        <div class={tw`flex items-center justify-center flex-col space-y-4`}>
          <img src="https://media-exp2.licdn.com/dms/image/C5603AQFIN_45pjqB6w/profile-displayphoto-shrink_100_100/0/1599700365283?e=1662595200&v=beta&t=3SR-tCSfysCFMt0aT9izS10axlTRsI5rxb6SlDTzs70" alt="" class={tw`inline-block h-20 w-20 rounded-full ring-2 ring-white`} />
          <a href="https://enggartivandi.com/" class={tw`flex items-center space-x-1`}>
            <span class={tw`font-bold`}>Enggar Tivandi</span>
            <img src="/verified-check.svg" alt="verified checkmark" title="verified" />
          </a>
        </div>

        <div class={tw`grid gap-4 mt-12`}>
          {socials.map((social) => {
            return <SocialLink name={social.name} icon={social.icon} url={social.url} />
          })}
        </div>
      </div>

      <Modal />
    </div>
  );
}
