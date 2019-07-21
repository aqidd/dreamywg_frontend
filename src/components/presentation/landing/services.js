import React from 'react'
import { Row, Col, Card, Icon } from 'antd'
import TitleContent from '../../common/titlecontent'
import styled from 'styled-components'

const dataService = [
  {
    title: 'Intelligence Recommendation',
    content: 'Our algorithm will match you with the best candidate of flat and person',
    icon: 'file-search',
    position: 'left'
  },
  {
    title: 'Instant Communication',
    content: 'In platform instant messaging without hurdle',
    icon: 'wechat',
    position: 'center'
  },
  {
    title: 'Interview Scheduling',
    content: 'Book your meeting schedule with your future flatmate',
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
