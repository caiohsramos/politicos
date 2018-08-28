import React from 'react'

import PageHeader from '../templates/pageHeader'
import CardsView from './cardsView'

export default props => (
    <div className='container'>
        <PageHeader title='Políticos' subtitle='Presidência' />
        <CardsView />
    </div>
)