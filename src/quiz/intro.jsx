import React from 'react'
import { Jumbotron } from 'react-bootstrap'

import QuizButton from '../templates/quizButton'

export default props => (
    <div>
        <Jumbotron>
        <h1>Introdução</h1>
        <p>
            Escolha as opções sobre cada um dos temas como o seu candidato escolheria. No final você terá um ranking com os candidatos mais parecidos com as duas escolhas.
        </p>
        <p>
            <QuizButton text='Começar' handleClick={() => props.handleDone(null)} show={true}/>
        </p>
        </Jumbotron>
    </div>
)