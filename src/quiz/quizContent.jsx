import React from 'react'

import Intro from './intro'
import Pergunta from './pergunta'
import Result from './result'

export default props => {
    //same type or it wont work
    switch (props.progress) {
        case 0:
            return (<Intro handleDone={props.handleNext}/>)
            break
        case props.N+1:
            return (<Result />)
            break
        default:
            return (<Pergunta n={props.progress}/>)
    }
}