import React from 'react'
import QuizButton from '../templates/quizButton'

export default props => (
    <div>
        <h1>Intro</h1>
        <QuizButton text='Começar' handleClick={() => props.handleDone(null)} show={true}/>
    </div>
)