import React, { useState } from 'react'
import  { avisClients }  from "../../../util/getAvisClients"
import Image from 'next/image';
import pene from "../../../public/pene.jpeg"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function AvisClients() {
    const avis = avisClients();
  return (

    <section className='flex flex-col items-center  gap-8 p-0 bg-green-100 '>
        <h2 className='text-2xl my-8'> Ce que disent nos clients</h2>
        <section  className='flex flex-raw gap-6 p-4 '> 
        {avis.map((item,index)=>{
             let rating = item.rating;
             let ratingNu  = <FontAwesomeIcon  icon={fas.faStar } className=' w-3 text-yellow-400 '/>
            return (
            <div key={index} className=" flex flex-col items-center justify-center gap-2  max-w-[25%]">
            <Image  src={"/"+ item.image} width={120} height="150" alt="burger" />
          <ul className='flex flex-raw gap-1 '>
              {[...Array(rating)].map((_, i)=> (
              <li key={i}>{ratingNu}</li>
              ))}
          </ul>
            <h4 className="font-serif hover:font-sans  text-black text-lg" key={index}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h4>
            <p className="font-sans  text-black text-sm w-fit p-2">{item.avis}</p>
          </div>
            )
        })}
         </section>
         <section className='flex flex-raw  w-full '>
            <div className='flex flex-col bg-gradient-to-r from-purple-600 to-orange-600  w-1/2 justify-center items-center justify-around'>
                <h3 className='text-white'> Notre objectif est de vous satisfaire</h3>
                <h6 className='text-white'> Chaque avis compte!</h6>
                <button className='bg-black p-4 hover:bg-gradient-to-r from-blak-500 to-blue-500 text-xl text-white' > Rédiger un commentaire </button> 
            </div>
            <div className='w-1/2'>
                <Image src={pene}  width={1200} alt="spagiti" />
            </div>
         </section>
    </section>
  )
}

export default AvisClients