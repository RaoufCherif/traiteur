
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

export default function Home() {

  return (
    <main>
      <div className=" flex min-h-screen flex-col justify-start  items-center  ">
        <Image src={trois_plats} alt="background image" fill />

        <Header />

            <div id="accueil_section_1" className=" flex flex-col  justify-around  items-center  ">
              <div id="titre_traiteur" className="flex  flex-col items-center ">
<<<<<<< HEAD
              <h1 className="relative font-serif text-purple-500 hover:font-sans text-7xl hover:scale-110 mt-80  ">Traiteur Parisien </h1>
              <h6 className="relative font-serif text-purple-300" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officiis vitae quod omnis earum.</h6>
=======
              <h1 className="relative font-serif text-purple-500 hover:font-sans text-7xl hover:scale-110 mt-44  ">Traiteur Parisien </h1>
              <h6 className="relative font-serif  text-purple-200 text-xl" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officiis vitae quod omnis earum.</h6>
>>>>>>> 5de0a80 (readme)
            
          </div>
          <div className="flex flex-col items-center">


        <Link href="/dashboard">
<<<<<<< HEAD
          <h4 id="gagner_repas" className="relative font-serif text-purple-700  hover:font-sans   text-xl hover:scale-110 mb-2 mt-28 ">
            Suivez-nous pour gagner un repas!
          </h4>
=======
          <h1 id="gagner_repas" className="relative font-serif text-purple-500  hover:font-sans   text-6xl hover:scale-110 mb-4 mt-28 ">
            Gagner un repas!
          </h1>
>>>>>>> 5de0a80 (readme)
        </Link>
        <Reseau />



         
   

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
