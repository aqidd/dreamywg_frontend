import React, { Component } from 'react'
import { Row, Col, Typography, Card, Icon } from 'antd'
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
  <div style={{ textAlign: 'center' }}>
    <Row>
      <Row>
        <ServiceTitle />
      </Row>
      <Row type="flex" justify="center" gutter={16}>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </Row>
    </Row>
  </div>
)

const ServiceTitle = () => (
  <Row>
    <Row>
      <Text> Our Services</Text>
    </Row>
    <Row>
      <Title level={3}> Featured Service that We Provide </Title>
    </Row>
  </Row>
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
