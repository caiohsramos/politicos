import React, { Component } from 'react'
import { Button, Radio } from 'react-bootstrap'
import { RadioGroup } from 'react-radio-group'

import answers from './answers'

export default class Tema extends Component {

    renderLines = (counter = 0) => (
        answers[this.props.n-1].map(x =>(
            <div key={counter++}>
            <Radio value="" />{x.text}
            </div>)
        )
    )
    
    render () {
        return (
            <div>
                <RadioGroup>
                    {this.renderLines()}
                </RadioGroup>
                <Button bsStyle='primary' onClick={() => this.props.handleAnswer(null)}>Próximo</Button>
            </div>
        )
    }
}



