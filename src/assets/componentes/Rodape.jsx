import React from 'react'
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsTelephoneFill } from 'react-icons/bs';

export default function Rodape() {

    return (
        <>
            {/* CELULAR E TABLET */}
            <footer className='lg:hidden h-tamanhoH bg-preto-100 text-white flex justify-start items-center px-10 w-screen'>
                <div className='flex items-center gap-4'>
                    <BsInstagram />
                    <BsFacebook />
                    <BsTelephoneFill />
                </div>
                <h2 className='text-center flex-1 font-raleway'>FITNESS GYM</h2>
            </footer>
            
            {/* DESKTOP */}
            <footer className='hidden lg:flex lg:justify-around lg:px-10 lg:py-5 lg:mt-10 lg:bg-preto-100 text-branco-100'>
                <nav className='lg:flex lg:gap-5 lg:pr-36 lg:border-r-2 lg:border-amarelo-100 border-black'>
                    <div className='lg:flex flex-col gap-3'>
                        <h3 className='lg:font-bold lg:text-amarelo-100'>A FITNESS GYM</h3>
                        <ul>
                            <li><a href="#">Conheça a Fitness GYM</a></li>
                            <li><a href="#">Planos</a></li>
                        </ul>
                    </div>

                    <div className='lg:flex flex-col gap-3'>
                        <h3 className='lg:font-bold lg:text-amarelo-100'>Horários</h3>
                        <ul>
                            <li><a href="#">Grade de horários</a></li>
                            <li><a href="#">Plantões</a></li>
                        </ul>
                    </div>

                    <div className='lg:flex flex-col gap-3'>
                        <h3 className='lg:font-bold lg:text-amarelo-100'>Modalidades</h3>
                        <ul>
                            <li><a href="#">Musculação</a></li>
                            <li><a href="#">Lutas</a></li>
                            <li><a href="#">Crossfit</a></li>
                            <li><a href="#">Dança</a></li>
                            <li><a href="#">Natação</a></li>
                            <li><a href="#">Ginástica</a></li>
                        </ul>
                    </div>

                    <div className='lg:flex flex-col gap-3'>
                        <h3 className='lg:font-bold lg:text-amarelo-100'>Unidades</h3>
                        <ul>
                            <li><a href="#">Barra da Tijuca</a></li>
                            <li><a href="#">Centro RJ</a></li>
                            <li><a href="#">Conde de Bonfim</a></li>
                            <li><a href="#">Triagem</a></li>
                            <li><a href="#">Benfica</a></li>
                        </ul>
                    </div>

                    <div className='lg:flex flex-col gap-3'>
                        <h3 className='lg:font-bold lg:text-amarelo-100'>Serviços</h3>
                        <ul>
                            <li><a href="#">Personal Trainer</a></li>
                            <li><a href="#">Festas</a></li>
                            <li><a href="#">Convênio</a></li>
                        </ul>
                    </div>

                    <div className='lg:flex flex-col gap-3'>
                        <h3 className='lg:font-bold lg:text-amarelo-100'>Políticas</h3>
                        <ul>
                            <li><a href="#">Política de Privacidade</a></li>
                            <li><a href="#">Política de Cookies</a></li>
                            <li><a href='#'>Termos de uso</a></li>
                            <li><a href='#'>Dúvidas frequentes</a></li>
                        </ul>
                    </div>
                </nav>

                <div className='lg:flex lg:flex-col lg:items-center gap-4'>
                    <h3 className='lg:font-bold lg:text-amarelo-100'>REDES</h3>
                    <div className='lg:flex lg:gap-2'>
                        <BsInstagram className='lg:text-2xl' />
                        <h4>Instagram</h4>
                    </div>

                    <div className='lg:flex lg:gap-2'>
                        <BsFacebook className='lg:text-2xl'  />
                        <h4>Facebook</h4>
                    </div>

                    <div className='lg:flex lg:gap-2'>
                        <BsTelephoneFill className='lg:text-2xl' />
                        <h4>Telefone</h4>
                    </div>
                </div>
            </footer>
        </>
    )
}