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
          className=" flex flex-col  justify-around  items-center  "
        >
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
