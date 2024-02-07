import Image from "next/image";
import Header from "./components/Header";
import cookies from "public/cookies.png";

import SectionSale from "./components/SectionSale";
import SectionSucre from "./components/SectionSucre";
import NosRepats from "./components/NosRepats";
import TraditionNouveaute from "./components/TraditionNouveaute";
import NosSpecialite from "./components/NosSpecialite";
import AvisClients from "./components/AvisClients";
import Footer from "./components/Footer";
import clsx from "clsx";

export default function Home() {
  return (
    <main>
      <div
        className={clsx(
          " flex min-h-screen",
          "flex-col justify-start  items-center  ",
        )}
      >
        <Image src={cookies} alt="background image" fill />
        <Header />
        <div
          id="accueil_section_1"
          className=" flex flex-col  justify-around  items-center  "
        >
          {/* <div id="titre_traiteur" className="flex  flex-col items-center ">
            <h1
              className={clsx(
                "relative font-serif text-white",
                "hover:font-sans font-bold text-3xl md:text-2xl hover:scale-110   ",
              )}
            >
              Five Stars Traiteur
            </h1>
            <p className="relative font-serif font-semibold  text-purple-200 text-sm  italic ">
              Lorem ipsum dolor sit amet
            </p>
          </div> */}
          {/* <div className="flex flex-col items-center mt-[40vh]">
            <Link href="/dashboard">
              <h6
                id="gagner_repas"
                className="relative font-serif text-purple-500  hover:font-sans   text-l hover:scale-110 mb-4  "
              >
                Suivez-nous pour gagner un repas!
              </h6>
            </Link>
            <Reseau />
          </div> */}
        </div>
      </div>
      <SectionSale />
      <SectionSucre />
      <NosRepats />
      <TraditionNouveaute />
      <NosSpecialite />
      <AvisClients />
      <Footer />
    </main>
  );
}
