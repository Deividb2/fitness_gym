import React from 'react'
import { Link } from 'react-router-dom'

export default function Cabecalho() {

    return (
        <>
            <header className='h-auto flex flex-col items-center py-5 font-inter bg-preto-100
                lg:h-14 lg:flex-row lg:justify-between lg:px-10'>
                <h1 className='hidden lg:block font-bold text-xl uppercase text-amarelo-100'>fitness gym</h1>
                <nav>
                    <ul className='flex flex-col gap-6 items-center uppercase font-bold rounded-sm text-branco-100
                        lg:flex-row lg:h-12 lg:gap-0'>
                        <li className='flex items-center h-full px-4 hover:underline text-amarelo-100'>
                            <Link to='/'>Home</Link>                        
                        </li>

                        <li className='flex items-center h-full px-4 hover:underline text-branco-500'>
                            <Link to='/servicos'>Serviços</Link>
                        </li>
                        
                        <li className='flex items-center h-full px-4 hover:underline text-branco-500'><a href="#">Unidades</a></li>
                        <li className='flex items-center h-full px-4 hover:underline text-branco-500'><a href="#">Contato</a></li>
                        <li className='flex items-center h-full px-4 hover:underline text-branco-500'><a href="#">Seja um franqueado</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}