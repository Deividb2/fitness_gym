import React from 'react'
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsTelephoneFill } from 'react-icons/bs';

export default function Cabecalho() {

    return (
        <>
            <header className='h-auto bg-black text-white 
                md:h-tamanhoH md:flex md:items-center md:justify-between md:px-10'>

                <h1 className='hidden md:block font-bold text-xl'>FITNESS GYM</h1>
                
                <nav className='flex flex-col items-center gap-3 p-3 font-semibold
                    md:flex-row md:gap-5'>
                    <a href="#">Home</a>
                    <a href="#">Suplementos</a>
                    <a href="#">Planos</a>
                    <a href="#">Quem-somos</a>
                    <a href="#">Contato</a>
                </nav>

                <div className='hidden md:flex gap-3'>
                    <BsInstagram />
                    <BsFacebook />
                    <BsTelephoneFill />
                </div>
            </header>
        </>
    )
}