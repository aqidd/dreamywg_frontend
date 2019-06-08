import React, { Component } from 'react'
import { Row, Col, Typography, Button, Card } from 'antd'
const { Title, Paragraph } = Typography
const { Meta } = Card

const Introduction = () => (
  <div style={ContainerStyle}>
    <Row style={{ alignItems: 'center' }} type="flex">
      <Col span={3} />
      <Col span={9}>
        <Row>
          <Title style={{ fontSize: 'calc(1em + 2.5vw)' }} level={1}>
            Essential Mobile App Landing for Workspaces
          </Title>
        </Row>
        <Row>
          <Paragraph>
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
      <Col span={9}>
        <LandingDemo />
      </Col>
      <Col span={3} />
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
