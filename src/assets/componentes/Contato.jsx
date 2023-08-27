import React from 'react'

export default function Contato() {

    return (
        <>
            <section className='p-2'>
                <h2 className='font-bold font-raleway text-center text-2xl text-preto-100 uppercase my-3'>Contato</h2>

                <div className='flex flex-col items-center md:flex-row gap-2'>
                    <form className='flex flex-col w-11/12 gap-1 md:w-8/12'>
                        <input type="text" name="nome" placeholder='Digite seu nome*' className='px-4 py-2 rounded-sm outline-none' required />
                        <input type="email" name="email" placeholder='Digite seu email*' className='px-4 py-2 rounded-sm outline-none' required />
                        <textarea name="mensagem" placeholder='Escreva sua mensagem' className='px-4 py-2 rounded-sm resize-none outline-none h-28'></textarea>
                        <input type="submit" value="Enviar" className='bg-preto-100 hover:bg-preto-400 transition-all ease-linear delay-100 text-white py-2 font-bold' />
                    </form>

                    <div className='w-11/12 md:w-8/12 md:self-start md:h-60'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58792.139375715386!2d-43.315058753142246!3d-22.931484929129237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e1b4bfbdacd%3A0x4a4d38d7dbf91618!2sTijuca%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-PT!2sbr!4v1692836505991!5m2!1spt-PT!2sbr"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className='w-full md:h-full'
                        ></iframe>
                    </div>
                </div>
            </section>
        </>
    )
}