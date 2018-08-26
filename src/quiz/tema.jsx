import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { RadioGroup, Radio } from 'react-radio-group'

import answers from './answers'

export default class Tema extends Component {
    constructor(props) {
        super(props)
        this.state = {selectedValue: 0}
    }
    
    handleChange = (value) => {
        
        this.setState({selectedValue: value})
    }

    renderLines = (counter = 0) => (
        answers[this.props.n-1].map(x =>(
            <div key={counter++}>
            <Radio value={counter-1} />{x.text}
            </div>)
        )
    )
    
    render () {
        return (
            <div>
                <RadioGroup selectedValue={this.state.selectedValue} onChange={this.handleChange}>
                    {this.renderLines()}
                </RadioGroup>
                <Button bsStyle='primary' onClick={() => this.props.handleAnswer(answers[this.props.n-1][this.state.selectedValue].grades)}>Próximo</Button>
            </div>
        )
    }
}



