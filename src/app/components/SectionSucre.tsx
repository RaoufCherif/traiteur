import React from "react";
import Image from "next/image";
import mini_sucre from "../../../public/mini_sucre_ia_1.png";
import clsx from "clsx";

import { fetchSucre } from "../../../util/getSucres";

function SectionSucre() {
  let data = fetchSucre();
  return (
    <main className="bg-gradient-to-t from-green-200 via-red-100 to-green-400">
    <section className="relative  " id="sectionSucre">
      <div className="flex justify-center bg-[url('../../public/cookies.png')] bg-no-repeat bg-cover min-h-screen min-w-screen ">
        <h2 className="my-8  font-serif hover:font-sans   text-4xl ">
  
          Mini Sucrés Faits Maison
        </h2>

        </div>
</section>
    
    <section>
      <div className=" flex flex-col items-center  ">
        <h2 className="mt-12  font-serif hover:font-sans  text-rose-700 text-4xl ">
          {" "}
          Cinq types de sucrés
        </h2>
        <h6 className="mb-20  font-serif hover:font-sans  text-rose-700  ">
          {" "}
          DANS CHAQUE PLATEAU
        </h6>

        <div className="flex flex-raw gap-10 mb-12">
          {data.map((item, index) => {
            return (
              //  <li key={index}>{item}</li>

              <div key={index} className=" flex flex-col items-center gap-4">
                <h4 className="font-serif hover:font-sans  text-red-600 text-lg">
                  {item.name}
                </h4>
                <Image
                  src={"/" + item.image}
                  width="170"
                  height="150"
                  alt="burger"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className=" mt-10 flex flex-col  items-center">
        <h2 className=" font-serif hover:font-sans  text-rose-700 text-4xl ">
          35€ pour 40 pièces
        </h2>
        <h6 className="mb-8  font-serif hover:font-sans text-rose-700 ">
          8 pièces de chaque types
        </h6>
        <button
          className={clsx(
            "rounded  p-4 mb-12",
            "bg-gradient-to-r from-green-200 via-green-400 to-green-500 ",
            "hover:bg-gradient-to-l from-green-500 to-green-700",
            "text-white",
          )}
        >
          Commander
        </button>
      </div>
    </section>

    </main>
  );
}

export default SectionSucre;
