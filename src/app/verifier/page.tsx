import React from 'react'


function InscriptionMessage() {
  return (
    <div className='h-screen flex flex-col gap-5 justify-center items-center '>
        <h1 className='bg-amber-300 p-4 rounded-lg'> Vous allez recevoir un mail de confirmation, merci de confirmer l'email que vous avez utiliser pour vous s'inscire !  </h1>
        <p>Si vous n'êtes pas à l'origine de cette inscription merci d'ignorer ce message !  </p>
    </div>
  )
}

export default InscriptionMessage