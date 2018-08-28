import React from 'react'
import { Thumbnail, Button, Label } from 'react-bootstrap'

import alvaro from '../images/alvaro-dias.jpg'
import alckmin from '../images/geraldo-alckmin.jpg'
import ciro from '../images/ciro-gomes.jpg'
import boulos from '../images/guilherme-boulos.jpg'
import meirelles from '../images/henrique-meirelles.jpg'
import bolsonaro from '../images/jair-bolsonaro.jpg'
import amoedo from '../images/joao-amoedo.jpg'
import marina from '../images/marina-silva.jpg'
import lula from '../images/lula.jpg'

export default props => {
    const renderName = () => {
        switch (props.name) {
            case 'alvaro':
                return (
                    <Thumbnail src={alvaro} alt="242x200">
                        <h3>Alvaro Fernandes Dias</h3>
                        <h4>Podemos <Label>19</Label></h4>
                        <div className='text-center'>
                            <Button href="https://www.alvarodias.com.br/" target="_blank" className='m' bsStyle='info'>Página do Candidato</Button>
                            <Button href="http://divulgacandcontas.tse.jus.br/divulga/#/candidato/2018/2022802018/BR/280000618462" target="_blank" className='m' bsStyle='default'>Ficha Limpa</Button>
                        </div>
                    </Thumbnail>)
            case 'alckmin':
                return (<Thumbnail src={alckmin} alt="242x200">
                    <h3>Geraldo José Rodrigues Alckmin Filho</h3>
                    <h4>PSDB <Label>45</Label></h4>
                    <div className='text-center'>
                        <Button href="https://www.geraldoalckmin.com.br/" target="_blank" bsStyle="info" className='m'>Página do Candidato</Button>
                        <Button href="http://divulgacandcontas.tse.jus.br/divulga/#/candidato/2018/2022802018/BR/280000602477" target="_blank" className='m' bsStyle='default' >Ficha Limpa</Button>
                    </div>
                </Thumbnail>)
            case 'ciro':
                return (<Thumbnail src={ciro} alt="322x200">
                    <h3>Ciro Ferreira Gomes</h3>
                    <h4>PDT <Label>12</Label></h4>
                    <div className='text-center'>
                        <Button href="https://www.cirogomes.com.br/" target="_blank" bsStyle="info" className='m'>Página do Candidato</Button>
                        &nbsp;
                        <Button href="http://divulgacandcontas.tse.jus.br/divulga/#/candidato/2018/2022802018/BR/280000605589" target="_blank" bsStyle='default' className='m'>Ficha Limpa</Button>
                    </div>
                </Thumbnail>)
            case 'boulos':
                return (<Thumbnail src={boulos} alt="242x200">
                    <h3>Guilherme Castro Boulos</h3>
                    <h4>PSol <Label>50</Label></h4>
                    <div className='text-center'>
                        <Button href="https://www.psol50.org.br/author/guilhermeboulos/" target="_blank" bsStyle="info" className='m'>Página do Candidato</Button>
                        <Button href="http://divulgacandcontas.tse.jus.br/divulga/#/candidato/2018/2022802018/BR/280000601016" target="_blank" bsStyle='default' className='m'>Ficha Limpa</Button>
                    </div>
                </Thumbnail>)
            case 'meirelles':
                return (<Thumbnail src={meirelles} alt="242x200">
                    <h3>Henrique de Campos Meirelles</h3>
                    <h4>MDB <Label>15</Label></h4>
                    <div className='text=center'>
                        <Button href="https://twitter.com/meirelles" target="_blank" bsStyle="info" className='m'>Página do Candidato</Button>
                        <Button href="http://divulgacandcontas.tse.jus.br/divulga/#/candidato/2018/2022802018/BR/280000622281" target="_blank" bsStyle='default' className='m'>Ficha Limpa</Button>
                    </div>
                </Thumbnail>)
            case 'bolsonaro':
                return (<Thumbnail src={bolsonaro} alt="242x200">
                    <h3>Jair Messias Bolsonaro</h3>
                    <h4>PSC <Label>20</Label></h4>
                    <div className='text-center'>
                        <Button href="https://www.bolsonaro.com.br/" target="_blank" bsStyle="info" className='m'>Página do Candidato</Button>
                        <Button href="http://divulgacandcontas.tse.jus.br/divulga/#/candidato/2018/2022802018/BR/280000614517" target="_blank" bsStyle='default' className='m'>Ficha Limpa</Button>
                    </div>
                </Thumbnail>)
            case 'amoedo':
                return (<Thumbnail src={amoedo} alt="242x200">
                    <h3>João Dionisio Filgueira Barreto Amoêdo</h3>
                    <h4>Novo <Label>30</Label></h4>
                    <div className='text-center'>
                        <Button href="https://joaoamoedo.com.br/" target="_blank" bsStyle="info" className='m'>Página do Candidato</Button>
                        <Button href="http://divulgacandcontas.tse.jus.br/divulga/#/candidato/2018/2022802018/BR/280000607640" target="_blank" bsStyle='default' className='m'>Ficha Limpa</Button>
                    </div>
                </Thumbnail>)
            case 'marina':
                return (<Thumbnail src={marina} alt="242x200">
                    <h3>Maria Osmarina da Silva Vaz de Lima</h3>
                    <h4>Rede <Label>18</Label></h4>
                    <div className='text-center'>
                        <Button href="https://marinasilva.org.br/" target="_blank" bsStyle="info" className='m'>Página do Candidato</Button>
                        <Button href="http://divulgacandcontas.tse.jus.br/divulga/#/candidato/2018/2022802018/BR/280000622171" target="_blank" bsStyle='default' className='m'>Ficha Limpa</Button>
                    </div>
                </Thumbnail>)
            case 'lula':
                return (<Thumbnail src={lula} alt="242x200">
                    <h3>Luiz Inácio Lula da Silva</h3>
                    <h4>PT <Label>13</Label></h4>
                    <div className='text-center'>
                        <Button href="https://lula.com.br/" target="_blank" bsStyle="info" className='m'>Página do Candidato</Button>
                        <Button href="http://divulgacandcontas.tse.jus.br/divulga/#/candidato/2018/2022802018/BR/280000625869" target="_blank" bsStyle='default' className='m'>Ficha Limpa</Button>
                    </div>
                </Thumbnail>)
            default:
            return(<h3>Err</h3>)

        }
    }
    return (renderName())

}