import React from 'react'
import { Row, Col, Card, Icon } from 'antd'
import TitleContent from '../../common/titlecontent'
import styled from 'styled-components'

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

const Services = () => (
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
        {dataService.map((data, index) => (
          <ServiceCard
            key={index}
            title={data.title}
            icon={data.icon}
            subtitle={data.content}
          />
        ))}
      </CardRow>
    </Row>
  </Container>
)

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

const Title = styled.p`
  font-weight: bold;
`
const Subtitle = styled.p`
  font-weight: normal;
`

const CardContainer = styled(Card)``

const Container = styled.div`
  text-align: center;
  margin-top: 10vh;
  margin-bottom: 16vh;
`

const CardRow = styled(Row)`
  margin-top: 2vh;
`
