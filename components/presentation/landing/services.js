import React, { Component } from 'react'
import { Row, Col, Typography, Card, Icon } from 'antd'
import TitleContent from '../../common/titlecontent'
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
  <div style={{ textAlign: 'center', marginTop: '16vh', marginBottom: '16vh' }}>
    <Row>
      <Row>
        <TitleContent
          subtitle="Our Services"
          title=" Featured Service that We Provide"
        />
      </Row>
      <Row
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
      </Row>
    </Row>
  </div>
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
