import React, { useState } from "react";
import { avisClients } from "../../../util/getAvisClients";
import Image from "next/image";
import burgerIa from "../../../public/burger_ia.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import clsx from "clsx";

function AvisClients() {
  const avis = avisClients();
  return (
    <section className="flex flex-col items-center  gap-8 p-0 bg-green-100 ">
      <h2 className="text-2xl my-8"> Ce que disent nos clients</h2>
      <section className="flex flex-col md:flex-col lg:flex-row justify-center gap-6 p-4 ">
        {avis.map((item, index) => {
          let rating = item.rating;
          let ratingNu = (
            <FontAwesomeIcon
              icon={fas.faStar}
              className=" w-3 text-yellow-400 "
            />
          );
          return (
            <div
              key={index}
              className=" flex flex-col items-center justify-center gap-2 "
            >
              <Image
                src={"/" + item.image}
                width={120}
                height="150"
                alt="burger"
              />
              <ul className="flex flex-raw gap-1 ">
                {[...Array(rating)].map((_, i) => (
                  <li key={i}>{ratingNu}</li>
                ))}
              </ul>
              <h4
                className="font-serif hover:font-sans  text-black text-lg"
                key={index}
              >
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </h4>
              <p className="font-sans  text-black text-sm w-fit p-2">
                {item.avis}
              </p>
            </div>
          );
        })}
      </section>

      <h3 className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-1 rounded-xl ">
        Laisser un avis
      </h3>

      <section className="w-full h-fit bg-[url('../../public/tagine.png')]">
        {/* <div className="flex flex-col bg-gradient-to-r from-orange-700 to-orange-500  w-1/2 justify-center items-center ">
          <div className=" mt-0 mb-16 flex flex-col items-center justify-center">
            <h6 className="text-white">
              {" "}
              Notre objectif est de vous satisfaire
            </h6>
            <p className="text-white text-xs "> Chaque avis compte!</p>
          </div>
          <form action={""} className={clsx("flex flex-col gap-4")}>
            <label className="text-white">Rate :</label>
            <input
              type="number"
              name="rate"
              id="rate"
              placeholder=""
              min={0}
              max={5}
              className={clsx(
                "border-transparent border-b-amber-900 bg-transparent text-white",
                " hover:border-transparent  ",
                "placeholder:text-gray-500",
              )}
              required
            />

            <label className="text-white">Avis :</label>
            <textarea
              name="avis"
              id="avis"
              placeholder=""
              className={clsx(
                "placeholder:text-gray-500",
                "border-transparent border-b-amber-900 bg-transparent text-white",
              )}
              required
            />

            <div className="flex flex-raw gap-2 justify-center justify-between">
              <Button type="submit" variant="contained" className="mt-4">
                Valider
              </Button>
            </div>
          </form>
        </div> */}
        {/* <div className="">
          <Image src={burgerIa} alt="spagiti" />
        </div> */}
      </section>
    </section>
  );
}

export default AvisClients;
