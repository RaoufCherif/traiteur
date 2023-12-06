
import Image from "next/image";
import Header from "./components/Header";
import trois_plats from "public/trois_plats.jpg";
import Reseau from "./components/Reseau";
import Link from "next/link";
import SectionSale from "./components/SectionSale";
import SectionSucre from "./components/SectionSucre";
import NosRepats from "./components/NosRepats";
import TraditionNouveaute from "./components/TraditionNouveaute";
import NosSpecialite from "./components/NosSpecialite";
import AvisClients from "./components/AvisClients";
import Footer from "./components/Footer";
import LogInButton from "../app/components/LogInButton"


export default function Home() {

  return (
    <main>
      <div className=" flex min-h-screen flex-col justify-start  items-center  ">
        <Image src={trois_plats} alt="background image" fill />

        <Header />

            <div id="accueil_section_1" className=" flex flex-col  justify-around  items-center  ">
              <div id="titre_traiteur" className="flex  flex-col items-center ">

              <h1 className="relative font-serif text-purple-500 hover:font-sans font-bold text-3xl md:text-6xl hover:scale-110 mt-44  ">Traiteur Parisien </h1>
              <h2 className="relative font-serif font-semibold  text-purple-200 text-sm md:text-xl italic " >Lorem ipsum dolor sit amet</h2>
           
            
          </div>
          <div className="flex flex-col items-center">


        <Link href="/dashboard">

          <h1 id="gagner_repas" className="relative font-serif text-purple-500  hover:font-sans   text-6xl hover:scale-110 mb-4 mt-28 ">
            Gagner un repas!
          </h1>

        </Link>
        <Reseau />

<LogInButton />

   

        </div>
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
