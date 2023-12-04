import Link from 'next/link'
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'

import { faFacebook, faInstagram, faLinkedin, faSquareFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'



const Footer = () => {
  return (
    <>
    <section className='bg-zinc-300  '>
 
    <div className='flex flex raw justify-around p-8' >

   
      <div>
        <ul className='flex flex-col gap-3'>
        <Link href={"/"}>   <li>Nos spécialités</li></Link> 
          <Link href={"/"}>     <li> Sucrés</li></Link> 
          <Link href={"/"}>   <li>Salés</li></Link> 
          <Link href={"/"}>     <li>Buffets</li></Link> 
        </ul>
        
      </div>

      <div> 
        <ul className='flex flex-col gap-3'>
        <Link href={"/"}>    <li>Plats tradicionnels</li></Link>
              <Link href={"/"}>      <li>Pâtes</li></Link> 
              <Link href={"/"}>     <li>Galettes</li></Link> 
            <Link href={"/"}>    <li>Sandwichs</li></Link> 
            </ul>

      </div>

      <div>

      <ul className='flex flex-col gap-3'>
      <Link href={"/"}>     <li>Nous contacter</li></Link> 
              <Link href={"/"}>    <li>Nos valeurs</li></Link> 
              <Link href={"/"}>  <li>Service client</li></Link> 
              <Link href={"/"}> <li>Avis clients</li></Link> 
            </ul>

      </div>

    </div>
    
    </section>
    <section className='bg-zinc-300  pt-4 items-center'>

          <div className='flex flex-raw justify-around'>
            <div  className='flex flex-raw ml-4 items-center'>
            <p className='mr-2'>Recevez notre newsletter</p>
            <input className='pl-2 h-8 ' type="email" name="email" id="email"  placeholder='Votre mail'/>
            <Link href={"/"}><p className='bg-black text-white p-1 '>OK</p></Link>
            </div>
            <div className='flex flex-raw gap-4 items-center'>

            <p className=''>Suivez-nous</p>

            <div className='flex flex-raw gap-2  '>
   <Link href={"/"}><FontAwesomeIcon  icon={  faSquareFacebook } className=' w-7 text-black z-50'/></Link> 
   <Link href={"/"}><FontAwesomeIcon  icon={  faYoutube } className=' w-10 text-black z-50'/></Link> 
   <Link href={"/"}><FontAwesomeIcon  icon={ faInstagram } className=' w-7 text-black z-50'/></Link> 
   <Link href={"/"}> <FontAwesomeIcon  icon={ faLinkedin } className=' w-7 text-black z-50'/></Link> 
   
    </div>
            </div>

          </div>

          <p className='text-l flex justify-center p-7'>© 2023 Traiteur Parisien</p>
    </section>
    </>
  )
}

export default Footer