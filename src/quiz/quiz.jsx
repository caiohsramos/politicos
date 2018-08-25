import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap'

import QuizButton from '../templates/quizButton'
import PageHeader from '../templates/pageHeader'
import QuizContent from './quizContent'

const N = 6

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
            },
        } 
    }

    handleAnswer = (answer_grades) => { 
        if(answer_grades == null) {
            this.setState({...this.state,progress: this.state.progress + 1})
        } else {
            this.setState(
                {...this.state,
                    progress: this.state.progress + 1,
                    //Atualizar o grade dos candidatos de acordo com a resposta
                    grades: {
                        alvaro: this.state.grades.alvaro+answer_grades.alvaro,
                        daciolo: this.state.grades.daciolo+answer_grades.daciolo,
                        ciro: this.state.grades.ciro+answer_grades.ciro,
                        alckmin: this.state.grades.alckmin+answer_grades.alckmin,
                        boulos: this.state.grades.boulos+answer_grades.boulos,
                        meirelles: this.state.grades.meirelles+answer_grades.meirelles,
                        bolsonaro: this.state.grades.bolsonaro+answer_grades.bolsonaro,
                        amoedo: this.state.grades.amoedo+answer_grades.amoedo,
                        goulart: this.state.grades.goulart+answer_grades.goulart,
                        eymael: this.state.grades.eymael+answer_grades.eymael,
                        lula: this.state.grades.lula+answer_grades.lula,
                        marina: this.state.grades.marina+answer_grades.marina,
                        vera: this.state.grades.vera+answer_grades.vera
                    }
                }
            )
        }
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
                <PageHeader title='Quiz' subtitle={`Tema da pergunta ${this.state.progress}`} />
                <QuizContent progress={this.state.progress} handleNext={this.handleAnswer} N={N} />
                <ProgressBar now={this.state.progress} max={N} bsStyle="success" />
                <QuizButton text='Reset' handleClick={this.handleReset} show={(this.state.progress > 0)} />
                <QuizButton text='Next' handleClick={() => this.handleAnswer(null)} show={(this.state.progress < (N+1))} />
            </div>
        )
    }
}