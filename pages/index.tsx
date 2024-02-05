import Icons from '../components/shared/Icons'
import Link from 'next/link'
import Footer from '../components/shared/Footer'
import Header from '../components/shared/Header'
import Currentlyminting from '../components/home/Currentlyminting'

// import wp from '//wp.png';

export default function Home() {
  const skypaperlink = 'https://hackmd.io/@3LPbX2EzR_CWxkXCzlRagg/HkeanZJT_c';
  const skyapplink = 'https://app.skygazers.world/';

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
        <Link href={skyapplink}><button className="bg-sgorange hover:bg-sgbrown text-white font-bold py-1 px-3 rounded text-sm ml-5">visit app</button>
        </Link>
        {/* <button disabled className="bg-sgbrown hover:bg-sgbrown text-white font-bold py-1 px-3 rounded text-sm ml-5 opacity-25">visit app</button> */}
        </div>
      <div className='w-full h-full flex flex-col items-end sm:items-end justify-start sm:justify-start '>
        <div className='w-[250px] md:w-[300px] lg:w-[360px] mt-10 lg:mt-32 mr-8 md:mr-16 xl:mr-32'>
        <Icons.Logo width='100%' height='100%' />
        </div>
        </div>
    </div>
      <div className='w-full bg-contain bg-no-repeat bg-[url(/bg_on_white.png)] flex flex-col justify-center items-center pt-12 md:pt-24 pb-[50px]'>
        <h1 className="w-[80%] max-w-[932px] text-transparent bg-clip-text bg-gradient-to-b from-sgbrown to-sgorange2 uppercase text-[26px] md:text-[36px] leading-[32px] md:leading-[48px] text-center">
        In a time when wars are waged over your attention, gazing up at the sky has become a rare phenomenon, a rebellious act. BUT What if you do? What will you see? AND HOW WILL YOUR OBSERVATIONS HAVE an effect ON the FUTURE, near and far, Yours and that of your surrounding? <br /><br /><span className="font-gatwickbold">You my friend, are <br className='hidden md:block' /> a skygazer now.</span>
        </h1>
      </div>

      <div className='w-full flex flex-col items-start justify-start lg:justify-center bg-gradient-to-b from-[#FFAB7B] to-[#F5BF97]'>
      <div className='w-full flex flex-col items-start justify-start lg:justify-center bg-red overflow-y-visible overflow-x-scroll z-10'>
        <div className='md:w-full flex flex-row items-start justify-center relative uppercase'>
          <div className='w-[100vw] min-w-full h-[280px] bg-white absolute'></div>
          <div className='w-[15px] md:w-[50px]'></div>
          <div className='w-[226px] md:w-[324px] flex flex-col items-center justify-center -mr-20 md:-mr-32 z-0'>
            <img className='w-full' src='/wp.png' alt='WarriorPrincess'/>
            <p className='text-white text-center font-gatwickbold mt-3'>Warrior-<br />Princess</p>
          </div>
          <div className='w-[250px] md:w-[390px] flex flex-col items-center justify-center -mr-20 md:-mr-28 z-20'>
            <img className='w-full' src='/m.png' alt='Monk'/>
            <p className='text-white text-center font-gatwickbold mt-3'>Monk</p>
          </div>
          <div className='w-[188px] md:w-[275px] flex flex-col items-center justify-center z-0 -mr-16 md:-mr-24'>
            <img className='w-full mb-6' src='/d.png' alt='Droid'/>
            <p className='text-white text-center font-gatwickbold mt-3'>Droid</p>
          </div>
          <div className='w-[220px] md:w-[317px] flex flex-col items-center justify-center z-20'>
            <img className='w-full mb-6 sm:mb-0' src='/s.png' alt='Scientist'/>
            <p className='text-white text-center font-gatwickbold mt-3'>Scientist</p>
          </div>
          <div className='w-[50px]'></div>
        </div>
        </div>

        <div className='w-full flex flex-col items-center justify-center pb-24 md:pb-36 pt-12 md:pt-16'>
          <p className='text-white text-[28px] uppercase text-center font-gatwickbold'>Meet our heroes.</p>
          <p className='text-[#DB640E] text-[18px] md:text-[24px] leading-[30px] md:leading-[38px] text-center font-gatwickreg mt-[20px] w-[80%] max-w-[714px]'>The main characters Monk, Warrior-Princess, Droid and Scientist are the absolute center of the universe we are creating together.</p>
          <a className="text-[18px] md:text-[20px] font-gatwickbold text-sgbodycopy underline mt-6" href="/howitworks">See how it works</a>
        </div>
      </div>


      <div className='w-full bg-[#E7A885] flex flex-col-reverse md:flex-row items-start justify-start pt-20 md:pt-28 pb-32 md:pb-32 pr-10 relative overflow-hidden'>
        <div className='min-w-[80%] md:min-w-[340px] w-[80%] md:w-[340px] mt-10 md:mt-0 absolute md:relative top-[420px] md:top-0'>
          <Icons.Logo fill='sgblueish' width='100%' opacity='0.1' height='100%' />
        </div>
        <div className=' w-[80%] md:w-full max-w-[600px] text-[18px] md:text-[20px] leading-[24px] md:leading-[28px] ml-10 md:ml-24 z-10'>
          <p className='mb-8 md:mb-14'>
          Skygazers is an experiment of  <span className="font-bold">scifi-fantasy world-building</span> through <span className="font-bold">collaboration</span>.
          <br /><br />
          We want to create and maintain a <span className="font-bold">fictional narrative</span> as a <span className="font-bold">community</span> using web3-technology.
          </p>
          <a href={skypaperlink} target="_blank" rel="noopener noreferrer" className="font-gatwickbold underline text-[16px]">Read the Skypaper</a>
        </div>
      </div>

      <div className='w-full bg-white flex flex-col items-center justify-center pt-20 md:pt-24 pb-40 md:pb-32'>
        <img className='w-[390px] max-w-[60%]' src='/Skygazers_WP_ill__4-onlyicons.png' alt='Only icons'/>
        <div className='w-[70%] md:w-full max-w-[640px] text-[24px] leading-[38px] text-center'>
          <p className='mb-8 md:mb-14 font-gatwickbold'>The goal is to create a rich scifi universe, where main characters go on adventures, have deep and complex personalities, and where all components have elaborate backstories and internal relations.</p>
          <p className='mb-8 md:mb-16 text-[18px] md:text-[20px] leading-[24px] md:leading-[28px]'>The design of how this is experienced is determined by its contributors.</p>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center mb-0 md:mb-8'>
          <Link className="font-gatwickbold underline text-sgorange2 mr-0 md:mr-4 mb-4 md:mb-0" href='/howitworks'>See how it works</Link>

          <a href={skypaperlink} target="_blank" rel="noopener noreferrer" className="font-gatwickbold underline text-sgorange2">Read the Skypaper</a>
          </div>
      </div>


      <div className='w-full bg-gradient-to-b from-[#595250] to-sgdark pt-12 md:pt-24 pb-36 px-0 flex flex-col items-center justify-center'>
        {/* <p className='text-white opacity-100 w-[80%] text-[24px] lg:text-[28px]  text-center font-gatwickreg lg:mb-2'>Do you hear the calling? <br className='hidden md:block ' />Find your role and join the cause.</p> */}
        <div className='w-full px-0 flex flex-col lg:flex-row items-center lg:items-start justify-center'>
          <div className='w-4/5 lg:w-[45vw]  max-w-[450px] lg:mr-[5vw] flex flex-col items-center text-center justify-center border-b-[5px] border-[rgba(255,253,195,0.1)] py-16'>
            <Link href="howitworks/#narrators" className='mb-4'><Icons.Narrator fill="#FFFDC3" width='60px' height='60px' /></Link>
            <h2 className='text-sgyellow text-[12px]'>JOIN THE</h2>
            <h1 className='text-sgyellow text-[24px] md:text-[32px] leading-[32px] md:leading-[48px] mb-2'>NARRATORS</h1>
            <p className='text-sgyellow text-[20px] mb-3'>Filled to the brim with inspiration, the narrator distils the best of his story-telling ideas into a breathtaking adventure.</p>
            <p className='text-white font-gatwickbold leading-[28px] mt-3'><span className='uppercase opacity-30 text-sgyellow'>Skills:</span><br /> Story-telling, imagination, authorship</p>
            <p className='text-white font-gatwickbold leading-[28px] mt-4'><span className='uppercase opacity-30 text-sgyellow'>Required:</span><br /> Skygazer-NFT</p>
            <Link className='w-[70%] mt-8' href="howitworks/#narrators"><button className='middlerounded bg-sgyellow text-sgbodycopy'>join narrators</button></Link>
            <Link className='mt-6 text-sgyellow font-gatwickbold underline' href="howitworks/#narrators">read more</Link>
          </div>
          <div className='w-4/5 lg:w-[45vw] max-w-[450px] lg:ml-[5vw] flex flex-col items-center text-center justify-center border-b-[5px] border-[rgba(255,253,195,0.1)] py-16'>
            <Link href="howitworks/#narrators" className='mb-4'><Icons.Lorist fill="#FFFDC3" width='60px' height='60px' /></Link>
            <h2 className='text-sgyellow text-[12px]'>JOIN THE</h2>
            <h1 className='text-sgyellow text-[24px] md:text-[32px] leading-[32px] md:leading-[48px] mb-2'>LORIST</h1>
            <p className='text-sgyellow text-[20px] mb-3'>Burdened with the heavy duty of weaving a web of facts around our fiction, the lorist ties everything together.</p>
            <p className='text-white text-[20px] mt-3'><span className='uppercase opacity-30 font-gatwickbold text-[16px] text-sgyellow'>Skills:</span><br /> World-building, character-design, consistency</p>
            <p className='text-white  text-[20px] mt-4'><span className='uppercase opacity-30 font-gatwickbold text-[16px] text-sgyellow'>Required:</span><br />DAO-membership (Timetokens)</p>
            <Link className='w-[70%] mt-8' href="howitworks/#lore"><button className='middlerounded bg-sgyellow text-sgbodycopy'>join lorist</button></Link>
            <Link className='mt-6 text-sgyellow font-gatwickbold underline' href="howitworks/#lore">read more</Link>
          </div>
        </div>
        <div className='w-4/5 lg:w-[50vw] max-w-[450px] lg:mt-[3vw] flex flex-col items-center text-center justify-center pt-16'>
          <Link href="howitworks/#narrators" className='mb-4'><Icons.Lorist fill="#FFFDC3" width='60px' height='60px' /></Link>
          <h2 className='text-sgyellow text-[12px]'>JOIN THE</h2>
          <h1 className='text-sgyellow text-[24px] md:text-[32px] leading-[32px] md:leading-[48px] mb-2'>MAKERS</h1>
          <p className='text-sgyellow text-[20px] mb-3'>Solidifying written words, makers enrich the experience by building upon the adventures, adding value to them and to the universe as a whole.</p>
          <p className='text-white font-gatwickbold leading-[28px] mt-3'><span className='uppercase opacity-30 text-sgyellow'>Skills:</span><br /> commercial insight, entrepreneurship, persistence</p>
          <p className='text-white font-gatwickbold leading-[28px] mt-4'><span className='uppercase opacity-30 text-sgyellow'>Required:</span><br />DAO-membership (Timetokens)</p>
          <Link className='w-[70%] mt-8' href="howitworks/#makers"><button className='middlerounded bg-sgyellow text-sgbodycopy'>join makers</button></Link>
          <Link className='mt-6 text-sgyellow font-gatwickbold underline' href="howitworks/#lore">read more</Link>
        </div>
      </div>


      <div className='w-[full] pt-12 px-4 lg:pt-20 pb-16 lg:pb-24 md:px-0 flex flex-col items-center justify-center'>
        <p className=' opacity-50 w-[80%] text-[18px] md:text-[20px] leading-[24px] md:leading-[28px]  text-center font-gatwickreg mb-2'>Every role counts, big or small.</p>
        <div className='w-full px-0 flex flex-col lg:flex-row items-center lg:items-start justify-center'>
          <div className='w-4/5 lg:w-[45vw]  max-w-[450px] lg:mr-[5vw] flex flex-col items-center text-center justify-center border-b-[5px] border-[rgba(255,253,195,0.1)] py-12'>
            <h2 className=''>THE</h2>
            <h1 className='text-[24px] md:text-[32px] leading-[32px] md:leading-[48px] mb-4'>BELIEVER</h1>
            <p className='text-[18px]'>Putting the money where the mouth is, a believer buys into the community without actively taking up any other role, and quitly watches as everything unfolds.</p>
            <Link className='w-[70%]' href={skyapplink}><button className='middlerounded bg-sgorange text-sgbodycopy mt-8'>buy NFT</button></Link>
            {/* <button className='middlerounded bg-sgorange text-sgbodycopy mt-8 opacity-25' disabled>buy NFT</button> */}
          </div>
          <div className='w-4/5 lg:w-[45vw] max-w-[450px] lg:ml-[5vw] flex flex-col items-center text-center justify-center border-b-[5px] border-[rgba(255,253,195,0.1)] py-8 md:py-12'>
            <h2 className=''>The</h2>
            <h1 className=' text-[26px] md:text-[36px] leading-[32px] md:leading-[48px] mb-4'>ENTHUSIAST</h1>
            <p className='text-[18px]'>Happy with little, the enthusiast is a valued part of the community, hanging around by the metaphorical watercooler.</p>
            <Link className='w-[70%] mt-12' href="https://discord.gg/jQbMvzbV"><button className='middlerounded bg-sgorange text-sgbodycopy'>join Discord</button></Link>
          </div>
        </div>
      </div>

      <Currentlyminting phase="active" character={"Monk"} skyapplink={skyapplink} />
    </div>
  )
}
