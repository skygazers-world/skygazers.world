import Link from 'next/link'
import { useState, useEffect } from 'react';
import Icons from '../shared/Icons';

export default function Currentlyminting ({phase, skyapplink, character}) {
    const [mintAmount,setMintAmount] = useState(3000);
    useEffect(()=> {
        if(character === 'Monk') {
            setMintAmount(3000)
        }

    }, [character]);
    
    if (phase === "pre")
    {
        return (
            <div className='w-[full] pt-24 lg:pt-[20px] flex flex-col lg:flex-row items-center justify-end bg-gradient-to-b from-[#DEAF8B] to-[#BF9380] lg:pl-[10vw]'>
                <div className='lg:flex-1 flex flex-col items-center lg:items-start'>
                <h2 className='text-sgyellow text-[16px] lg:text-[20px] leading-[24px] mb-[20px]'>Up Next:</h2>
                <h1 className='text-sgyellow text-[44px] lg:text-[56px]'>{character}</h1>
                <p className='max-w-[80%] font-gatwickreg text-[16px] lg:text-[20px] text-center lg:text-left leading-[24px] lg:leading-[30px] mb-[40px] mt-[30px]'>The next round of minting will be featuring: <span className='font-gatwickbold'>{character}</span>! Available in total: {mintAmount}</p>
                <p className='max-w-[80%] font-gatwickbold text-[16px] text-center lg:text-left leading-[24px] mb-[30px] mt-[10px]'>Gaze at the social channels for more information! </p>
                <div className='w-full flex flex-row justify-center items-center lg:justify-start mb-[50px]'>
                    <Link href="https://twitter.com/Skygazers_world" className='w-[26px] h-[26px] mr-[20px]'><Icons.Twitter width='100%' height='100%' fill="#59342B" /></Link>
                    <Link href="https://www.instagram.com/" className='w-[26px] h-[26px] mr-[20px]'><Icons.IG width='100%' height='100%' fill="#59342B" /></Link>
                    <Link href="https://lenster.xyz/u/bennisan" className='w-[26px] h-[26px]'><Icons.Lenster width='100%' height='100%' fill="#59342B" /></Link>
                </div>
                {/* <Link href={skyapplink+'/buy'}><button className='middlerounded text-sgyellow bg-sgdark'>browse {character}</button></Link> */}
                </div>
                <img className='w-[854px]' src={'/currentlyminting-'+character+'.png'} alt={'Currently Minting: '+character}/>
            </div>
        )
    }

    if (phase === "active")
    {
        return (
            <div className='w-[full] pt-24 lg:pt-[20px] flex flex-col lg:flex-row items-center justify-end bg-gradient-to-b from-[#DEAF8B] to-[#BF9380] lg:pl-[10vw]'>
                <div className='lg:flex-1 flex flex-col items-center lg:items-start'>
                <h2 className='text-sgyellow text-[16px] lg:text-[20px] leading-[24px] mb-[20px]'>Currently minting:</h2>
                <h1 className='text-sgyellow text-[44px] lg:text-[56px]'>{character}</h1>
                <p className='max-w-[80%] font-gatwickreg text-[16px] lg:text-[20px] text-center lg:text-left leading-[24px] lg:leading-[30px] mb-[40px] mt-[30px]'>Find {character} in your favourite setting and join the movement right now!</p>
                <Link href={skyapplink+'/buy'}><button className='middlerounded text-sgyellow bg-sgdark'>browse {character}</button></Link>
                </div>
                <img className='w-[854px]' src={'/currentlyminting-'+character+'.png'} alt={'Currently Minting: '+character}/>
            </div>
        )
    }

    return (
        <div className='w-[full] py-24 flex flex-col lg:flex-row items-center justify-end bg-gradient-to-b from-[#DEAF8B] to-[#BF9380] lg:px-[10vw]'>
            <div className='lg:flex-1 flex flex-col items-center'>
            <p className='w-full font-gatwickreg text-[16px] lg:text-[20px] text-center leading-[24px] lg:leading-[30px] mb-[40px] mt-[30px]'>Currently no minting active.</p>
            </div>
        </div>
    )
}