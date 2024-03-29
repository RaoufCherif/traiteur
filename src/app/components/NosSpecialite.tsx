import React from "react";
import Image from "next/image";
import chef from "../../../public/chef_souriant.png";
import sucre from "../../../public/gateau_mauve.jpg";
import snak from "../../../public/snack1.png";
import couscous from "../../../public/couscous.jpg";
function NosSpecialite() {
  return (
    <>
      <div className="bg-sky-100  p-4">
        <div className="bg-sky-100 flex flex-col items-center m-4 p-8">
          <section>
            <h2 className=" flex justify-center p-4 mb-12 text-3xl font-serif hover:font-sans">
              {" "}
              Nos spécialités
            </h2>
          </section>
          <section className="flex md:flex-row gap-12 mb-8 justify-center flex-col">
            <div className="flex flex-col  bg-black justify-between items-center p-4 w-52 h-72">
              <h3 className="text-white m-2">Traditionnel</h3>
              <Image
                src={couscous}
                alt="chef"
                className="rounded-xl  h-48  hover:animate-shake"
              />
              <button className="text-white m-4 hover:animate-bounce">
                Découvrir
              </button>
            </div>
            <div className="flex flex-col  bg-black justify-between items-center  p-4 w-52 h-72 ">
              <h3 className="text-white m-2">Buffets </h3>
              <Image
                src={snak}
                alt="chef"
                className="rounded-xl  h-48 hover:animate-jump-out"
              />
              <button className="text-white m-4 hover:animate-bounce">
                Découvrir
              </button>
            </div>
            <div className="flex flex-col  bg-black justify-between items-center p-4  w-52 h-72 ">
              <h3 className="text-white m-2">Gâteaux </h3>
              <Image
                src={sucre}
                alt="chef"
                className="rounded-xl  h-4/6 hover:animate-pulse "
              />
              <button className="text-white m-4  hover:animate-bounce">
                Découvrir
              </button>
            </div>
          </section>

          <section className="flex md:flex-row flex-col gap-8 bg-black justify-center w-fit">
            <div className="m-8">
              <Image src={chef} width={1120} alt="chef" />
            </div>

            <div className="flex flex-col gap-2 items-center m-4">
              <h2 className="text-white m-2">
                Nous nous adaptons à vos besoin
              </h2>
              <p className="text-white mt-4">
                Si vous avez des restrictions alimentaires, nous pouvons vous
                fournir des recettes adaptées à vos besoins. Nous pouvons
                également vous aider à trouver des alternatives aux ingrédients
                que vous ne pouvez pas manger.
              </p>

              <p className="text-white mt-4">
                Nous pouvons également nous adapter à vos besoins en termes de
                temps et de budget. Si vous êtes pressé, nous pouvons vous
                fournir des recettes rapides et faciles à préparer. Si vous avez
                un budget limité, nous pouvons vous fournir des recettes
                économiques.
              </p>

              <p className="text-white mt-4">
                Enfin, nous pouvons nous adapter à vos préférences personnelles
                en termes de goût et de texture. Si vous aimez les aliments
                épicés, nous pouvons vous fournir des recettes épicées. Si vous
                aimez les aliments sucrés, nous pouvons vous fournir des
                recettes sucrées.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default NosSpecialite;
