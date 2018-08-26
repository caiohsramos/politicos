import React from 'react'
import Menu from '../templates/menu'
import Routes from './routes'
import Footer from '../templates/footer'

export default props => (
    <div className='container'>
        <Menu />
        <Routes />
        <Footer />
    </div>
)