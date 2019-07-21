import React from 'react'
import { Row, Col, Card, Icon } from 'antd'
import TitleContent from '../../common/titlecontent'
import styled from 'styled-components'

const dataService = [
  {
    title: 'Intelligent Recommendations',
    content: 'Our algorithm will find the perfect match for you according to your preferences',
    icon: 'file-search',
    position: 'left'
  },
  {
    title: 'Instant Communication',
    content: 'In platform realtime messaging without any delay',
    icon: 'wechat',
    position: 'center'
  },
  {
    title: 'Interview Scheduling',
    content: 'Manage interviewing sessions easily in DreamyWG',
    icon: 'contacts',
    position: 'right'
  }
]


const Services = () => (
  <Container>
    <Row>
      <Row>
        <TitleContent
          subtitle="Our Services"
          title=" Featured Services We Provide"
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
