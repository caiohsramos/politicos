import React, { Component } from 'react'

import QuizButton from '../templates/quizButton'
import PageHeader from '../templates/pageHeader'

const N = 20

export default class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            progress: 0,
            grades: {
                alvaro: 0,
                daciolo: 0,
                ciro: 0,
                alckmin: 0,
                boulos: 0,
                meirelles: 0,
                bolsonaro: 0,
                amoedo: 0,
                goulart: 0,
                eymael: 0,
                lula: 0,
                marina: 0,
                vera: 0
            }
        } 
    }

    handleNext = () => {
        this.setState(
            {...this.state,progress: this.state.progress + 1}
        )
    }

    handleReset = () => {
        this.setState(
            {...this.state,
                progress: 0,
                grades: {
                    alvaro: 0,
                    daciolo: 0,
                    ciro: 0,
                    alckmin: 0,
                    boulos: 0,
                    meirelles: 0,
                    bolsonaro: 0,
                    amoedo: 0,
                    goulart: 0,
                    eymael: 0,
                    lula: 0,
                    marina: 0,
                    vera: 0
                },
            }
        )
    }

    render() {
        return (
            <div>
                <PageHeader title='Quiz' subtitle={`Pergunta ${this.state.progress}`} />

                <QuizButton text='Reset' handleClick={this.handleReset} show={(this.state.progress > 0)} />
                <QuizButton text='Next' handleClick={this.handleNext} show={(this.state.progress < N)} />
            </div>
        )
    }
}