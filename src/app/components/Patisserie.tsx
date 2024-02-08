import React from 'react';
import Image from 'next/image';
import gateau from "../../../public/beautiful_cakes_ia.png"
import clsx from 'clsx';
import { fetchData } from '../../../util/getSales';


function Patisserie() {
   let data = fetchData();
  return (
<main className=" bg-gradient-to-t from-amber-600 via-orange-300 to-rose-800  flex flex-col ">

    <section className="h-screen bg-sky-100 flex flex-col  items-center  bg-[url('../../public/beautiful_cakes_ia.png')] bg-no-repeat bg-cover  " >
        <div>
        <h2 className=' font-serif hover:font-sans text-green-700 text-4xl  mt-48 '> Nos Patisserie</h2>
        </div>
     
        </section>
        <section>

<div>
<div className=" mt-12 flex flex-col  items-center">
<h2 className=" font-serif hover:font-sans  text-white text-4xl ">
Cinq types de salés
</h2>
<h6 className="mb-20  font-serif hover:font-sans  text-white  ">
DANS CHAQUE PLATEAU
</h6>

<div className="flex flex-raw gap-10 mb-20">
{data.map((item, index) => {
return (
//  <li key={index}>{item}</li>

<div key={index} className=" flex flex-col items-center gap-4">
  <h4 className="  font-serif hover:font-sans  text-white text-lg">
    {item.name}
  </h4>
  <Image
    src={"/" + item.image}
    width="190"
    height="150"
    alt="burger"
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
" bg-gradient-to-r from-orange-400 to-rose-500 ",
"text-white",
"hover:bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-400 to-indigo-700",
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