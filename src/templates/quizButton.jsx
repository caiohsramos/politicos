import React from 'react'
import { Button } from 'react-bootstrap'

export default props => (
    <Button 
        onClick={props.handleClick} 
        disabled={!props.show}>
        {props.text}
    </ Button>
)