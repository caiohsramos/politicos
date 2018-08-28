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
            <div className='input-group m-b' key={counter++}>
            <spam className='input-group-addon '>
                <Radio value={counter-1} />
            </spam>
            <div className='panel panel-default m-n p-xxs'>
            <FormControl.Static>{x.text}</FormControl.Static>
            </div>
            </div>)
        )
    )
    
    render () {
        return (
            <div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-xs-6'>
                            <Button className='m-b' onClick={this.props.handleReset}>Reset</Button>
                        </div>
                        <div className='col-xs-6'>
                            <Button bsStyle='success pull-right m-b' onClick={() => this.props.handleAnswer(answers[this.props.n-1][this.state.selectedValue].grades)}>Próximo</Button>
                        </div>
                    </div>
                </div>
                <RadioGroup selectedValue={this.state.selectedValue} onChange={this.handleChange}>
                    {this.renderLines()}
                </RadioGroup>
            </div>
        )
    }
}



