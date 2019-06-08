import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Image from '../../common/Image'
import chatDemoImg from '../../../resources/chat-demo.png'

const Showcase = () => (
  <div>
    <Row>
      <Col xs={0} sm={12} md={12} lg={12}>
        <Image img={chatDemoImg} />
      </Col>
      <Col xs={24} sm={12} md={12} lg={12} />
    </Row>
  </div>
)

export default Showcase
