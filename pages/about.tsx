import Link from 'next/link';
import Icons from '../components/shared/Icons';
import Header from '../components/shared/Header';


export default function About () {
  const skypaperlink = 'http://google.com';
  const skyapplink = 'http://google.com';
  return (
    <div className="w-full flex flex-col items-start justify-start">
      <Header />
      <div className="w-full flex flex-col items-start justify-start pt-16 pb-32 md:pt-[110px] px-10 md:px-[120px]">
        <h1 className='max-w-[90%] md:max-w-[870px] mb-6 md:mb-11'>ABOUT.</h1>
        {/* <p className='max-w-[90%] md:max-w-[870px] font-gatwickreg text-[16px] md:text-[24px] leading-7 md:leading-[38px]'>Skygazers was founded by <a className='font-gatwickreg underline text-inherit leading-inherit' href="https://twitter.com/ben_adriaenssen">Bennisan</a> and <a className='font-gatwickreg underline text-inherit leading-inherit' href="https://twitter.com/sponnet">Sponnet</a>.</p> */}
        <p className='max-w-[85%] md:max-w-[748px] mt-4 mb-10 md:mb-11'><span className='font-bold'>Skygazers was founded by <a className='underline text-inherit leading-inherit' href="https://twitter.com/ben_adriaenssen">Bennisan</a> and <a className='underline text-inherit leading-inherit' href="https://twitter.com/sponnet">Sponnet</a> in the summer of 2021 </span>. Motivated by their common love for innovation and a stronge urge to contribute to web3, they combined their skills in arts and tech to form the experiment called 'Skygazers'.</p>
        <p className='max-w-[90%] md:max-w-[870px] font-gatwickreg text-[16px] md:text-[24px] leading-7 md:leading-[38px]'>Our common vision is and will always be to use new technologies to build something new, to create something that didn't exist in the world before.</p>
        <p className='max-w-[85%] md:max-w-[748px] mt-12 mb-14 md:mb-11'>We didn't want to be <span className="italic">just another NFT-project</span>: the world isn't getting any better with yet another PFP, upon which some functionality is brute-forced after the facts. Discussing the NFT-sprawl in the summer of 2021, the question "If <span className='italic'>we</span> would ever create an NFT together, what would that look like?" did set in motion something of an elaborate brainstorm over the course of weeks, and a very pleasurable one at that. Admits a lot of laughs and a ton of fun, we did actually come up with a concept that we believe adds value to the world and the space, and has the ability to create something new and exciting. The structure of Skygazers can gather a solid community and channel a flow of creative energy, which can materialise in a unique scifi universe and experience, owned by its contributors.</p>



        <div className='w-full flex flex-col md:flex-row items-start justify-start mb-[60px] md:mb-[90px]'>
            {/* <a href="" className='font-gatwickbold text-sgorange2 bodycopy underline mr-0 md:mr-8 mb-5 md:mb-0'>Read the Skypaper</a> */}
            <a href="https://blog.skygazers.world/" className='font-gatwickbold text-sgorange2 bodycopy underline'>Read our blog</a>
        </div>
      </div>
    </div>
    )}