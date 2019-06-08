import React, { Component } from 'react'
import { Row, Col, Typography, Button, Card } from 'antd'
const { Title, Paragraph, Text } = Typography
import img from '../../../resources/about-demo3.png'
import Image from '../../common/Image'
import VersionCard from './versionCard'

const Introduction = () => (
  <div style={ContainerStyle}>
    <Row>
      <Col xs={2} sm={2} md={2} lg={2} xl={5} />
      <Col xs={20} sm={20} md={10} lg={10} xl={7}>
        <div style={{ alignItems: 'center' }}>
          <VersionCard />
          <Row>
            <Title style={{ fontSize: 'calc(1em + 2.5vw)' }} level={1}>
              Connect a perfect flatmate together
            </Title>
          </Row>
          <Row>
            <Paragraph style={{ fontSize: 16 }}>
              A mobile app landing page is important and essential for right
              amount of information about your product. Start increasing your
              user base upon the launch of your product.
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
        </div>
      </Col>
      <Col xs={2} sm={2} md={1} lg={1} xl={1} />
      <Col style={{ marginTop: '-5vh' }} xs={0} sm={0} md={11} lg={11} xl={11}>
        <Image img={img} />
      </Col>
    </Row>
  </div>
)

const ContainerStyle = {
  margin: 'auto',
  marginTop: '16vh'
}

export default Introduction
