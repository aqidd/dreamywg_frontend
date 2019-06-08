import React, { Component } from 'react'
import { Row, Col, Typography, Card, Icon } from 'antd'
import TitleContent from '../../common/titlecontent'
const { Title, Text } = Typography
const { Meta } = Card

const dataService = [
  {
    title: 'Intelligence Search',
    content: 'Very provide very very Gut Services',
    icon: <Icon style={{ fontSize: 50, marginBottom: 16 }} type="file-search" />
  }
]

const Services = () => (
  <div style={{ textAlign: 'center', marginTop: '16vh', marginBottom: '16vh' }}>
    <Row>
      <Row>
        <TitleContent
          subtitle="Our Services"
          title=" Featured Service that We Provide"
        />
      </Row>
      <Row type="flex" justify="center" gutter={16}>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </Row>
    </Row>
  </div>
)

const ServiceCard = data => (
  <Col span={5}>
    <Card hoverable bordered={false}>
      <Icon style={{ fontSize: 50, marginBottom: 16 }} type="file-search" />
      <Meta
        title="Europe Street beat"
        description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
      />
    </Card>
  </Col>
)
export default Services
