import React from 'react'
import ImgItalo from '../imgs/italo_melo.jpg'
import ImgKarolina from '../imgs/karolina_grabowska.jpg'
import ImgMihail from '../imgs/mikhail_nilov.jpg'
import ImgMonstera from '../imgs/monstera.jpg'
import ImgSandro from '../imgs/sandro_tavares.jpg'

const Treiners = ({personal}) => {
    return (
        <div className='sm:h-72 sm:w-56 flex flex-col justify-center items-center gap-5'>
                <img src={personal.foto} className='w-36 h-36 border-4 border-amarelo-100 rounded-full
                            md:w-40 md:h-40 bg-imgItalo bg-no-repeat bg-center bg-cover'></img>
            <p className='text-center h-24'>{personal.descricao}</p>
        </div>
    )
}

export default function Personal() {
    const profissionais = [
        {
            foto: ImgItalo,
            descricao: 'Além do treinamento físico, oferece orientação nutricional e coaching para ajudar os clientes a alcançar seus objetivos de saúde e bem-estar.'
        },
        {
            foto: ImgKarolina,
            descricao: 'Especializada em treinamento de Yoga e Pilates, focando no fortalecimento do corpo, equilíbrio, flexibilidade e bem-estar mental.'
        },
        {
            foto: ImgMihail,
            descricao: 'Especializada em ajudar os mais diversos clientes a atingir seus objetivos de perda de peso por meio de treinamento físico e orientação nutricional.'
        },
        // {
        //     foto: ImgMonstera,
        //     descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
        // },
        {
            foto: ImgSandro,
            descricao: 'Especializado em treinamento de força e ganho muscular. Trabalha com levantamento de peso e resistência para te ajudar a desenvolver músculos e melhorar a composição corporal.'
        },
    ]

    return (
        <>
            <section className='h-auto bg-preto-100 flex flex-col items-center gap-10 py-20 px-20 sm:px-40'>
                <h2 className='text-2xl text-amarelo-100 font-bold font-raleway'>Conheça alguns dos nossos personal trainers</h2>

                <div className='flex flex-col gap-20 pb-4 sm:gap-5 md:flex-row md:flex-wrap md:justify-center font-raleway text-branco-300'>
                    {profissionais.map((elemento, index) => <Treiners key={index} personal={elemento} />)}
                </div>
            </section>
        </>
    )
}