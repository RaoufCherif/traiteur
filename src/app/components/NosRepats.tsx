import React from 'react';
import Image from 'next/image';
import rice from "../../../public/rice.jpg"

function NosRepats() {
  return (


    <section className=" bg-sky-100 flex flex-col  justify-center  items-center ">
        <h2 className='p-4 m-8 font-serif hover:font-sans  text-green-700 text-4xl '> Nos Plats </h2>
        <div className='mb-16 flex flex-row max-w-4xl'>
            <Image id='image_rice' src={rice}  alt="background image"  className=' w-1/2 rounded-xl '/>
            <div>
             <div className='flex flex-col items-center  m-2 p-4'>
                <h3 className='text-green-700'>Meilleur Qualité</h3>
                <p className='text-green-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In doloribus dolorem inventore illum aperiam corrupti quia nostrum sunt maiores nemo. Debitis laudantium illum dolor, rem enim earum sed sequi fuga.</p>
             </div>

             <div className='flex flex-col items-center  m-2 p-4' >
                <h3 className='text-green-700'> Bon Goût</h3>
                <p className='text-green-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In doloribus dolorem inventore illum aperiam corrupti quia nostrum sunt maiores nemo. Debitis laudantium illum dolor, rem enim earum sed sequi fuga.</p>
             </div>

             </div>

       
        </div>
        
    </section>

  )
}

export default NosRepats