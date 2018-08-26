import React from 'react'

import PageHeader from '../templates/pageHeader'
import image from '../images/image1.jpg'
import { Image } from 'react-bootstrap'

export default props => (
    <div>
        <PageHeader title='Sobre' subtitle='' />
        <h2>Opções</h2>
        <p>As opções disponibilizadas no quiz foram selecionadas de acordo com o mapa das propostas retirado da matéria abaixo.</p>
        <h2>Resultado</h2>
        <p>O resultado apresentado não tem qualquer relação com a realidade, dado que as pontuações foram selecionadas de acordo com a interpretação dos criadores.</p>
        <h2>Motivação</h2>
        <p>Conteúdo criado com foco no aprendizado dos desenvolvedores.</p>
        <Image src={image} responsive height="5" width="5" />
        <a href="https://veja.abril.com.br/politica/eleicoes-2018-mapa-das-propostas/">Mapa das propostas</a>
    </div>
)