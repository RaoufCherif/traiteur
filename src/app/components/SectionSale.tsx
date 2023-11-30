import React from "react";
import Image from "next/image";
import snack1 from "../../../public/snack1.png";
import mini_burger from "../../../public/mini_burger.jpg";
import mini_rols from "../../../public/mini_rol.jpg";
import mini_piza from "../../../public/mini_pizza.jpg";
import mini_brics from "../../../public/mini_brics.jpeg"
import mini_croissants from "../../../public/mini_croissant.jpeg";
import {  fetchData } from "../../../util/getSales";

function SectionSale() {

let data = fetchData();

  return (   
     <section className=" bg-rose-300 ">

    <div className="flex flex-col  items-center">

      <h2 className="my-14  font-serif hover:font-sans  text-white text-4xl ">
        {" "}
        Mini Salés Faits Maison
      </h2>

      <Image src={snack1} width="1977" height="459" alt="background image" />
      <h2 className="mt-20  font-serif hover:font-sans  text-white text-4xl ">
        {" "}
        Cinq types de salés
      </h2>
      <h6 className="mb-20  font-serif hover:font-sans  text-white  ">
        {" "}
        DANS CHAQUE PLATEAU
      </h6>

      <div className="flex flex-raw gap-10 mb-20" >

      {data.map((item,index)=>{
         return (
        //  <li key={index}>{item}</li>
<>
         <div className=" flex flex-col items-center gap-4">
         <h4 className="  font-serif hover:font-sans  text-white text-lg" key={index}>{item.name}</h4>
         <Image  src={"/"+ item.image} width="170" height="150" alt="burger" />
       </div>
       </>
         )
     })}
      </div>
    </div>
        <div className=" mt-10 flex flex-col  items-center">
          <h2  className=" font-serif hover:font-sans  text-white text-4xl ">35€ pour 40 pièces</h2>
          <h6 className="mb-20  font-serif hover:font-sans text-white ">8 pièces de chaque types</h6>
          <button className="rounded  bg-gradient-to-b from-pink-500 to-green-100 p-4 mb-10">Commander</button>
        </div>
        </section>
  );
}

export default SectionSale;
