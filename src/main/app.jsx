import React from 'react'
import Menu from '../templates/menu'
import Routes from './routes'
import '../templates/customStyle.css'

export default props => (
    <div className='container'>
        <Menu />
        <Routes />
    </div>
)