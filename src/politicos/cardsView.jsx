import React from 'react'
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap'

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
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                        <Button bsStyle="primary">Button</Button>
                        &nbsp;
                        <Button bsStyle="default">Button</Button>
                    </p>
                </Thumbnail>
            </Col>
            <Col xs={9} md={4}>
                <Thumbnail src={ciro} alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                        <Button bsStyle="primary">Button</Button>
                        &nbsp;
                        <Button bsStyle="default">Button</Button>
                    </p>
                </Thumbnail>
            </Col>
            <Col xs={9} md={4}>
                <Thumbnail src={alckmin} alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                        <Button bsStyle="primary">Button</Button>
                        &nbsp;
                        <Button bsStyle="default">Button</Button>
                    </p>
                </Thumbnail>
            </Col>
        </Row>

        <Row>
            <Col xs={9} md={4}>
                <Thumbnail src={boulos} alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                        <Button bsStyle="primary">Button</Button>
                        &nbsp;
                        <Button bsStyle="default">Button</Button>
                    </p>
                </Thumbnail>
            </Col>
            <Col xs={9} md={4}>
                <Thumbnail src={meirelles} alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                        <Button bsStyle="primary">Button</Button>
                        &nbsp;
                        <Button bsStyle="default">Button</Button>
                    </p>
                </Thumbnail>
            </Col>
            <Col xs={9} md={4}>
                <Thumbnail src={bolsonaro} alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                        <Button bsStyle="primary">Button</Button>
                        &nbsp;
                        <Button bsStyle="default">Button</Button>
                    </p>
                </Thumbnail>
            </Col>
        </Row>

        <Row>
            <Col xs={9} md={4}>
                <Thumbnail src={amoedo} alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                        <Button bsStyle="primary">Button</Button>
                        &nbsp;
                        <Button bsStyle="default">Button</Button>
                    </p>
                </Thumbnail>
            </Col>
            <Col xs={9} md={4}>
                <Thumbnail src={marina} alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                        <Button bsStyle="primary">Button</Button>
                        &nbsp;
                        <Button bsStyle="default">Button</Button>
                    </p>
                </Thumbnail>
            </Col>
            <Col xs={9} md={4}>
                <Thumbnail src={lula} alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                        <Button bsStyle="primary">Button</Button>
                        &nbsp;
                        <Button bsStyle="default">Button</Button>
                    </p>
                </Thumbnail>
            </Col>
        </Row>
    </Grid>
)