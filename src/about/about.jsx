import React from 'react'

import PageHeader from '../templates/pageHeader'
import image from '../images/image1.jpg'
import { Image } from 'react-bootstrap'

export default props => (
    <div>
        <PageHeader title='Sobre' subtitle='' />
        <Image src={image} responsive />
        https://veja.abril.com.br/politica/eleicoes-2018-mapa-das-propostas/
    </div>
)