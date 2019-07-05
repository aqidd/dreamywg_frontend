import React, { Component } from 'react'
import { Row, Col, Card, Button, Icon } from 'antd'
import styled from 'styled-components'
import ListContent from './listContent'

const data = [
  {
    href: 'http://ant.design',
    title: `Patipon Riebpradit`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
  },
  {
    href: 'http://ant.design',
    title: `Patipon Riebpradit`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
  },
  {
    href: 'http://ant.design',
    title: `Patipon Riebpradit`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
  },
  {
    href: 'http://ant.design',
    title: `Patipon Riebpradit`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
  }
]

export default class InterviewContainer extends Component {
  constructor(props) {
    super(props)
  }

  onClickHandler = type => {}

  render() {
    return (
      <Container>
        <Row gutter={16}>
          <Col span={12}>
            <Card title="Future Interview">
              <ListContent
                data={data}
                past={false}
                onClick={type => onClickHandler(type)}
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card
              title="Past Interview"
              extra={
                <Button shape="round" type="primary">
                  Add
                </Button>
              }
            >
              <ListContent
                data={data}
                past={true}
                onClick={type => onClickHandler(type)}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

const Container = styled.div`
  margin-left: 5vh;
  margin-right: 5vh;
  margin-top: 5vh;
  margin-bottom: 5vh;
`
