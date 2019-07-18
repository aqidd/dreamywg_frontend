import React, { Component } from 'react'
import { Row, Col, Typography, Card, Icon } from 'antd'
import TitleContent from '../../common/titlecontent'
import styled, { ThemeProvider } from 'styled-components'
import theme from 'styled-theming'
const { Meta } = Card

const dataService = [
  {
    title: 'Intelligence Recommendation',
    content: 'Very provide very very Gut Services',
    icon: 'file-search'
  },
  {
    title: 'Instant Communication',
    content: 'Very provide very very Gut Services',
    icon: 'wechat'
  },
  {
    title: 'Interview Scheduling',
    content: 'Very provide very very Gut Services',
    icon: 'contacts'
  }
]

class Services extends Component {
  constructor(props) {
    super(props)
  }

  render = () => {
    return (
      <Container>
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
      </Container>
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

const Container = styled.div`
  text-align: center;
  margin-top: 10vh;
  margin-bottom: 16vh;
`

const CardRow = styled(Row)`
  margin-top: 2vh;
`
