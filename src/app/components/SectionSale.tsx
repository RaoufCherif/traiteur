import React from "react";
import Image from "next/image";
import snack1 from "../../../public/mixt_sale_ia_1.png";
import { fetchData } from "../../../util/getSales";
import clsx from "clsx";



function SectionSale() {
  let data = fetchData();


  return (
    <main className=" bg-gradient-to-t from-green-200 via-red-100 to-green-400  flex flex-col " >

      <section>

          <div  className=" flex justify-center   bg-[url('../../public/mixt_sale_ia_1.png')]    bg-no-repeat bg-cover min-h-screen min-w-screen"  >
                  <h2 className=" font-serif hover:font-sans  text-rose-700 text-4xl pt-12">
                
                    Mini Salés Faits Maison
                  </h2> 
                  </div>


                  </section> 
           <section>

                <div>
                <div className=" mt-12 flex flex-col  items-center">
          <h2 className=" font-serif hover:font-sans   text-rose-700 text-4xl ">
            Cinq types de salés
          </h2>
          <h6 className="mb-20  font-serif hover:font-sans text-rose-700  ">
            DANS CHAQUE PLATEAU
          </h6>

          <div className="flex flex-raw gap-10 mb-20">
            {data.map((item, index) => {
              return (
                //  <li key={index}>{item}</li>

                <div key={index} className=" flex flex-col items-center gap-4">
                  <h4 className="  font-serif hover:font-sans  text-rose-700 text-lg">
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
                  <h6 className=" font-serif hover:font-sans  text-rose-700 text-4xl ">
                    35€ pour 40 pièces
                  </h6>
                  <p className="mb-4  font-serif hover:font-sans  text-rose-700">
                    8 pièces de chaque types
                  </p>
                  </div>

          <button
          className={clsx(
            "rounded p-4 mb-10 ",
            "bg-gradient-to-r from-green-200 via-green-400 to-green-500",
            "text-white",
            "hover:bg-gradient-to-l from-green-500 to-green-700",
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

export default SectionSale;
