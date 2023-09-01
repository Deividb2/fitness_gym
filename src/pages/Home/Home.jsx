import React from 'react'
import Cabecalho from '../../assets/componentes/Cabecalho'
import Banner from '../../assets/componentes/Banner'
import Personal from '../../assets/componentes/Personal'
import TreinosExclusivos from '../../assets/componentes/TreinosExclusivos'
import Whatsapp from '../../assets/componentes/Whatsapp'
import Contato from '../../assets/componentes/Contato'
import Rodape from '../../assets/componentes/Rodape'

import Cabecalho2 from '../../assets/componentes/Cabecalho2'
import Conteudo from '../../assets/componentes/Conteudo'

export default function App() {

    return (
        <>
            <Cabecalho />
            <Banner />
            <TreinosExclusivos />
            <Personal />
            <Contato />
            <Whatsapp />
            <Rodape />

            {/* CABEÇALHO E BANNER RESERVA */}
            {/* <Cabecalho2 /> */}
            {/* <Conteudo /> */}
        </>
    )
}