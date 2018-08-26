import React from 'react'

import PageHeader from '../templates/pageHeader'

const temas = [
    'Privatizações',
    'Reforma Trabalhista',
    'Política Econômica',
    'Previdência',
    'Gastos Públicos',
    'Segurança Pública'
]

export default props => {
    switch(props.progress) {
        case 0:
            return (<PageHeader title='Quiz' subtitle='Introdução' />)
        case props.N+1:
            return (<PageHeader title='Quiz' subtitle='Resultado' />)
        default:
            return (<PageHeader title='Quiz' subtitle={`Tema: ${temas[props.progress-1]}`} />)

    }
}