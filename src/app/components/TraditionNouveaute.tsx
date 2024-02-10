import React from "react";
import Image from "next/image";
import palm from "../../../public/palm.jpg";
import snack from "../../../public/mixt_sale_ia.png";
import tagine from "../../../public/tagine.png";
import couscous from "../../../public/couscous_poulet_ia.png"
import clsx from "clsx";

function TraditionNouveaute() {
  return (
    <main className=" ">

      <section className="h-screen bg-sky-100 flex flex-col  items-center  bg-[url('../../public/chef_ia.png')] bg-no-repeat bg-cover  min-h-full" >

      </section>

      <section className=" flex flex-col  gap-4   bg-gradient-to-b from-amber-100 via-yellow-100 to-green-200 " id="traditionnel">


        <h2 className='flex justify-center text-green-800 font-serif hover:font-sans  text-4xl py-16 '> Traditionnel</h2>

        <div className=" flex flex-raw justify-center justify-around  ">

          <div className="w-1/3 flex flex-col gap-4 justify-center">

            <h6 className="flex justify-center text-slate-900 text-2xl ">Couscous</h6>
            <Image
              src={couscous}
              alt="background image"
              className="  mb-24 border  border-green-800 p-1 bg-gradient-to-b from-green-400 via-yellow-300 to-green-700"


            />

          </div>
          <div className="w-1/3 flex flex-col gap-4 justify-center">

            <h6 className="flex justify-center text-slate-900 text-2xl ">Tagine</h6>
            <Image

              src={tagine}
              alt="background image"
              className="  mb-24 border  border-green-800 p-1 bg-gradient-to-b from-green-400 via-yellow-300 to-green-700"


            />

          </div>
        </div>
        <div className="flex justify-center">
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
      </section>




    </main>
  );
}

export default TraditionNouveaute;
