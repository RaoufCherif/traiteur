"use client"
import React, { useState } from 'react'
import getEmail from '../components/Footer';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import LottiePlayer from "@lottiefiles/react-lottie-player";
import { Player } from '@lottiefiles/react-lottie-player';
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import { faChrome } from '@fortawesome/free-brands-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Home from '../page';

const router = useRouter;

console.log(router)

interface Step {
  id: number;
  text: string;
  animation: string;
}


function Thanks()  {
  const steps: Step[] = [
    {
      id: 1,
      text: "Create a free account on the Beccountable website.",
      animation: "https://assets3.lottiefiles.com/packages/lf20_JExdDIS87T.json",
    },
    {
      id: 2,
      text: "Create a goal and break down your goals into smaller, more manageable steps.",
      animation: "https://assets3.lottiefiles.com/packages/lf20_dvpgo0cl.json",
    },
    {
      id: 3,
      text: "Find an accountability partner to help you stay on track. Your accountability partner can be a friend, family member, or colleague.",
      animation: "https://assets8.lottiefiles.com/packages/lf20_7sl35zjk.json",
    },
    {
      id: 4,
      text: "As you work towards your goals, you will need to provide proof of activity.",
      animation: "https://assets3.lottiefiles.com/private_files/lf30_p9it5a2a.json",
    },
    {
      id: 5,
      text: "Your referee will review your proof of activity and provide you with feedback. This feedback can help you to identify areas where you need to improve.",
      animation: "https://assets3.lottiefiles.com/packages/lf20_GgLE0z7sML.json",
    },
    {
      id: 6,
      text: "As you achieve your goals, be sure to celebrate your milestones to help you stay motivated and focused.",
      animation: "https://assets9.lottiefiles.com/private_files/lf30_h6i0ko7d.json",
    },
  ];

  const searchParams = useSearchParams();
  const value = searchParams.get('value');
  const [step, setStep] = useState<number>(5);


  return (
    <section>

<Player
    autoplay
    loop
    src={steps[step].animation}
    style={{ height: '40vh', width: '100%' }}
    />

        <div className='flex flex-col mx-8 justify-center p-8  rounded-2xl items-center   bg-gradient-to-b from-purple-800 to-purple-500 '>
        <h1 className='text-white text-xl m-1'>Votre demande est prise en compte</h1>
        <p className='text-white text-xl'>Vous recevrez notre newsletter à l&rsquo;adresse que vous avez renseignée </p>
        <p className='text-4xl text-orange-400 m-4'>{value} </p>
        <Link href="/"
        className='text-white'
        >
         Revenir à l&rsquo;accueil  <FontAwesomeIcon  icon={ faHome } className=' w-7 text-white z-50'/>

        </Link>
              
              </div>
       
    </section>

   
  )

}

export default Thanks