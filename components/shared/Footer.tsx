import Icons from "./Icons";
import Link from "next/link";
import { useRouter } from 'next/router';
import { Menu, Transition } from '@headlessui/react'

export default function Footer () {
    const linksArray = [
        {title:"Home",link:"/",disabled:false},
        {title:"How it works",link:"howitworks",disabled:false},
        {title:"Read Skypaper",link:"https://hackmd.io/@3LPbX2EzR_CWxkXCzlRagg/HkeanZJT_c",disabled:false},
        {title:"Visit app",link:"skypaper",disabled:true},
        {title:"About Skygazers",link:"about",disabled:false},
      ]
      const router = useRouter();
      const linkItems = linksArray.map((item,i) =>{
        return(
            <div key={i}  className="font-gatwickreg text-white hover:text-sgorange py-3 text-[12px] border-b border-[rgba(255,255,255,0.25)] pl-4  w-full lg:w-auto text-center lg:text-right">
            {item.disabled?
            
            <div className="flex-row items-start justify-start text-left">  
            <span className="opacity-25">{item.title}</span>
            </div>
            :
            <Link key={i} className="font-gatwickreg text-white hover:text-sgorange py-3 text-[12px] pl-4  w-full lg:w-auto text-center lg:text-right" href={item.link}>
            <div className="flex flex-row">
              {router.pathname === ("/"+item.link) ? "• " : null}
              {(router.pathname === "/")&&(item.link==="/") ? "• " : null}
              {item.title}
              </div>
            </Link>
            }
            </div>)
      })

    return (
        <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-end bg-[#595250] pt-28 pb-28 px-16 lg:px-24">
            <div className="w-[240px] lg:w-[220px]">
                <Icons.Logo fill="white" width="100%" height="141.68" />
            </div>
            <div className="flex w-full lg:w-auto lg:flex-1 flex-col-reverse lg:flex-row items-end justify-start mt-12">
            <div className="flex flex-row items-center justify-start lg:ml-24 mt-16 lg:mt-0">
                <Link href="https://discord.gg/jQbMvzbV" className="mr-5 fill-white hover:fill-sgorange">
                    <Icons.Discord width='22px' height="21.29" fill="inherit" />
                </Link>
                <Link href="https://github.com/skygazers-world" className="mr-5 fill-white hover:fill-sgorange">
                    <Icons.Github width='22px' height="21.29" fill="inherit"/>
                </Link>
                <Link href="https://twitter.com/Skygazers_world" className='w-[22px] h-[22px] mr-5 fill-white hover:fill-sgorange'><Icons.Twitter width='100%' height='100%' fill="inherit" /></Link>
                {/* <Link href="https://www.instagram.com/" className='w-[22px] h-[22px] mr-5 fill-white hover:fill-sgorange'><Icons.IG width='100%' height='100%' fill="inherit" /></Link> */}
                <Link href="https://lenster.xyz/u/bennisan" className='w-[22px] h-[22px] mr-5 fill-white hover:fill-sgorange'><Icons.Lenster width='100%' height='100%' fill="inherit" /></Link>

                {/* <Link href=""> */}
                    <button disabled className="bg-white opacity-20 hover:bg-sgorange text-[#595250] font-bold py-1 px-3 rounded text-sm ml-5">visit app</button>
                {/* </Link> */}

            </div>
            <div className='flex-none lg:flex-1'></div>
            <div className="flex w-full lg:w-auto flex-col items-center lg:items-end">
                {linkItems}
            </div>
            </div>
        </div>
    )
}