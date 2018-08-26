import React from 'react'
import { Button } from 'react-bootstrap'

export default props => (
    <Button 
        onClick={props.handleClick} 
        disabled={!props.show}
        bsClass='btn btn-default space-top'>
        {props.text}
    </ Button>
)