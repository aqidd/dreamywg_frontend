import React, { Component } from 'react'
import { Row, Col, Button } from 'antd'
import Image from '../../common/Image'
import TitleContent from '../../common/titlecontent'
import chatDemoImg from '../../../resources/chat-demo.png'
import styled from 'styled-components'
import simpleParallax from 'simple-parallax-js'

class Showcase extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    //window.addEventListener('scroll', this.parallaxShift);
    //window.addEventListener('scroll', this.parallaxShift);


  }

  componentWillUnmount() {

  }

  render = () => {
    return (
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
                  A mobile app landing page is important and essential for right
                  amount of information about your product. Start increasing your
                  user base upon the launch of your product.
                </Paragraph>
              </Row>
              <Row>
                <Button size="large" type="primary" onClick={() => onGetStarted()}>
                  Get Started for free
                </Button>
              </Row>
            </RowScaler>
          </Col>
          <Col xs={2} sm={2} md={2} lg={2} xl={5} />
        </Row>
      </Container>
    )
  }
}

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
