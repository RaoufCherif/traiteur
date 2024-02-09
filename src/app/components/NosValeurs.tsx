import React from 'react'
import man from "../../../public/smart_man_ia.png"
import Image from 'next/image'

const NosValeurs = () => {
  return (
    <section className='flex justify-center mt-8'>
      <Image src={man} width={300} height={200} alt="smart man" />
    <div className='mb-16 flex flex-col justify-center max-w-4xl'>
<div className='flex justify-center'>
      <h2>Nos valeurs</h2>
      </div>
        <div>
         <div className='flex flex-col items-center  m-2 p-4'>
            <h3 className='text-green-700'>Meilleur Qualité</h3>
            <p className='text-green-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In doloribus dolorem inventore illum aperiam corrupti quia nostrum sunt maiores nemo. Debitis laudantium illum dolor, rem enim earum sed sequi fuga.</p>
         </div>

         <div className='flex flex-col items-center  m-2 p-4' >
            <h3 className='text-green-700'> Meilleur Goût</h3>
            <p className='text-green-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In doloribus dolorem inventore illum aperiam corrupti quia nostrum sunt maiores nemo. Debitis laudantium illum dolor, rem enim earum sed sequi fuga.</p>
         </div>
         <div className='flex flex-col items-center  m-2 p-4' >
            <h3 className='text-green-700'> Meilleur Service</h3>
            <p className='text-green-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In doloribus dolorem inventore illum aperiam corrupti quia nostrum sunt maiores nemo. Debitis laudantium illum dolor, rem enim earum sed sequi fuga.</p>
         </div>

         </div>

   
    </div>
    
</section>
  )
}

export default NosValeurs