import React from 'react'

import Intro from './intro'
import Tema from './tema'
import Result from './result'

export default props => {
    //same type or it wont work
    switch (props.progress) {
        case 0:
            return (<Intro handleDone={props.handleNext}/>)
        case props.N+1:
            return (<Result grades={props.grades} handleReset={props.handleReset}/>)
        default:
            return (<Tema n={props.progress} handleAnswer={props.handleNext} handleReset={props.handleReset}/>)
    }
}