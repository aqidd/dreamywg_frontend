import React, { Component } from 'react'
import { Row, Col, Typography, Button, Card } from 'antd'
const { Title, Paragraph, Text } = Typography
const { Meta } = Card

const Introduction = () => (
  <div style={ContainerStyle}>
    <Row>
      <Col xs={2} sm={2} md={2} lg={2} xl={5} />
      <Col xs={20} sm={20} md={10} lg={10} xl={7}>
        <VersionCard />
        <Row>
          <Title style={{ fontSize: 'calc(1em + 2.5vw)' }} level={1}>
            Connect a perfect roommate together
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
          <Col span={8}>
            <Button block size={'large'} type={'primary'}>
              Get Started
            </Button>
          </Col>
          <Col span={8}>
            <Button block size={'large'} type={'link'}>
              Learn more
            </Button>
          </Col>
        </Row>
      </Col>
      <Col xs={2} sm={2} md={1} lg={1} xl={1} />
      <Col xs={0} sm={0} md={11} lg={11} xl={11}>
        <LandingDemo />
      </Col>
    </Row>
  </div>
)

const ContainerStyle = {
  margin: 'auto',
  marginTop: '16vh'
}

const LandingDemo = source => (
  <Card
    style={{ marginTop: '-5vh' }}
    bordered={false}
    cover={
      <img alt="example" src={require('../../../resources/about-demo3.png')} />
    }
  />
)

const VersionCard = () => (
  <Row type="flex" justify="start" gutter={16} style={{ textAlign: 'center' }}>
    <Col>
      <Button type="primary" shape="round">
        Beta
      </Button>
    </Col>
    <Col>
      <div style={{ marginTop: 5 }}>
        <Text> Version 0.0.1 is Available</Text>
      </div>
    </Col>
  </Row>
)

export default Introduction
