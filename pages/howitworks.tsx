import Link from 'next/link';
import Icons from '../components/shared/Icons';
import Collapser from '../components/shared/Collapser';
import FAQItem from '../components/shared/FAQItem';
import Header from '../components/shared/Header';


export default function Howitworks () {
  const skypaperlink = 'https://hackmd.io/@3LPbX2EzR_CWxkXCzlRagg/HkeanZJT_c';
  const skyapplink = 'http://google.com';
  
  const QuestionsNarrator = [
    {
      Q:"What is a Narrator?",
      A:"In the context Skygazers, a Narrator is someone who owns an Skygazers-NFT and actively spends time telling its story."
    },
    {
      Q:"How do I become a Narrator?",
      A:"Aqcuire a Skygazers-NFT through the Skygazer-Dapp or via a secondary market, and write out the story that you feel belongs to this NFT. If you want your story to be part of the collection, submit it as an Adventure. In our eyes, you become a Narrator the moment you type your first letter."
    },  
    {
      Q:"What is the collection of Adventures and how can I get my story accepted?",
      A:"The collection of Adventures is the collection of stories that are officially part of the Skygazers-universe. This collection is curated by the Skygazers-DAO. If a story is submitted, the Skygazers-DAO votes on it being accepted or rejected to the collection. If the story is accepted, we call it an Adventure, and is therefore now officially part of the Skygazers-universe."
    },
    {
      Q:"Why would I want my story in the collection of Adventure?",
      A:"The collection of Adventures is open to the public, everyone can read the Adventures as part of the Skygazers experience. Also, creating a Derived Product by the Skygazers-DAO can only happen based on official Adventures that belong to the collection. So in other words: if a member of the Skygazers-DAO wants to create a comic of your story, and request funds to do so from the Skygazers-DAO, your story has to be an Adventure, belonging to the collection."
    },  
    {
      Q:"What if I buy an NFT that already has a story or Adventure attached to it?",
      A:"The owner of the NFT is also the absolute owner of the story or Adventure. This means that if you buy an NFT that already has a story or Adventure attached to it, that you can decide what to do with it. You can erase it and start from scratch, you can edit it a bit or give it a new plot twist... it's all up to you!"
    }
  ];
  const QuestionsLorist = [
    {
      Q:"What is a Lorist?",
      A:"In the context Skygazers, a Lorist is someone who owns Skygazer Timetokens (STT), and actively contributes to the Skygazers Lore by submitting Lore Changes."
    },
    {
      Q:"What is a Lore Change?",
      A:"A Lore Change is an edit made to the lore document. Both editing an existing piece of adding a new one can be Lore Changes. For your change to be accepted to the official Skygazers Lore, you will have to submit it to the Skygazers-DAO so they can vote on it."
    },
    {
      Q:"What are the subjects and topics of the Skygazers Lore?",
      A:"In theory, anything can be a subject or a topic in the Skygazers Lore. However, it will be more likely that your Lore Change is accepted is your writing is in line with the other existing Lore."
    },
  ];
  const QuestionsGeneral = [
    {
      Q:"General Q1?",
      A:"General A1"
    },
    {
      Q:"General Q2?",
      A:"General A2"
    },
  ];
  const QuestionsMaker = [
    {
      Q:"What is a Maker?",
      A:"In the context Skygazers, a maker is someone who owns Skygazer Timetokens (STT) and who creates a Derived Product Proposal (DPP). Once accepted by the Skygazers-DAO, the Maker is the one responsible for seeing that specific project to a good end, producing and managing the Derived product."
    },
    {
      Q:"Can anyone become a Maker?",
      A:"If you own Skygazer Timetokens (STT), you are a member of the Skygazers-DAO and therefore can submit a Derived Product Proposal (DPP). Once your DPP is accepted, and you start executing it, you are considered a Maker in the Skygazers-DAO"
    },
  ];
  
  return (
    <div className="w-full flex flex-col items-start justify-start">
      <Header />
      <div className="w-full flex flex-col items-start justify-start pt-16 md:pt-[110px] px-10 md:px-[120px]">
        <h1 className='max-w-[90%] md:max-w-[870px] mb-6 md:mb-11'>AS A COMMUNITY, WE WILL CREATE THE SKYGAZERS UNIVERSE.</h1>
        <p className='max-w-[90%] md:max-w-[870px] font-gatwickreg text-[16px] md:text-[24px] leading-7 md:leading-[38px]'>Skygazers is an experiment of scifi-fantasy world-building through collaboration. The goal is to create and maintain a fictional narrative as a community using web3-technology.</p>
        <p className='max-w-[85%] md:max-w-[748px] mt-8 md:mt-10 mb-14 md:mb-11'>The base components of the universe are the main characters <span className='italic'>(Monk, Warrior-Princess, Scientist, Droid)</span> the locations, and the situations. <br /><br />Out of these components, a collection of <a className='bodycopylink' href="#narrators">adventures</a> and <a className='bodycopylink' href="#lore">lore</a> will be created by a <a className='bodycopylink' href="#community">self-governing community</a>. The sum of all of this will be the world we know as Skygazers.</p>
        <div className='w-full flex flex-col md:flex-row items-start justify-start mb-[60px] md:mb-[90px]'>
            <a href="#overview" className='font-gatwickbold text-sgorange2 bodycopy underline mr-0 md:mr-8 mb-5 md:mb-0'>skip to overview</a>
            <a target="_blank" rel="noopener noreferrer"  href={skypaperlink} className='font-gatwickbold text-sgorange2 bodycopy underline'>read the Skypaper</a>
        </div>
      </div>

      <div
        className="w-full">
        <img src="/bg_narrators.png" />
        <div id="narrators" className='px-10 md:px-[120px]'>
          <h1 className="max-w-[90%] md:max-w-[870px] text-transparent bg-clip-text bg-gradient-to-b from-sgorange2 to-sgbrown text-[20px] leading-[30px] md:text-[28px] md:leading-[40px] mt-5">adventures ARE WRITTEN <br className='hidden md:block' /> BY THE NARRATORS.
            <br /><br />
            <span className='font-gatwickreg text-[18px] md:text-[24px]'>
              Filled to the brim with inspiration, the narrator distils the best of his story-telling ideas into a breathtaking adventure.
            </span>
          </h1>
          <p className='font-gatwickbold mt-8 mb-3'>As a narrator...</p>
          <ul className='list-disc list-outside pl-3 mb-8'>
            <li className='mb-2 pl-2'>you own an NFT, depicting a character, on a world in a certain situation.</li>
            <li className='mb-2 pl-2'>you are inspired by the combination of these elements: a story takes shape in your head.</li>
            <li className='mb-2 pl-2'>you use the Skygazers-dapp to write out this story next to your NFT.</li>
            <li className='mb-2 pl-2'>you submit the story to the community, so they can vote on accepting your story to the collection of adventures.</li>
            <li className='mb-2 pl-2'>you see your story accepted, and is now readable for everyone on the Skygazers-website.</li>
          </ul>
          <div className='w-full max-w-[890px] flex flex-col md:flex-row items-center md:items-end justify-start border-[6px] border-[rgba(89,52,43,0.1)] pt-10 md:pt-20 pb-10 px-10 mb-10'>
            <div className='flex-1 mb-6 md:mb-0'>
              <p className='font-gatwickbold uppercase text-sgbodycopy opacity-40 text-[18px] md:text-[20px] mb-2'>beCOME a narrator</p>
              <p className='font-gatwickreg leading-6 md:leading-8 bodycopy'>
                <span className='font-gatwickbold'>Skills:</span> Story-telling, imagination, authorship<br />
                <span className='font-gatwickbold'>Required:</span> Skygazer-NFT
              </p>
            </div>
            {/* <Link href={skyapplink}>
            <div className='flex flex-col items-center md:items-end'>
                <Icons.Narrator fill="#FF5C00" />
                <p className='font-gatwickbold underline'>visit dapp</p>
            </div>
            </Link> */}
            <div className='flex flex-col items-center md:items-end opacity-25'>
                <Icons.Narrator fill="#FF5C00" />
                <p className='font-gatwickbold underline'>visit dapp</p>
            </div>
          </div>
          {QuestionsNarrator &&
          <div className='w-full max-w-[890px]'>
            <Collapser
              title="FAQ about narratorship"
              >
              <div className='flex flex-col py-6 pl-5'>
                {QuestionsNarrator.map((Question,i)=>{return(
                  <FAQItem key={i} Q={Question.Q} A={Question.A}/>
                )})}                
              </div>
            </Collapser>
          </div>
          }
          <div className='w-full flex flex-col md:flex-row items-start justify-start pt-6'>
              {/* <Link href={skyapplink}><button className='smallyellowbtn md:mr-3 mb-3 md:mb-0'>buy NFT</button></Link>
              <Link href={skyapplink}><button className='smallyellowbtn md:mr-3 mb-3 md:mb-0'>visit dapp</button></Link>*/}
              <button disabled className='smallyellowbtn md:mr-3 mb-3 md:mb-0 opacity-25'>buy NFT</button>
              <button disabled className='smallyellowbtn md:mr-3 mb-3 md:mb-0 opacity-25'>visit dapp</button>
              <a target="_blank" rel="noopener noreferrer"  href={skypaperlink} className='smallyellowbtn'><button >read Skypaper</button></a>
          </div>
        </div>
      </div>

      <div id="lore" className='w-full flex flex-col items-start justify-start'>
        <div className='w-full flex flex-col items-end justify-start md:-mb-[120px] lg:-mb-[370px]'>
          <img className='mt-[70px] md:mt-[50px] w-full max-w-[477px]' src="/bg_lorist.png" />
        </div>
        <div className='px-10 md:px-[120px]'>
          <h1 className="max-w-[90%] md:max-w-[600px] xl:max-w-[870px] text-transparent bg-clip-text bg-gradient-to-b from-sgorange2 to-sgbrown text-[20px] leading-[30px] md:text-[28px] md:leading-[40px] mt-5">lore is managed by lorists.
            <br />
            <span className='font-gatwickreg text-[18px] md:text-[24px]'>
            Burdened with the heavy duty of weaving a web of facts around our fiction, the lorist ties everything together.
            </span>
          </h1>
          <p className='font-gatwickbold mt-8 mb-3'>As a lorist... </p>
          <ul className='list-disc list-outside pl-3 mb-8'>
            <li className='mb-2 pl-2'>you own Skygazer Timetokens (STT), which makes you a member of the Skygazers-DAO.</li>
            <li className='mb-2 pl-2'>you are fascinated by the totality of the Skygazers universe: background stories, names, characteristics, etc.</li>
            <li className='mb-2 pl-2'>you actively vote on proposals about the lore.</li>
            <li className='mb-2 pl-2'>you may create a proposal to edit a piece of lore or add one.</li>
          </ul>
          <div className='w-full max-w-[890px] flex flex-col md:flex-row items-center md:items-end justify-start border-[6px] border-[rgba(89,52,43,0.1)] pt-10 md:pt-20 pb-10 px-10 mb-10'>
            <div className='flex-1 mb-6 md:mb-0'>
              <p className='font-gatwickbold uppercase text-sgbodycopy opacity-40 text-[18px] md:text-[20px] mb-2'>beCOME a Lorist</p>
              <p className='font-gatwickreg leading-6 md:leading-8 bodycopy'>
                <span className='font-gatwickbold'>Skills:</span> World-building, character-design, consistency<br />
                <span className='font-gatwickbold'>Required:</span> DAO-membership (Skygazer Timetokens (STT))
              </p>
            </div>
            {/* <Link href={skyapplink}>
            <div className='flex flex-col items-center md:items-end'>
                <Icons.Narrator fill="#FF5C00" />
                <p className='font-gatwickbold underline'>visit dapp</p>
            </div>
            </Link> */}
            <div className='flex flex-col items-center md:items-end opacity-25'>
                <Icons.Narrator fill="#FF5C00" />
                <p className='font-gatwickbold underline'>visit dapp</p>
            </div>
          </div>
          {QuestionsLorist &&
          <div className='w-full max-w-[890px]'>
            <Collapser
              title="FAQ about lorism"
              >
              <div className='flex flex-col py-6 pl-5'>
                {QuestionsLorist.map((Question,i)=>{return(
                  <FAQItem key={i} Q={Question.Q} A={Question.A}/>
                )})}                
              </div>
            </Collapser>
          </div>
          }
          <div className='w-full flex flex-col md:flex-row items-start justify-start pt-6'>
              {/* <Link href={skyapplink}><button className='smallyellowbtn md:mr-3 mb-3 md:mb-0'>buy NFT</button></Link>
              <Link href={skyapplink}><button className='smallyellowbtn md:mr-3 mb-3 md:mb-0'>visit dapp</button></Link>*/}
              <button disabled className='smallyellowbtn md:mr-3 mb-3 md:mb-0 opacity-25'>buy NFT</button>
              <button disabled className='smallyellowbtn md:mr-3 mb-3 md:mb-0 opacity-25'>visit dapp</button>
              <a target="_blank" rel="noopener noreferrer"  href={skypaperlink} className='smallyellowbtn'><button >read Skypaper</button></a>
          </div>
        </div>
      </div>

      <div id="community" className='w-full flex flex-col items-center justify-start bg-[#595250] mt-[130px] pt-[100px] md:pt-[140px] pb-[40px] md:pb-[140px] px-[10vw]'>
        <p className='text-sgyellow text-[18px] md:text-[24px] font-gatwickreg text-center max-w-[75%] md:max-w-[940px] mb-10'>We can grow a self-governing community around our shared concepts using blockchain-technology.
          <br /><br />If every role in the Skygazers universe plays its part, the mechanics should result into generating value. </p>
          <Icons.NFT />
          <div className='w-full flex flex-row items-start justify-end mt-[60px] md:mt-[160px] opacity-20'>
          <img src="/ALL.png" />
          </div>
      </div>

      {/* OVERVIEW BEGIN HERE */}
      <div id="overview" className='w-full flex flex-col items-start justify-start'>
        <div className='w-full flex flex-col items-center justify-start pt-[100px] md:pt-[140px]'>
          <p className='text-[18px] md:text-[24px] font-gatwickbold text-center max-w-[50%] md:max-w-[940px] lg:mb-10'>
          This is how it all ties together.
          </p>
          <div className='w-full flex flex-col items-start overflow-y-visible overflow-x-scroll z-10 px-[100px]'>
            <div className='w-[700px] md:w-[1140px]'>
              <img src="/Skygazers_WP_ill__1.png" />
            </div>
          </div>
        </div>
        <div className='mt-[20px] lg:-mt-[70px] w-full px-[40px] md:px-[190px]'>
          <div className='w-full max-w-[590px] flex flex-col items-start justify-start'>
            <p>The <span className="font-gatwickbold text-[13px]">NARRATORS</span> write their stories next to their NFT and submit it to be accepted the the collection of adventures. The DAO votes on it.</p>
            <div className='w-[40px] h-1 bg-[rgba(89,52,43,0.1)] my-5'></div>
          </div>
          <div className='w-full max-w-[590px] flex flex-col items-start justify-start'>
            <p>The DAO votes both on the stories becoming adventures, and on lore changes, to be a part of the Skygazers universe. Anyone in the DAO can create lore changes. </p>
            <div className='w-[40px] h-1 bg-[rgba(89,52,43,0.1)] my-5'></div>
          </div>
          <div className='w-full max-w-[590px] flex flex-col items-start justify-start'>
            <p>The collection of adventure and the lore is open to the <span className="font-gatwickbold text-[13px]">public</span>. So are the workings of the community btw, since it all runs on blockchain technology. </p>
            <div className='w-[40px] h-1 bg-[rgba(89,52,43,0.1)] my-5'></div>
          </div>
        </div>

        <div className='w-full flex flex-col items-center justify-start pt-[100px] md:pt-[140px]'>
          <p className='text-[18px] md:text-[24px] font-gatwickbold text-center max-w-[50%] md:max-w-[940px] lg:mb-10'>And this is how it can return value<br /> to those who produce it.</p>
          <div className='w-full flex flex-col items-start overflow-y-visible overflow-x-scroll z-10 px-[100px]'>
            <div className='w-[700px] md:w-[1140px]'>
              <img src="/Skygazers_WP_ill__3.png" />
            </div>
          </div>
        </div>
        
        <div className='mt-[20px] lg:mt-0 w-full px-[40px] md:px-[190px]'>
          <div className='w-full max-w-[590px] flex flex-col items-start justify-start'>
            <p>From the collection of adventures <span className="font-gatwickbold text-[13px]">(A)</span> , a maker chooses an adventure <span className="font-gatwickbold text-[13px]">(B)</span> that inspires him to create a DPP, a derived product proposal <span className="font-gatwickbold text-[13px]">(C)</span>. A DPP contains specific details that will later be used by the derived product contract factory <span className="font-gatwickbold text-[13px]"></span>(E.2) regarding requested budget and potential revenue division percentages. </p>
            <div className='w-[40px] h-1 bg-[rgba(89,52,43,0.1)] my-5'></div>
          </div>
          <div className='w-full max-w-[590px] flex flex-col items-start justify-start'>
            <p>The DAO votes on the proposal <span className="font-gatwickbold text-[13px]">(D.1)</span>, and it passes <span className="font-gatwickbold text-[13px]">(D.2)</span>. Upon the vote passing, the requested funds are released to the maker <span className="font-gatwickbold text-[13px]">(E.1)</span> and the derived product contract factory <span className="font-gatwickbold text-[13px]">(E.2)</span> creates a derived product contract, a DPC <span className="font-gatwickbold text-[13px]">(G.2)</span>.</p>
          <div className='w-[40px] h-1 bg-[rgba(89,52,43,0.1)] my-5'></div>
          </div>
          <div className='w-full max-w-[590px] flex flex-col items-start justify-start'>
            <p>
            The maker uses the funds to create the derived product <span className="font-gatwickbold text-[13px]"></span>: any revenue that it generates <span className="font-gatwickbold text-[13px]">(G.1)</span> is received directly by its DPC (derived product contract) <span className="font-gatwickbold text-[13px]">(G.2)</span>.</p>
            <div className='w-[40px] h-1 bg-[rgba(89,52,43,0.1)] my-5'></div>
          </div>
          <div className='w-full max-w-[590px] flex flex-col items-start justify-start'>
            <p>
            The maker uses the funds to create the derived product <span className="font-gatwickbold text-[13px]"></span>: any revenue that it generates <span className="font-gatwickbold text-[13px]">(G.1)</span> is received directly by its DPC (derived product contract) <span className="font-gatwickbold text-[13px]">(G.2)</span>.</p>
            <div className='w-[40px] h-1 bg-[rgba(89,52,43,0.1)] my-5'></div>
          </div>
        </div>
        <div className='w-full flex flex-col items-start justify-start px-10 md:px-[120px] py-10 md:py-[50px] '>
          {/* {QuestionsGeneral &&
          <div className='w-full max-w-[890px]'>
            <Collapser
              title="General FAQs"
              >
              <div className='flex flex-col py-6 pl-5'>
                {QuestionsGeneral.map((Question,i)=>{return(
                  <FAQItem key={i} Q={Question.Q} A={Question.A}/>
                )})}                
              </div>
            </Collapser>
          </div>
          } */}
          <div className='w-full flex flex-col md:flex-row items-start justify-start pt-6'>
            {/* <Link href={skyapplink}><button className='smallyellowbtn md:mr-3 mb-3 md:mb-0'>visit dapp</button></Link>
            <Link href={skyapplink}><button className='smallyellowbtn'>read Skypaper</button></Link> */}
            <button disabled className='smallyellowbtn md:mr-3 mb-3 md:mb-0 opacity-25'>visit dapp</button>
            <a target="_blank" rel="noopener noreferrer"  href={skypaperlink} className='smallyellowbtn'><button >read Skypaper</button></a>
          </div>
        </div>
      </div>



      <div id="makers" className='w-full flex flex-col items-start justify-start py-16 md:py-[110px]'>
          <div className='px-10 md:px-[120px]'>
            <h1 className="max-w-[90%] md:max-w-[600px] xl:max-w-[870px] text-transparent bg-clip-text bg-gradient-to-b from-sgorange2 to-sgbrown text-[20px] leading-[30px] md:text-[28px] md:leading-[40px] mt-5">Makers make things.
              <br />
              <span className='font-gatwickreg text-[18px] md:text-[24px]'>
              Solidifying written words, makers enrich the experience by building upon the adventures, adding value to them and to the universe as a whole.
              </span>
            </h1>
            <p className='font-gatwickbold mt-8 mb-3'>As a maker... </p>
            <ul className='list-disc list-outside pl-3 mb-8'>
              <li className='mb-2 pl-2'>you own Skygazer Timetokens (STT), which makes you a member of the Skygazers-DAO.</li>
              <li className='mb-2 pl-2'>you pick an adventure from the collection that inspires you to create a derived product.</li>
              <li className='mb-2 pl-2'>you create a DPP (derived product proposal).</li>
              <li className='mb-2 pl-2'>you received the funds requested in your DPP.</li>
              <li className='mb-2 pl-2'>you are burden with the task of bringing this derived product into existence.</li>
              <li className='mb-2 pl-2'>you benefit from a successful derived product that brings revenue to the DAO and to you personally.</li>
            </ul>
            <div className='w-full max-w-[890px] flex flex-col md:flex-row items-center md:items-end justify-start border-[6px] border-[rgba(89,52,43,0.1)] pt-10 md:pt-20 pb-10 px-10 mb-10'>
              <div className='flex-1 mb-6 md:mb-0'>
                <p className='font-gatwickbold uppercase text-sgbodycopy opacity-40 text-[18px] md:text-[20px] mb-2'>beCOME a Maker</p>
                <p className='font-gatwickreg leading-6 md:leading-8 bodycopy'>
                  <span className='font-gatwickbold'>Skills:</span> World-building, character-design, consistency<br />
                  <span className='font-gatwickbold'>Required:</span> DAO-membership (Skygazer Timetokens (STT))
                </p>
              </div>
              {/* <Link href={skyapplink}>
              <div className='flex flex-col items-center md:items-end'>
                  <Icons.Lorist />
                  <p className='font-gatwickbold underline'>visit dapp</p>
              </div>
              </Link> */}
              <div className='flex flex-col items-center md:items-end opacity-25'>
                  <Icons.Lorist />
                  <p className='font-gatwickbold underline'>visit dapp</p>
              </div>
            </div>
            {QuestionsMaker &&
            <div className='w-full max-w-[890px]'>
              <Collapser
                title="FAQ about makerism"
                >
                <div className='flex flex-col py-6 pl-5'>
                  {QuestionsMaker.map((Question,i)=>{return(
                    <FAQItem key={i} Q={Question.Q} A={Question.A}/>
                  )})}                
                </div>
              </Collapser>
            </div>
            }
            <div className='w-full flex flex-col md:flex-row items-start justify-start pt-6'>
              {/* <Link href={skyapplink}><button className='smallyellowbtn md:mr-3 mb-3 md:mb-0'>buy NFT</button></Link>
              <Link href={skyapplink}><button className='smallyellowbtn md:mr-3 mb-3 md:mb-0'>visit dapp</button></Link>*/}
              <button disabled className='smallyellowbtn md:mr-3 mb-3 md:mb-0 opacity-25'>buy NFT</button>
              <button disabled className='smallyellowbtn md:mr-3 mb-3 md:mb-0 opacity-25'>visit dapp</button>
              <a target="_blank" rel="noopener noreferrer"  href={skypaperlink} className='smallyellowbtn'><button >read Skypaper</button></a>
            </div>
          </div>
        </div>

        <div className='w-full bg-gradient-to-b from-[#595250] to-sgdark pt-24 lg:pt-28 pb-36 px-0 flex flex-col items-center justify-center'>
          <p className='text-sgyellow opacity-20 w-[80%] text-[20px] lg:text-[32px]  text-center font-gatwickreg lg:mb-2'>Every role counts, <br /> big or small.</p>
          <div className='w-full px-0 flex flex-col lg:flex-row items-center lg:items-start justify-center'>
            <div className='w-4/5 lg:w-[45vw]  max-w-[450px] lg:mr-[5vw] flex flex-col items-center text-center justify-center border-b-[5px] border-[rgba(255,253,195,0.1)] py-16'>
              <h2 className='text-sgyellow'>THE</h2>
              <h1 className='text-sgyellow text-[24px] md:text-[32px] leading-[32px] md:leading-[48px] mb-6'>BELIEVER</h1>
              <p className='text-sgyellow text-[20px] mb-3'>Putting money where the mouth is, a believer buys into the community without actively taking up any other role.</p>
              {/* <Link className='w-[70%] mt-12' href={skyapplink}><button className='middlerounded bg-sgyellow text-sgbodycopy'>buy NFT</button></Link> */}
              <button disabled className='middlerounded bg-sgyellow text-sgbodycopy mt-12 opacity-25'>buy NFT</button>

            </div>
            <div className='w-4/5 lg:w-[45vw] max-w-[450px] lg:ml-[5vw] flex flex-col items-center text-center justify-center border-b-[5px] border-[rgba(255,253,195,0.1)] py-16'>
              <h2 className='text-sgyellow'>THE</h2>
              <h1 className='text-sgyellow text-[26px] md:text-[36px] leading-[32px] md:leading-[48px] mb-6'>ENTHUSIAST</h1>
              <p className='text-sgyellow text-[20px] mb-5'>Happy with little, the enthusiast is a valued part of the community, hanging around by the metaphorical watercooler.</p>
              <Link className='w-[70%] mt-12' href="howitworks/#lore"><button className='middlerounded bg-sgyellow text-sgbodycopy'>join Discord</button></Link>
            </div>
          </div>
        </div>

    </div>
    )}