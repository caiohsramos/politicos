import React, { Component } from 'react'
import { Button, FormControl } from 'react-bootstrap'
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
            <div className='input-group space-top'>
            <spam key={counter++} className='input-group-addon'>
                <Radio value={counter-1} />
            </spam>
            <div className='bg-info'>
            <FormControl.Static>{x.text}</FormControl.Static>
            </div>
            </div>)
        )
    )
    
    render () {
        return (
            <div>
                <RadioGroup selectedValue={this.state.selectedValue} onChange={this.handleChange}>
                    {this.renderLines()}
                </RadioGroup>
                <p className='text-center'>
                <Button bsStyle='success space-top ' onClick={() => this.props.handleAnswer(answers[this.props.n-1][this.state.selectedValue].grades)}>Próximo</Button>
                </p>
            </div>
        )
    }
}



