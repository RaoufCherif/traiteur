import React from 'react'
import Image from 'next/image'
import inscriptionImage from "../../../public/inscription_image.jpeg"

function Inscription() {
  return (
    <div className='bg-slate-100'>

<div className='flex flex-raw  justify-center p-48 itmes-center   h-screen      '>
    <section  id='inscription' className='flex flex-col gap-4 w-1/2 p-8 justify-center items-center  bg-gradient-to-r  from-orange-200 to-orange-100  '>

    <div className="flex min-h-full flex-col justify-center  pb-8 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
        <h2 className="my-2 text-center text-2xl font-bold leading-9 tracking-tight text-blue-700 ">Inscrivez-vous</h2>
      </div>
    
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label for="email" className="block text-sm font-medium leading-6 text-blue-700">Email adresse</label>
            <div className="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
    
          <div>
            <div className="flex items-center justify-between">
              <label for="password" className="block text-sm font-medium leading-6 text-blue-700">Mot de passe</label>
             
            </div>
            <div className="mt-2">
              <input id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label for="password" className="block text-sm font-medium leading-6 text-blue-700">Confirmer mot de passe</label>
            </div>
            <div className="mt-2">
              <input id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
    
          <div >
            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Valider</button>
          </div>
        </form>
    
      
      </div>
    </div>
    </section>
<Image
 id='image_rice' 
 src={inscriptionImage} 
  alt="background image"  
 className='w-1/2  '/>

</div>

</div>
  )
}

export default Inscription