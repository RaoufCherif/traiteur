import React from "react";
import Image from "next/image";
import palm from "../../../public/palm.jpg";
import snack from "../../../public/mixt_sale_ia.png";
import tagine from "../../../public/tagine.png";
import couscous from "../../../public/couscous_poulet_ia.png"
import clsx from "clsx";
import { log } from "console";

function TraditionNouveaute() {
  
  return (
    <main className=" ">

      <section className="h-screen bg-sky-100 flex flex-col  items-center  bg-[url('../../public/chef_ia.png')] bg-no-repeat bg-cover  min-h-full" >

      </section>

      <section className=" flex flex-col  gap-4  bg-gradient-to-b from-yellow-300 via-amber-100 to-green-300 " id="traditionnel">


        <h2 className='flex justify-center text-green-800 font-serif hover:font-sans  text-4xl py-16 '> Traditionnel</h2>

        <div className=" flex flex-raw justify-center justify-around  ">

          <div className="w-1/3 flex flex-col gap-4 justify-center">
  
            <h6 className="flex justify-center text-green-800 text-2xl ">Couscous</h6>
            <Image
              src={couscous}
              alt="background image"
              className="  mb-24 border  border-green-800 p-1 bg-gradient-to-b from-green-400 via-yellow-300 to-green-700 hover:`src={tagine}` "
            />

          </div>
          <div className="w-1/3 flex flex-col gap-4 justify-center">

            <h6 className="flex justify-center text-green-800 text-2xl ">Tagine</h6>
            <Image

              src={tagine}
              alt="background image"
              className="  mb-24 border  border-green-800 p-1 bg-gradient-to-b from-green-400 via-yellow-300 to-green-700"
            />

          </div>
        </div>


        <div className="flex flex-col gap-8 justify-center " >
        <div className="  flex flex-col  items-center  justify-bottom">
              <h6 className=" font-serif hover:font-sans  text-green-800 text-4xl ">
                Plats traditionnels 
              </h6>
              <p className="mb-4  font-serif hover:font-sans text-green-800 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus distinctio aut!
              </p>
            </div>
            <div className="flex justify-center">

        <button
                 className={clsx(
                  "rounded p-4 mb-10 ",
                  // "hover:bg-gradient-to-r from-green-400 via-green-400 to-green-500",
                  "text-white",
                  "delay-300 duration-300 ease-in-out bg-green-700 hover:-translate-y-1 hover:transition hover:bg-gradient-to-r from-green-300 via-green-500 to-green-900 duration-100 hover:text-green-500",
                )}
            >
              Commander
            </button>
            </div>

            </div>
      </section>




    </main>
  );
}

export default TraditionNouveaute;
