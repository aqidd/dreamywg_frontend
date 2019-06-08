import React, { Component } from 'react'
import { Row, Col, Typography, Button } from 'antd'
import Image from '../../common/Image'
import TitleContent from '../../common/titlecontent'
import chatDemoImg from '../../../resources/chat-demo.png'

const { Paragraph } = Typography

const Showcase = () => (
  <div style={{ marginTop: '5vh' }}>
    <Row type="flex" style={{ alignItems: 'center' }} gutter={64}>
      <Col xs={2} sm={2} md={12} lg={12}>
        <Image img={chatDemoImg} />
      </Col>
      <Col xs={20} sm={20} md={10} lg={7}>
        <Row style={{ marginTop: '-5vh' }}>
          <Row>
            <TitleContent
              flex
              subtitle="Easy Scheduling"
              title="Communication and interview scheduling"
            />
          </Row>
          <Row>
            <Paragraph style={{ fontSize: 16 }}>
              A mobile app landing page is important and essential for right
              amount of information about your product. Start increasing your
              user base upon the launch of your product.
            </Paragraph>
          </Row>
          <Row>
            <Button size="large" type="primary">
              Get Started for free
            </Button>
          </Row>
        </Row>
      </Col>
      <Col xs={2} sm={2} md={2} lg={2} xl={5} />
    </Row>
  </div>
)

export default Showcase
