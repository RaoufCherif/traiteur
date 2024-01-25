import { Button } from '@mui/material'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

function SignUpButton() {
  return (
    <button title="S'inscrire" className="text-gray-300 hover:bg-gray-700 hover:text-white text-md font-medium p-1 "   >
                <a
                    href="inscription">
    <FontAwesomeIcon icon={faUserPlus }  className=' w-5 text-white z-50' />
    </a>
 </button>
  )
}

export default SignUpButton