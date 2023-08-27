import React from 'react'
import { FaBatteryFull, FaBatteryHalf } from 'react-icons/fa'
import { BsEmojiWink } from 'react-icons/bs'

function intencidadeIcone(chave) {
    if (chave === 'Alta') {
        return (
            <FaBatteryFull />
        )
    } else {
        return (
            <FaBatteryHalf />
        )
    }
}

function backgroundImg(img) {
    if (img === 'imgMusculacao') {
        return 'w-full h-alturaImgCard rounded-t-lg bg-imgMusculacao bg-no-repeat bg-top bg-cover'
    } else if (img === 'imgCardio') {
        return 'w-full h-alturaImgCard rounded-t-lg bg-imgCardio bg-no-repeat bg-top bg-cover'
    } else if (img === 'imgBoxe') {
        return 'w-full h-alturaImgCard rounded-t-lg bg-imgBoxe bg-no-repeat bg-center bg-cover'
    } else if (img === 'imgGinastica') {
        return 'w-full h-alturaImgCard rounded-t-lg bg-imgGinastica bg-no-repeat bg-center bg-cover'
    }
}


function Treinos({ aula }) {
    return (
        <>
            <div className='w-larguraCard font-inter bg-preto-600 flex flex-col gap-3 rounded-lg sm:w-96 lg:w-larguraCard border-4 border-preto-100 '>
                <div className='bg-preto-100'>
                    <div className={backgroundImg(aula.imgSrc)}></div>

                    <div className='p-3'>
                        <h3 className='text-3xl font-bold font-oswald uppercase text-center text-amarelo-100'>{aula.titulo}</h3>
                    </div>
                </div>

                <div className='p-4 h-tamanhoCardTreino flex flex-col gap-7 justify-between'>
                    <div className='flex items-center justify-between'>
                        <div className='flex flex-col items-center'>
                            <div>
                                {intencidadeIcone(aula.intensidade)}
                            </div>
                            <h4 className='font-semibold'>Intensidade</h4>
                            <span>{aula.intensidade}</span>
                        </div>

                        <div className='flex flex-col items-center'>
                            <BsEmojiWink />
                            <h4 className='font-semibold'>Complexidade</h4>
                            <span>{aula.complexidade}</span>
                        </div>
                    </div>
                    <p className='text-sm text-preto-100 justify-self-start'>{aula.descricao}</p>
                    <div className='mt-auto self-center'>
                        <button className='font-bold hover:text-amarelo-100 transition-all ease-linear delay-100'>Saiba mais</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default function App() {

    const card = [
        {
            imgSrc: 'imgMusculacao',
            titulo: 'Musculação',
            intensidade: 'Alta',
            complexidade: 'Baixa',
            // descricao: 'Oferecemos um ambiente com equipamentos de última geração para você alcançar seus objetivos. Nossos treinadores especializados irão criar programas personalizados que se adaptam ao seu nível de condicionamento e metas individuais. Nossa academia é o lugar ideal para você conquistar um corpo mais forte, saudável e confiante. Venha se desafiar, se superar e transformar seu corpo na academia que acredita no seu potencial.'
            descricao: 'Nossa academia é o lugar ideal para você conquistar um corpo mais forte, saudável e confiante. Venha se desafiar, se superar e transformar seu corpo na academia que acredita no seu potencial.'
        },
        {
            imgSrc: 'imgCardio',
            titulo: 'Cardio',
            intensidade: 'Moderada',
            complexidade: 'Baixa',
            descricao: 'Prepare-se para elevar seus batimentos cardíacos, queimar calorias e conquistar uma resistência incrível. Experimente a intensidade do cardio na FITNESS GYM e embarque em uma jornada emocionante em direção à melhor versão de si mesmo.'
        },
        {
            imgSrc: 'imgBoxe',
            titulo: 'Boxe',
            intensidade: 'Alta',
            complexidade: 'Baixa',
            descricao: 'Nossos instrutores estão prontos para guiá-lo através de treinamentos envolventes, projetados para melhorar sua coordenação e autodisciplina. Desperte o pugilista interior em você e junte-se a nós para uma jornada emocionante rumo à forma física e à confiança inabalável.'
        },
        {
            imgSrc: 'imgGinastica',
            titulo: 'Ginástica',
            intensidade: 'Moderada',
            complexidade: 'Baixa',
            descricao: 'Junte-se a nós hoje e descubra como a ginástica pode transformar seu corpo, mente e atitude de forma inspiradora. Sua jornada começa aqui, na nossa academia comprometida com seu sucesso.'
        }
    ]



    return (
        <>
            <section className='min-h-screen flex flex-col items-center gap-10 py-10 bg-branco-100'>
                <h2 className='font-bold text-2xl uppercase text-preto-100'>Aulas e treinos exclusivos</h2>

                <div className='flex flex-col md:flex-row md:justify-center md:flex-wrap gap-5'>
                    {card.map((elemento, index) => <Treinos key={index} aula={elemento} />)}
                </div>

                <button className='font-bold bg-preto-500 hover:bg-preto-100 transition-all ease-linear delay-100 text-white py-3 px-14 rounded-full 
                    sm:py-6 sm:px-32 lg:py-3 lg:px-28'>Começar agora</button>
            </section>
        </>
    )
}