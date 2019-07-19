import React, { Component } from 'react'
import { Row, Col, Typography, Card, Icon } from 'antd'
import TitleContent from '../../common/titlecontent'
import styled, { ThemeProvider } from 'styled-components'
import theme from 'styled-theming'
import simpleParallax from 'simple-parallax-js'
const { Meta } = Card

const dataService = [
  {
    title: 'Intelligence Recommendation',
    content: 'Very provide very very Gut Services',
    icon: 'file-search',
    position: 'left'
  },
  {
    title: 'Instant Communication',
    content: 'Very provide very very Gut Services',
    icon: 'wechat',
    position: 'center'
  },
  {
    title: 'Interview Scheduling',
    content: 'Very provide very very Gut Services',
    icon: 'contacts',
    position: 'right'
  }
]

class Services extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const left =  document.getElementsByClassName('left');
  }

  render = () => {
    return (
      <ParallaxWrapper>
        <StyledContainer >
          <Row>
            <Row>
              <TitleContent
                subtitle="Our Services"
                title=" Featured Service that We Provide"
              />
            </Row>

              <CardRow
                type="flex"
                justify="center"
                gutter={16}
                style={{ marginTop: '2vh' }}
              >
                {dataService.map(data => (

                    <ServiceCard
                      title={data.title}
                      icon={data.icon}
                      subtitle={data.content}
                    />

                ))}
              </CardRow>

          </Row>
        </StyledContainer>
      </ParallaxWrapper>
    )
  }
}

const ServiceCard = ({ title, subtitle, icon }) => (
  <Col span={5}>
    <CardContainer hoverable bordered={false}>
      <Icon
        style={{
          fontSize: 86,
          marginBottom: 16
        }}
        type={icon}
      />
      <Title style={{ fontSize: 16 }}> {title} </Title>
      <Subtitle> {subtitle} </Subtitle>
    </CardContainer>
  </Col>
)
export default Services

const cardColor = theme('mode', {
  light: '#FFF',
  dark: '#111'
})

const textColor = theme('mode', {
  light: '#000',
  dark: '#DDD'
})

const Title = styled.p`
  font-weight: bold;
`
const Subtitle = styled.p`
  font-weight: normal;
`

const CardContainer = styled(Card)`
  background-color: ${cardColor};
  color: ${textColor};
`

const StyledMeta = styled(Meta)`
  color: ${textColor};
`

const StyledContainer = styled.div`
  text-align: center;
  margin-top: 10vh;
  margin-bottom: 16vh;

`

const CardRow = styled(Row)`
  margin-top: 2vh;

`

const ParallaxWrapper = styled.div`
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 2px;
`

const AnimatedCardRow = styled.div`
  -webkit-animation: fade-in-right 2s;
@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateZ(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
 `
