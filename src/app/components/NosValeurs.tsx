import React from "react";
import Image from "next/image";

import exp from "../../../public/icones/exp.png";
import qualite from "../../../public/icones/qualitative.png";
import gout from "../../../public/icones/gout.png";
import service from "../../../public/icones/service.png";
const NosValeurs = () => {
  return (
    <main className="mb-24">
      <section>
        <div className="flex justify-center ">
          <h2 className="font-serif hover:font-sans text-slate-900 text-4xl  my-8">
            Nos valeurs
          </h2>
        </div>
      </section>

      <section className="  flex flex-raw justify-center max-w-4xl">
        {/* <Image src={man} width={100} height={100} alt="smart man" /> */}
      </section>
      <section className="mt-8 ">
        <div className="  grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4  ml-8 mr-8 ">
          <div className="flex flex-col items-center gap-6 m-2 p-4  ">
            <h3 className="text-slate-800 text-xl underline">
              Meilleur Qualité
            </h3>

            <div className="flex flex-col gap-4 border-solid border-8 border-green-700  bg-white  p-8 hover:bg-[url('../../public/soumon_concombre.jpg')]">
              <div className="flex justify-center">
                <Image src={qualite} width={60} height={0} alt={""} />
              </div>
              <p className="text-slate-900  hover:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 m-2 p-4 ">
            <h3 className="text-slate-800 text-xl underline">
              Meilleur Service
            </h3>

            <div className="flex flex-col gap-4 border-solid border-8 border-teal-500  bg-white  p-8 hover:bg-[url('../../public/pain_soumon.jpg')]">
              <div className="flex justify-center">
                <Image src={service} width={60} height={0} alt={""} />
              </div>

              <p className="text-slate-900   hover:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 m-2 p-4 ">
            <h3 className="text-slate-800  text-xl underline">
              {" "}
              Meilleur Goût
            </h3>
            <div className="flex  flex-col border-solid border-8 border-orange-500  bg-white  p-8  gap-4  hover:bg-[url('../../public/mini_pizza.jpg')]">
              <div className="flex justify-center">
                <Image src={gout} width={60} height={0} alt={""} />
              </div>
              <p className="text-slate-900   hover:text-white ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6  m-2 p-4 ">
            <h3 className="text-slate-800  text-xl underline ">
              {" "}
              Meilleur Experience
            </h3>

            <div className="flex flex-col gap-4  border-solid  border-8 border-rose-900  bg-white  p-8 hover:bg-[url('../../public/tagine.png')]  hover:text-black min-h-7 ">
              <div className="flex justify-center">
                <Image src={exp} width={60} height={0} alt={""} />
              </div>
              <p className="text-slate-900 hover:text-white  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NosValeurs;
