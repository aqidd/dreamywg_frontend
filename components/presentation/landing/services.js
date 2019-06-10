import React, { Component } from 'react'
import { Row, Col, Typography, Card, Icon } from 'antd'
import TitleContent from '../../common/titlecontent'
import styled from 'styled-components'
const { Title, Text } = Typography
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

const ServiceCard = ({ title, subtitle, icon }) => (
  <Col span={5}>
    <Card hoverable bordered={false}>
      <Icon
        style={{
          fontSize: 86,
          marginBottom: 16
        }}
        type={icon}
      />
      <Meta title={title} description={subtitle} />
    </Card>
  </Col>
)
export default Services

const Container = styled.div`
  text-align: center;
  margin-top: 10vh;
  margin-bottom: 16vh;
`

const CardRow = styled(Row)`
  margin-top: 2vh;
`
