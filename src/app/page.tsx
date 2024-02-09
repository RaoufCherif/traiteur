import Image from "next/image";
import Header from "./components/Header";
import cookies from "public/cookies.png";

import SectionSale from "./components/SectionSale";
import SectionSucre from "./components/SectionSucre";
import Patisserie from "./components/Patisserie";
import TraditionNouveaute from "./components/TraditionNouveaute";
import NosSpecialite from "./components/NosSpecialite";
import restaurant from "public/restaurant.png";
import AvisClients from "./components/AvisClients";
import Footer from "./components/Footer";
import clsx from "clsx";
import NosValeurs from "./components/NosValeurs";

export default function Home() {
  return (
    <main>
      <div
        className={clsx(
          " flex min-h-screen",
          "flex-col justify-start  items-center  ",
        )}
      >
        <Image
          src={restaurant}
          alt="background image"
          fill
        />
        <Header />
        <div className=" flex flex-col  justify-around  items-center  "></div>
      </div>
      <SectionSale />
      <SectionSucre />
      <Patisserie />
      <TraditionNouveaute />
 
      <NosSpecialite />
      <NosValeurs />
      <AvisClients />
      <Footer />
    </main>
  );
}
