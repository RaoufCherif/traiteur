import React from "react";
import Image from "next/image";
import mini_sucre from "../../../public/mini_sucré.jpeg";
import mini_burger from "../../../public/mini_burger.jpg";
import mini_rols from "../../../public/mini_rol.jpg";
import mini_piza from "../../../public/mini_pizza.jpg";
import mini_brics from "../../../public/mini_brics.jpeg";
import clsx from "clsx";

import { fetchSucre } from "../../../util/getSucres";


function SectionSucre() {
  let data = fetchSucre();
  return (
    <section className=" bg-green-100 ">
      <div className="flex flex-col  items-center">
        <h2 className="my-14  font-serif hover:font-sans  text-rose-400 text-4xl ">
          {" "}
          Mini Sucrés Faits Maison
        </h2>

        <Image
          src={mini_sucre}
          width="1977"
          height="459"
          alt="background image"
        />
        <h2 className="mt-20  font-serif hover:font-sans  text-rose-400 text-4xl ">
          {" "}
          Cinq types de sucrés
        </h2>
        <h6 className="mb-20  font-serif hover:font-sans  text-rose-500  ">
          {" "}
          DANS CHAQUE PLATEAU
        </h6>

        <div className="flex flex-raw gap-10 mb-20">
          {data.map((item, index) => {
            return (
              //  <li key={index}>{item}</li>
              <>
                <div className=" flex flex-col items-center gap-4">
                  <h4
                    className="  font-serif hover:font-sans  text-rose-400 text-lg"
                    key={index}
                  >
                    {item.name}
                  </h4>
                  <Image
                    src={"/" + item.image}
                    width="170"
                    height="150"
                    alt="burger"
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className=" mt-10 flex flex-col  items-center">
        <h2 className=" font-serif hover:font-sans  text-rose-400 text-4xl ">
          35€ pour 40 pièces
        </h2>
        <h6 className="mb-20  font-serif hover:font-sans text-rose-400 ">
          8 pièces de chaque types
        </h6>
        <button
          className={clsx(

            "rounded  p-4 mb-10",
            "bg-gradient-to-r from-green-200 via-green-400 to-green-500 ",
            "hover:bg-gradient-to-l from-green-500 to-green-700",
            "text-white",
            
          )}
        >
          Commander
        </button>
      </div>
    </section>
  );
}

export default SectionSucre;
