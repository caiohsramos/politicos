import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

export default props => (
    <div>
        <Jumbotron>
        <h1>Introdução</h1>
        <p>
            Escolha as opções sobre cada um dos temas como o seu candidato escolheria. No final você terá um ranking com os candidatos mais parecidos com as duas escolhas.
        </p>
        <p>
            <Button onClick={() => props.handleDone(null)} >Começar</Button>
        </p>
        </Jumbotron>
    </div>
)