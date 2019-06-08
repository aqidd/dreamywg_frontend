import React, { Component } from 'react'
import { Row, Col, Typography, Button, Card } from 'antd'
const { Title, Paragraph } = Typography
const { Meta } = Card

const Introduction = () => (
  <div style={ContainerStyle}>
    <Row justify={'center'} type="flex">
      <Col sm={2} md={2} lg={2} xl={5} />
      <Col sm={9} md={10} lg={10} xl={7}>
        <Row>
          <Title style={{ fontSize: 'calc(1em + 2.5vw)' }} level={1}>
            Essential Mobile App Landing for Workspaces
          </Title>
        </Row>
        <Row>
          <Paragraph style={{ fontSize: 16 }}>
            A mobile app landing page is important and essential for right
            amount of information about your product. Start increasing your user
            base upon the launch of your product.
          </Paragraph>
        </Row>
        <Row style={{ alignItems: 'center' }} type="flex">
          <Col span={12}>
            <Button block size={'large'} type={'primary'}>
              Get Started
            </Button>
          </Col>
          <Col span={12}>
            <Button block size={'large'} type={'link'}>
              Learn more
            </Button>
          </Col>
        </Row>
      </Col>
      <Col sm={1} md={1} lg={1} xl={1} />
      <Col sm={9} md={9} lg={9} xl={6}>
        <LandingDemo />
      </Col>
      <Col sm={2} md={2} lg={2} xl={5} />
    </Row>
  </div>
)

const ContainerStyle = {
  margin: 'auto',
  marginTop: '16vh'
}

const LandingDemo = source => (
  <Card
    cover={
      <img alt="example" src={require('../../../resources/demo-landing.png')} />
    }
  />
)

export default Introduction
