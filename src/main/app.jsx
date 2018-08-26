import React from 'react'
import Menu from '../templates/menu'
import Routes from './routes'
import Footer from '../templates/footer'

import '../templates/customStyle.css'

export default props => (
    <div className='content'>
    <div className='container'>
        <Menu />
        <div className='conteiner'>
        <Routes />
        </div>
        <Footer />
    </div>
    </div>
)