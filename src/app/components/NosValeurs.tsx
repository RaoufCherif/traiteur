import React from 'react'
import man from "../../../public/smart_man_ia.png"
import Image from 'next/image'

const NosValeurs = () => {
  return (
    <main className='h-screen '>

      <section>

      <div className='flex justify-center '>
      <h2 className='font-serif hover:font-sans text-slate-900 text-4xl  my-24'>Nos valeurs</h2>
      </div>

      </section>

      <section className='  flex flex-raw justify-center max-w-4xl'>
      
      {/* <Image src={man} width={100} height={100} alt="smart man" /> */}

      </section>
      <section className='mt-8'>
    <div className='  inline-grid grid-cols-4 ml-8 mr-8'>

 
    <div className='flex flex-col items-center gap-6 m-2 p-4  '>
            <h3 className='text-slate-800 text-xl underline'>Meilleur Qualité</h3>
            <p className="text-slate-300 border-solid border-8 border-green-700  bg-black  p-8 hover:bg-[url('../../public/soumon_concombre.jpg')] hover:text-black" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, officia magni distinctio sequi repellendus quod, dicta iusto eligendi atque perspiciatis vero maxime unde dolore repellat modi! Animi distinctio quae eaque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. In doloribus dolorem inventore illum aperiam corrupti quia nostrum sunt maiores nemo. Debitis laudantium illum dolor, rem enim earum sed sequi fuga.</p>
         </div>

         <div className='flex flex-col items-center gap-6 m-2 p-4 '>
            <h3 className='text-slate-800 text-xl underline'>Meilleur Service</h3>
            <p className="text-slate-300  border-solid border-8 border-teal-500  bg-black  p-8 hover:bg-[url('../../public/pain_soumon.jpg')] hover:text-black">Lorem,  amet consectetur adipisicing elit. Numquam, molestias ab tempora aliquid optio ducimus eligendi, neque a ipsam temporibus consequatur amet non animi maxime aperiam velit sed? Consectetur, praesentium! Lorem ipsum dolor, sit amet consectetur adipisicing elit. In doloribus dolorem inventore illum aperiam corrupti quia nostrum sunt maiores nemo. Debitis laudantium illum dolor, rem enim earum sed sequi fuga.</p>
         </div>

         <div className='flex flex-col items-center gap-6 m-2 p-4 ' >
            <h3 className='text-slate-800  text-xl underline'> Meilleur Goût</h3>
            <p className="text-slate-300  border-solid border-8 border-orange-500  bg-black  p-8    hover:bg-[url('../../public/tables_minis_sales_ia.png')] hover:text-black "  >Lorem ipsum dolor, sit amet consectetur adipisicing elit. In doloribus dolorem inventore illum aperiam corrupti quia nostrum sunt maiores nemo. Debitis laudantium illum dolor, rem enim earum sed sequi fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, obcaecati ut facere magni ea accusamus dignissimos labore optio necessitatibus, ipsa, minus sit! Quas saepe unde dolores officiis velit, rerum sed!</p>
         </div>
         <div className='flex flex-col items-center gap-6  m-2 p-4 ' >
            <h3 className='text-slate-800  text-xl underline '> Meilleur Experience</h3>
            <p className="text-slate-300  border-solid border-8 border-rose-900  bg-black  p-8 hover:bg-[url('../../public/mini_sucre_ia_2.png')]  hover:text-black" >Lorem  sit amet consectetur adipisicing elit. Sit, ea accusamus alias architecto perspiciatis vel. Expedita nulla ducimus amet minus magnam fugit voluptatibus maiores animi facere, consequuntur vel, eligendi exercitationem? Lorem ipsum dolor, sit amet consectetur adipisicing elit. In doloribus dolorem inventore illum aperiam corrupti quia nostrum sunt maiores nemo. Debitis laudantium illum dolor, rem enim earum sed sequi fuga.</p>
         </div>

         </div>

   
    
    
</section>
</main>
  )
}

export default NosValeurs