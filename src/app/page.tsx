import Image from 'next/image'
import Header from './components/Header'
import trois_plats from "public/trois_plats.jpg"
import Reseau from './components/Reseau'
import Link from 'next/link'

export default function Home() {
  return (
<main>
    <div className=" flex min-h-screen flex-col justify-start  items-center  gap-4 p-4"
    >
 
  <Image
         src={trois_plats}
         alt="background image"
         fill
                />
                  
  <Header />
  <Link   href="/dashboard">
  <h2 className=
  'relative font-serif hover:font-sans  text-white text-4xl hover:scale-110 mb-4  mt-60'>
    Gagner un repas!
    </h2>
  </Link>
  <div className='mt-0'>
  <Reseau />
  </div>
  
  

 



    </div>
   


    </main>
  )
}
