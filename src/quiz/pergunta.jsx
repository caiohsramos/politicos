import React from 'react'

import QuizButton from '../templates/quizButton'

export default props => (
    <div>
        <h1>Pergunta {props.n}</h1>
        <QuizButton text='Responder pergunta' handleClick={() => props.handleAnswer(null)} show={true}/>
    </div>
)