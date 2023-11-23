import React from 'react'
import Image from 'next/image'
import resaeu from 'public/reseau.png'

const Reseau = () => {
  return (
    <Image  
    src={resaeu}
    alt="background image"
    width={200}
    height={200}
    className="relative cursor-pointer rounded-2xl transition ease-in-out p-1  hover:scale-110
    focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 
    focus:ring-offset-gray-800 	 "
     />
  
  
  )
}

export default Reseau