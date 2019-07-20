import React, { Component } from 'react'
import { Row, Col, Typography, Button } from "antd"
import img from "../../../resources/about-demo3.png"
import Image from "../../common/Image"
import VersionCard from "./versionCard"
import styled from "styled-components"
import simpleParallax from 'simple-parallax-js'

class Introduction extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef();
  }

  componentDidMount() {
    const image =  document.querySelectorAll('Img');
    new simpleParallax(image, {
      overflow: true,
      orientation: 'right',
      delay: .6,
      transition: 'cubic-bezier(0,0,0,1)'
    });
  }

  componentWillUnmount() {

  }

  render = () => {
    return(
      <StyledContainer>
        <Row>
          <Col xs={2} sm={2} md={2} lg={2} xl={5} />
          <Col xs={20} sm={20} md={10} lg={10} xl={7}>
            <StyledInContainer>
              <VersionCard />
              <Row>
                <Title>Connect a perfect flatmate together</Title>
              </Row>
              <Row>
                <Paragraph>
                  Helping people in looking for a comfortable and perfect flat. Start increase your chance in searching a better candidate to fill out your room and perfect flatmate for you.
                </Paragraph>
              </Row>
              <CenteredRow type="flex">
                <Col span={8}>
                  <Button
                    block
                    size={"large"}
                    type={"primary"}
                    onClick={() => onGetStarted()}
                  >
                    Get Started
                  </Button>
                </Col>
                <Col span={8}>
                  <Button block size={"large"} type={"link"}>
                    Learn more
                  </Button>
                </Col>
              </CenteredRow>
            </StyledInContainer>
          </Col>
          <Col xs={2} sm={2} md={1} lg={1} xl={1} />
          <Col
            style={{ marginTop: "-5vh" }}
            xs={0}
            sm={0}
            md={11}
            lg={11}
            xl={11}
          >
            <Image img={img} className="img_par" alt="image"/>
          </Col>
        </Row>
      </StyledContainer>

    )}
}

const StyledContainer = styled.div`
     margin: auto;
     margin-top: 10vh;
}
`
const StyledInContainer = styled.div`
     align-items: center;
`

const CenteredRow = styled(Row)`
     align-items: center;
`

const Title = styled.p`
     font-size: calc(1em + 2.5vw);
     font-weight: bold;
`

const Paragraph = styled.p`
     font-size: 1.25em;
     margin-top: -2vh;
`

export default Introduction
