import Icons from '../components/shared/Icons'
import Link from 'next/link'
import Footer from '../components/shared/Footer'
import Header from '../components/shared/Header'
// import wp from '//wp.png';

export default function Home() {
  return (
    <div className="font-gatwickreg">
      <div className="w-full h-[650px] sm:h-[377px] md:h-[400px] lg:h-[500px] xl:h-[577px] bg-cover bg-center bg-[url('/website_coverimage_V5_mobile.png')] sm:bg-[url('/website_coverimage_V5.png')]">
      <div className="w-full z-50 flex flex-row items-center justify-start pt-4 pl-14 pr-6">
        <Link href="https://discord.gg/jQbMvzbV" className="mr-3">
            <Icons.Discord width='25px' fill="#faf3f0" />
        </Link>
        <Link href="https://github.com/skygazers-world">
          <Icons.Github width='25px' fill="#faf3f0"/>
        </Link>
        <div className='flex-1 sm:flex-none'></div>
        <Link href=""><button className="bg-sgbrown hover:bg-sgbrown text-white font-bold py-1 px-3 rounded text-sm ml-5">visit app</button>
        </Link>
        </div>
      <div className='w-full h-full flex flex-col items-end sm:items-end justify-start sm:justify-start '>
        <div className='w-[250px] md:w-[300px] lg:w-[360px] mt-10 lg:mt-32 mr-8 md:mr-16 xl:mr-32'>
        <Icons.Logo width='100%' height='100%' />
        </div>
        </div>
    </div>
      <div className='w-full bg-contain bg-no-repeat bg-[url(/bg_on_white.png)] flex flex-col justify-center items-center pt-16 md:pt-24 pb-[50px]'>
        <h1 className="w-[70%] max-w-[932px] text-transparent text-8xl bg-clip-text bg-gradient-to-b from-sgbrown to-sgorange2 uppercase text-[26px] md:text-[36px] leading-[32px] md:leading-[48px] text-center">
        In a when wars are waged over your attention, gazing up at the sky has become a rare phenomenon, a rebellious act. BUT What if you do? What will you see? AND HOW WILL YOUR OBSERVATIONS HAVE an effect ON the FUTURE, near and far, Yours and that of your surrounding? <br /><br /><span className="font-gatwickbold">You, my friend, are <br className='hidden md:block' /> a skygazer now.</span>
        </h1>
      </div>
      <div className='w-full flex flex-col items-start justify-start lg:justify-center bg-gradient-to-b from-[#FFAB7B] to-[#F5BF97] overflow-y-visible overflow-x-scroll z-10'>
        <div className='md:w-full flex flex-row items-start justify-center relative uppercase'>
          <div className='w-[100vw] min-w-full h-[280px] bg-white absolute'></div>
          <div className='w-[50px]'></div>
          <div className='w-[324px] flex flex-col items-center justify-center -mr-32 z-0'>
            <img className='w-full' src='/wp.png' alt='WarriorPrincess'/>
            <p className='text-white text-center font-gatwickbold mt-3'>Warrior-<br />Princess</p>
          </div>
          <div className='w-[390px] flex flex-col items-center justify-center -mr-28 z-20'>
            <img className='w-full' src='/m.png' alt='Monk'/>
            <p className='text-white text-center font-gatwickbold mt-3'>Monk</p>
          </div>
          <div className='w-[275px] flex flex-col items-center justify-center z-0 -mr-24'>
            <img className='w-full mb-6' src='/d.png' alt='Droid'/>
            <p className='text-white text-center font-gatwickbold mt-3'>Droid</p>
          </div>
          <div className='w-[317px] flex flex-col items-center justify-center z-20'>
            <img className='w-full mb-6 sm:mb-0' src='/s.png' alt='Scientist'/>
            <p className='text-white text-center font-gatwickbold mt-3'>Scientist</p>
          </div>
          <div className='w-[50px]'></div>
        </div>
        <div className='w-full flex flex-col items-center justify-center pb-36 pt-16'>
          <p className='text-white text-[28px] uppercase text-center font-gatwickbold'>Meet our heroes.</p>
          <p className='text-[#DB640E] text-[24px] leading-[38px] text-center font-gatwickreg mt-[20px] w-[80%] max-w-[714px]'>The main characters Monk, Warrior-Princess, Droid and Scientist are the absolute center of the universe we are creating together.</p>
          <a className="text-[20px] font-gatwickbold text-sgbodycopy underline mt-6" href="/howitworks">See how it works</a>
        </div>
      </div>


      <div className='w-full bg-[#E7A885] flex flex-col-reverse md:flex-row items-start justify-start pt-28 pb-32 pr-10 relative overflow-hidden'>
        <div className='min-w-[80%] md:min-w-[340px] w-[80%] md:w-[340px] mt-10 md:mt-0 absolute md:relative top-[420px] md:top-0'>
          <Icons.Logo fill='sgblueish' width='100%' opacity='0.1' height='100%' />
        </div>
        <div className=' w-[80%] md:w-full max-w-[600px] text-[18px] leading-[28px] ml-10 md:ml-24 z-10'>
          <p className='mb-14 font-gatwickreg'>
          Skygazers is an experiment of  <span className="font-gatwickbold">scifi-fantasy world-building</span> through <span className="font-gatwickbold">collaboration</span>.
          <br /><br />
          The goal is to create and maintain a <span className="font-gatwickbold">fictional narrative</span> as a <span className="font-gatwickbold">community</span> using web3-technology.
          </p>
          <a href="" className="font-gatwickbold underline">Read the Skypaper</a>
        </div>
      </div>


      <div className='w-full bg-gradient-to-b from-[#595250] to-sgdark pt-24 lg:pt-28 pb-36 px-0 flex flex-col items-center justify-center'>
        <p className='text-sgyellow opacity-20 w-[80%] text-[20px] lg:text-[32px]  text-center font-gatwickreg lg:mb-2'>Find your role <br /> and join the cause.</p>
        <div className='w-full px-0 flex flex-col lg:flex-row items-center lg:items-start justify-center'>
          <div className='w-4/5 lg:w-[45vw]  max-w-[450px] lg:mr-[5vw] flex flex-col items-center text-center justify-center border-b-[5px] border-[rgba(255,253,195,0.1)] py-16'>
            <h2 className='text-sgyellow'>JOIN THE</h2>
            <h1 className='text-sgyellow text-[26px] md:text-[36px] leading-[32px] md:leading-[48px] mb-6'>NARRATORS</h1>
            <p className='text-sgyellow text-[20px] mb-5'>Filled to the brim with inspiration, the narrator distils the best of his story-telling ideas into a breathtaking adventure.</p>
            <Link href="howitworks/#narrators"><Icons.Narrator fill="#FFFDC3" width='70px' height='70px' /></Link>
            <p className='text-white font-gatwickbold leading-[28px] mt-6'><span className='uppercase opacity-30 text-sgyellow'>Skills:</span><br /> Story-telling, imagination, authorship
            <br /> <br /> <span className='uppercase opacity-30 text-sgyellow'>Required:</span><br /> Skygazer-NFT</p>
            <Link className='w-[70%] mt-12' href="howitworks/#narrators"><button className='middlerounded bg-sgyellow text-sgbodycopy'>join narrators</button></Link>
            <Link className='mt-6 text-sgyellow font-gatwickbold underline' href="howitworks/#narrators">read more</Link>
          </div>
          <div className='w-4/5 lg:w-[45vw] max-w-[450px] lg:ml-[5vw] flex flex-col items-center text-center justify-center border-b-[5px] border-[rgba(255,253,195,0.1)] py-16'>
            <h2 className='text-sgyellow'>JOIN THE</h2>
            <h1 className='text-sgyellow text-[26px] md:text-[36px] leading-[32px] md:leading-[48px] mb-6'>LORIST</h1>
            <p className='text-sgyellow text-[20px] mb-5'>Burdened with the heavy duty of weaving a web of facts around our fiction, the lorist ties everything together.</p>
            <Link href="howitworks/#lore"><Icons.Lorist fill="#FFFDC3" width='70px' height='70px' /></Link>
            <p className='text-white font-gatwickbold leading-[28px] mt-6'><span className='uppercase opacity-30 text-sgyellow'>Skills:</span><br /> World-building, character-design, consistency
            <br /> <br /> <span className='uppercase opacity-30 text-sgyellow'>Required:</span><br />DAO-membership (Timetokens)</p>
            <Link className='w-[70%] mt-12' href="howitworks/#lore"><button className='middlerounded bg-sgyellow text-sgbodycopy'>join lorist</button></Link>
            <Link className='mt-6 text-sgyellow font-gatwickbold underline' href="howitworks/#lore">read more</Link>
          </div>
        </div>
        <div className='w-4/5 lg:w-[50vw] max-w-[450px] lg:mt-[3vw] flex flex-col items-center text-center justify-center border-b-[5px] border-[rgba(255,253,195,0.1)] py-16'>
          <h2 className='text-sgyellow'>JOIN THE</h2>
          <h1 className='text-sgyellow text-[26px] md:text-[36px] leading-[32px] md:leading-[48px] mb-6'>MAKERS</h1>
          <p className='text-sgyellow text-[20px] mb-5'>Solidifying written words, makers enrich the experience by building upon the adventures, adding value to them and to the universe as a whole.</p>
          <Link href="howitworks/#lore"><Icons.Lorist fill="#FFFDC3" width='70px' height='70px' /></Link>
          <p className='text-white font-gatwickbold leading-[28px] mt-6'><span className='uppercase opacity-30 text-sgyellow'>Skills:</span><br /> commercial insight, entrepreneurship, persistence
          <br /> <br /> <span className='uppercase opacity-30 text-sgyellow'>Required:</span><br />DAO-membership (Timetokens)</p>
          <Link className='w-[70%] mt-12' href="howitworks/#makers"><button className='middlerounded bg-sgyellow text-sgbodycopy'>join makers</button></Link>
          <Link className='mt-6 text-sgyellow font-gatwickbold underline' href="howitworks/#lore">read more</Link>
        </div>
      </div>
    </div>
  )
}
