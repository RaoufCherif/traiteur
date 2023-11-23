import Image from "next/image";
import Header from "./components/Header";
import trois_plats from "public/trois_plats.jpg";
import Reseau from "./components/Reseau";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Section2 from "./components/SectionSale";

export default function Home() {
  return (
    <main>
      <div className=" flex min-h-screen flex-col justify-start  items-center  ">
        <Image src={trois_plats} alt="background image" fill />

        <Header />
        {/* <Navbar /> */}
        <Link href="/dashboard">
          <h2 className="relative font-serif hover:font-sans  text-white text-4xl hover:scale-110 mb-4  mt-60">
            Gagner un repas!
          </h2>
        </Link>
        <div className="mt-0">
          <Reseau />
        </div>
      </div>

      <div>
        <Section2 />
      </div>
    </main>
  );
}
