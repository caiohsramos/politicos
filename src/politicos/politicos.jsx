import React from 'react'

import PageHeader from '../templates/pageHeader'
import CardsView from './cardsView'

export default props => (
    <div>
        <PageHeader title='Políticos' subtitle='Presidência' />
        <div className='container'>
        <CardsView />
        </div>
    </div>
)