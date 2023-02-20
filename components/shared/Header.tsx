import Icons from "./Icons"
import { ReactNode,Fragment } from "react";
import Link from "next/link";
import { Menu, Transition } from '@headlessui/react'
import { useRouter } from 'next/router';


export default function Header () {
  const linksArray = [
    {title:"Home",link:"/",disabled:false},
    {title:"How it works",link:"howitworks",disabled:false},
    {title:"Read Skypaper",link:"skypaper",disabled:true},
    {title:"Visit app",link:"skypaper",disabled:true},
    {title:"About Skygazers",link:"about",disabled:false},
    {title:"Blog",link:"https://blog.skygazers.world/",disabled:false},

  ]
  const router = useRouter();

  const linkItems = linksArray.map((item,i) =>{
    return(
      <>
      {item.disabled?
        <div className="font-gatwickreg opacity-25 text-white py-4 text-center text-[14px] border-b border-[rgba(255,255,255,0.25)] pl-6">
         {item.title}</div>
      :
      <Menu.Item key={i}>
        <Link className="font-gatwickreg text-white hover:text-sgbrown py-4 text-center text-[14px] border-b border-[rgba(255,255,255,0.25)] pl-6" href={item.link}>
        <div className="flex flex-row">
          {router.pathname === ("/"+item.link) ? "• " : null}
          {(router.pathname === "/")&&(item.link==="/") ? "• " : null}

          {item.title}
          </div>
          </Link>
     </Menu.Item>
      }
     </>
     )
  })

    return (
    <Menu as="div" className="inline-block text-left fixed z-50">
      <div>
        <Menu.Button className="flex items-center rounded-full">
          <div className="w-10 h-10 bg-transparent flex flex-col items-end justify-end"><Icons.Hamb fill="#2A2F35" width="24px"/></div>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 w-56 origin-top-left bg-gradient-to-b from-sgdark to-sgdark -mt-5 ml-4 rounded-[3px]">
          <div className="flex flex-col items-start justify-start pt-4 pb-8">
          {linkItems}
          </div>
          <div className="flex flex-row w-full items-center pl-6 pb-8">
            <Link href="https://discord.gg/jQbMvzbV" className="fill-white hover:fill-sgbrown mr-3">
              <Icons.Discord fill="inherit" width="24px" />
            </Link>
            <Link href="https://github.com/skygazers-world" className="fill-white hover:fill-sgbrown">
              <Icons.Github fill="inherit" width="24px" />
            </Link>
          </div>
        </Menu.Items>
      </Transition>

    </Menu>

    )
}

