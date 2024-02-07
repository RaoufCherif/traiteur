import React from "react";
import Image from "next/image";
import palm from "../../../public/palm.jpg";
import snack from "../../../public/mixt_sale_ia.png";

function TraditionNouveaute() {
  return (
    <section
      className="  flex flex-col justify-center items-center p-12 "
      id="traditionnel"
    >
      <h2 className="p-4 m-16 font-serif hover:font-sans  text-green-700 text-4xl ">
        {" "}
        Traditionnel
      </h2>
      <div className="mb-16 flex flex-row max-w-4xl">
        <Image
          id="image_rice"
          src={palm}
          alt="background image"
          className=" w-72 rounded-xl "
        />
        <Image
          src={snack}
          alt="background image"
          className="absolute w-1/6 h-1/4 rounded-xl ml-12 mt-24"
        />
        <div>
          <div className="flex flex-col  items-center  gap-4 ml-32 p-4 ">
            <h2 className="z-50 text-green-700">HMISS & GALETTE</h2>
            <br />
            <p className="z-50 text-green-700">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              molestias id exercitationem? Officiis, error dolores libero
              accusantium voluptates laboriosam dignissimos, blanditiis quae
              tempore sapiente magni! Molestias rerum exercitationem repellat
              obcaecati?
            </p>
            <br />
            <h6 className="text-green-800 text-xl">
              10€ pour une portion de Hmiss & une galette{" "}
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TraditionNouveaute;
