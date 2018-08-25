import React from 'react'

import PageHeader from '../templates/pageHeader'

export default props => {
    switch(props.progress) {
        case 0:
            return (<PageHeader title='Quiz' subtitle='Introdução' />)
            break
        case props.N+1:
            return (<PageHeader title='Quiz' subtitle='Resultado' />)
            break
        default:
            return (<PageHeader title='Quiz' subtitle={`Tema da pergunta ${props.progress}`} />)

    }
}