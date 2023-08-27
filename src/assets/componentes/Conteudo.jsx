import React from 'react'

export default function App() {

    return (
        <>
            <section className='h-screen flex flex-col gap-10 justify-center items-center bg-imgFundo bg-no-repeat bg-center bg-cover text-white p-5'>
                <h2 className='italic font-semibold text-center text-2xl'>- "Não faça musculação porque você odeia seu corpo, mas, sim, porque você o ama!"</h2>
                <div className='flex flex-col gap-3 md:flex-row md:gap-12'>
                    <a href="#" className='border-2 rounded-md px-5 py-2 uppercase w-64 text-center'>Agendar aula experimental</a>
                    <a href="#" className='border-2 rounded-md px-5 py-2 uppercase w-64 text-center'>Contratar personal trainer</a>
                </div>
            </section>
        </>
    )
}