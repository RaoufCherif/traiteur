import React from 'react'
import Image from 'next/image';
import palm from "../../../public/palm.jpg"
import hmis from "../../../public/hmis .jpg"

function TraditionNouveaute() {
  return (
    <section className=' flex flex-col gap-4 mt-12 justify-center  items-center  '>
     
    <h2 className='relative z-50 flex justify-center mt-4 text-green-700'> Tradition & Nouveauté</h2>

    <div className='flex flex-row justify-center items-center w-96 gap-120 mt-12 '>

        <div className='absolute  '>
        <Image src={palm} alt="palm" className='absolute  w-1/2 z-0' />
        <Image src={hmis} alt="hmiss"  className='relative w-1/3  mt-48 ml-12 z-50 rounded-xl' />
        </div>

        <div className='flex flex-col justify-center items-center w-120 gap-4  '>
            <h2 className='z-50 text-green-700'>Hmiss dit Felfel</h2>
            <p className='z-50 text-green-700'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias id exercitationem? Officiis, error dolores libero accusantium voluptates laboriosam dignissimos, blanditiis quae tempore sapiente magni! Molestias rerum exercitationem repellat obcaecati?
            </p>
        </div>

    </div>

         </section>
  )
}

export default TraditionNouveaute