import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'

export default function Whatsapp() {

    return(
        <>
            <div className='w-whatsapp h-whatsapp bg-whatsapp flex justify-center items-center
                fixed right-4 bottom-5 rounded-full text-white text-2xl'>
                <BsWhatsapp /> 
            </div>
        </>
    )
}