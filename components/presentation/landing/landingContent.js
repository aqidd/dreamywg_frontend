import React, { Component } from 'react'
import { Row, Col, Typography, Button, Card, Layout } from 'antd'

const { Title, Text, Paragraph } = Typography
const { Meta } = Card

const LandingContent = ({ onGetStartedClicked }) => (
  <Layout.Content>
    <section>
      <Row>
        <Col span={12}>
          <Row>
            <Title level={2}>Essential Mobile App Landing for Workspaces</Title>
          </Row>
          <Row>
            <Paragraph>
              A mobile app landing page is important and essential for right
              amount of information about your product. Start increasing your
              user base upon the launch of your product.
            </Paragraph>
          </Row>
          <Row>
            <Col span={12}>
              <Button block type={'primary'}>
                Get Started
              </Button>
            </Col>
            <Col span={12}>
              <Button block type={'link'}>
                test
              </Button>
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <LandingDemo />
        </Col>
      </Row>
    </section>
  </Layout.Content>
)

const LandingDemo = source => (
  <Card
    style={{ width: '90vh', height: '60wh' }}
    cover={
      <img alt="example" src={require('../../../resources/demo-landing.png')} />
    }
  />
)

export default LandingContent
