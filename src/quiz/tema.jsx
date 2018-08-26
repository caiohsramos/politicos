import React from 'react'
import { Button, Radio } from 'react-bootstrap'
import { RadioGroup } from 'react-radio-group'

import answers from './answers'

export default props => {
    const renderLines = (counter = 0) => (
        answers[props.n-1].map(x =>(
            <div key={counter++}>
            <Radio value="" />{x.text}
            </div>)
        )
    )
    
    return (
        <div>
            <RadioGroup>
                {renderLines()}
            </RadioGroup>
            <Button bsStyle='primary' onClick={() => props.handleAnswer(null)}>Próximo</Button>
        </div>
    )
}



