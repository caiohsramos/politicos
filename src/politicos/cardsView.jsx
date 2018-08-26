import React from 'react'
import { Grid, Row, Col, Thumbnail, Button, Label } from 'react-bootstrap'

import alvaro from '../images/alvaro-dias.jpg'
import alckmin from '../images/geraldo-alckmin.jpg'
import ciro from '../images/ciro-gomes.jpg'
import boulos from '../images/guilherme-boulos.jpg'
import meirelles from '../images/henrique-meirelles.jpg'
import bolsonaro from '../images/jair-bolsonaro.jpg'
import amoedo from '../images/joao-amoedo.jpg'
import marina from '../images/marina-silva.jpg'
import lula from '../images/lula.jpg'

export default props => (
    <Grid>
        <Row>
            <Col xs={9} md={4}>
                <Thumbnail src={alvaro} alt="242x200">
                    <h3>Alvaro Fernandes Dias</h3>
                    <h4>Podemos <Label>19</Label></h4>
                    <p>
                        <Button bsStyle="info">Página do Candidato</Button>
                        &nbsp;
                        <Button bsClass='btn btn-default pull-right'>Ficha Limpa</Button>
                    </p>
                </Thumbnail>
            </Col>
            <Col xs={9} md={4}>
                <Thumbnail src={ciro} alt="242x200">
                <h3>Ciro Ferreira Gomes</h3>
                    <h4>PDT <Label>12</Label></h4>
                    <p>
                        <Button bsStyle="info">Página do Candidato</Button>
                        &nbsp;
                        <Button bsClass='btn btn-default pull-right'>Ficha Limpa</Button>
                    </p>
                </Thumbnail>
            </Col>
            <Col xs={9} md={4}>
                <Thumbnail src={alckmin} alt="242x200">
                <h3>Geraldo José Rodrigues Alckmin Filho</h3>
                    <h4>PSDB <Label>45</Label></h4>
                    <p>
                        <Button bsStyle="info">Página do Candidato</Button>
                        &nbsp;
                        <Button bsClass='btn btn-default pull-right'>Ficha Limpa</Button>
                    </p>
                </Thumbnail>
            </Col>
        </Row>

        <Row>
            <Col xs={9} md={4}>
                <Thumbnail src={boulos} alt="242x200">
                <h3>Guilherme Castro Boulos</h3>
                    <h4>PSol <Label>50</Label></h4>
                    <p>
                        <Button bsStyle="info">Página do Candidato</Button>
                        &nbsp;
                        <Button bsClass='btn btn-default pull-right'>Ficha Limpa</Button>
                    </p>
                </Thumbnail>
            </Col>
            <Col xs={9} md={4}>
                <Thumbnail src={meirelles} alt="242x200">
                <h3>Henrique de Campos Meirelles</h3>
                    <h4>MDB <Label>15</Label></h4>
                    <p>
                        <Button bsStyle="info">Página do Candidato</Button>
                        &nbsp;
                        <Button bsClass='btn btn-default pull-right'>Ficha Limpa</Button>
                    </p>
                </Thumbnail>
            </Col>
            <Col xs={9} md={4}>
                <Thumbnail src={bolsonaro} alt="242x200">
                <h3>Jair Messias Bolsonaro</h3>
                    <h4>PSC <Label>20</Label></h4>
                    <p>
                        <Button bsStyle="info">Página do Candidato</Button>
                        &nbsp;
                        <Button bsClass='btn btn-default pull-right'>Ficha Limpa</Button>
                    </p>
                </Thumbnail>
            </Col>
        </Row>

        <Row>
            <Col xs={9} md={4}>
                <Thumbnail src={amoedo} alt="242x200">
                <h3>João Dionisio Filgueira Barreto Amoêdo</h3>
                    <h4>Novo <Label>30</Label></h4>
                    <p>
                        <Button bsStyle="info">Página do Candidato</Button>
                        &nbsp;
                        <Button bsClass='btn btn-default pull-right'>Ficha Limpa</Button>
                    </p>
                </Thumbnail>
            </Col>
            <Col xs={9} md={4}>
                <Thumbnail src={marina} alt="242x200">
                <h3>Maria Osmarina da Silva Vaz de Lima</h3>
                    <h4>Rede <Label>18</Label></h4>
                    <p>
                        <Button bsStyle="info">Página do Candidato</Button>
                        &nbsp;
                        <Button bsClass='btn btn-default pull-right'>Ficha Limpa</Button>
                    </p>
                </Thumbnail>
            </Col>
            <Col xs={9} md={4}>
                <Thumbnail src={lula} alt="242x200">
                <h3>Luiz Inácio Lula da Silva</h3>
                    <h4>PT <Label>13</Label></h4>
                    <p>
                        <Button bsStyle="info">Página do Candidato</Button>
                        &nbsp;
                        <Button bsClass='btn btn-default pull-right'>Ficha Limpa</Button>
                    </p>
                </Thumbnail>
            </Col>
        </Row>
    </Grid>
)