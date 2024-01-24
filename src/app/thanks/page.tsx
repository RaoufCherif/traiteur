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
import { steps } from '../../../util/getStepsThanks';

const router = useRouter;

console.log(router)



function Thanks()  {
  let data = steps();
  const searchParams = useSearchParams();
  const value = searchParams.get('value');
  const [step, setStep] = useState<number>(5);


  return (
    <section>
     {data.map((item, index) => {
       return  (
   
<Player
    key={index} 
    autoplay
    loop
    src={item.animation}
    style={{ height: '40vh', width: '100%' }}
    />
  )} )  }
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