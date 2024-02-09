import React from 'react';
import Image from 'next/image';
import gateau from "../../../public/beautiful_cakes_ia.png"
import clsx from 'clsx';
import { fetchData } from '../../../util/getCakes';


function Patisserie() {
   let data = fetchData();
  return (
<main className=" bg-gradient-to-t from-green-300 via-amber-400 to-green-300  flex flex-col ">

    <section className="h-screen bg-sky-100 flex flex-col  items-center  bg-[url('../../public/beautiful_cakes_ia.png')] bg-no-repeat bg-cover  " >
        <div>
        <h2 className=' font-serif hover:font-sans text-green-700 text-4xl  mt-48 '> Nos Patisseries Faites Maison</h2>
        </div>
     
        </section>
        <section>

<div>
<div className=" mt-12 flex flex-col  items-center">
<h2 className=" font-serif hover:font-sans  text-white text-4xl ">
Offrez-vous une expérience pâtissière unique
</h2>
<p className="mb-20  font-serif hover:font-sans  text-white  ">
Un gâteau exceptionnel, pour une expérience inoubliable
</p>

<div className="flex flex-raw gap-10 mb-20">
{data.map((item, index) => {
return (
//  <li key={index}>{item}</li>

<div key={index} className=" flex flex-col items-center gap-4 ">
  <h4 className="  font-serif hover:font-sans  text-white text-2xl">
    {item.name}
  </h4>
  <Image
    src={"/" + item.image}
    width="280"
    height="150"
    alt="burger"
    className='rounded-xl'
  />
</div>
);
})}




</div>

<div className="  flex flex-col  items-center justify-bottom">
  <h6 className=" font-serif hover:font-sans  text-white text-4xl ">
    35€ pour 40 pièces
  </h6>
  <p className="mb-4  font-serif hover:font-sans text-white ">
    8 pièces de chaque types
  </p>
  </div>

<button
className={clsx(
"rounded p-4 mb-10 ",
" bg-gradient-to-r from-green-400 via-green-500 to-green-500",
"text-white",
"hover:bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-green-700 to-amber-400",
)}
>
Commander 
</button>
</div>
</div>
</section>
     
    </main>

  )
}

export default Patisserie;