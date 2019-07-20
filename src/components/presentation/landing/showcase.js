import React, { Component } from 'react'
import { Row, Col, Button } from 'antd'
import Image from '../../common/Image'
import TitleContent from '../../common/titlecontent'
import chatDemoImg from '../../../resources/chat-demo.png'
import styled from 'styled-components'
import simpleParallax from 'simple-parallax-js'

const showCase = () => (
      <Container>
        <Row type="flex" style={{ alignItems: 'center' }} gutter={64}>
          <Col xs={2} sm={2} md={12} lg={12}>
            <Image img={chatDemoImg} className="chat_demo"/>
          </Col>
          <Col xs={20} sm={20} md={10} lg={7}>
            <RowScaler>
              <Row>
                <TitleContent
                  flex
                  subtitle="Easy Scheduling"
                  title="Communication and interview scheduling"
                />
              </Row>
              <Row>
                <Paragraph style={{ fontSize: 16 }}>
                  One of the best feature. Connecting matched flat seeker and landlord easily with no need of exchanging private information.
                </Paragraph>
              </Row>
            </RowScaler>
          </Col>
          <Col xs={2} sm={2} md={2} lg={2} xl={5} />
        </Row>
      </Container>
    )

const Container = styled.div`
  margin-top: 5vh;
`
const RowScaler = styled(Row)`
  margin-top: -5vh;
`

const Paragraph = styled.p`
  margin-top: -3vh;
  font-weight: normal;
`

export default Showcase
