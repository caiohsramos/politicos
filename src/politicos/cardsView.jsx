import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import Card from './card'

export default props => (
    <Grid>
        <Row>
            <Col xs={9} md={4}>
                <Card name='alvaro'/>
            </Col>
            <Col xs={9} md={4}>
                <Card name='ciro' />
            </Col>
            <Col xs={9} md={4}>
                <Card name='alckmin' />
            </Col>
        </Row>

        <Row>
            <Col xs={9} md={4}>
                <Card name='boulos' />
            </Col>
            <Col xs={9} md={4}>
                <Card name='meirelles' />
            </Col>
            <Col xs={9} md={4}>
                <Card name='bolsonaro' />
            </Col>
        </Row>

        <Row>
            <Col xs={9} md={4}>
                <Card name='amoedo' />
            </Col>
            <Col xs={9} md={4}>
                <Card name='marina' />
            </Col>
            <Col xs={9} md={4}>
                <Card name='haddad' />
            </Col>
        </Row>
    </Grid>
)