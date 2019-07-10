import React, { Component } from 'react'
import { Row, Col, Card, Button, Icon, Menu, Dropdown } from 'antd'
import Title from '../../common/title'
import styled from 'styled-components'
import ListContent from './listContent'
import { inject, observer } from 'mobx-react'
import { toJS } from 'mobx'

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

@inject('interviewStore')
@observer
export default class InterviewContainer extends Component {

  constructor(props) {
    super(props)
    
    this.menu = (
      <Menu>
        {
          toJS(this.props.interviewStore.schedules).forEach(schedule => {
            <Menu.Item>
              <a target="_blank" rel="noopener noreferrer">
                {schedule.date}
              </a>
            </Menu.Item>
          })
        }
      </Menu>
    );
  }

  componentDidMount() {
    this.props.interviewStore.fetchSchedules().then(response => {
      console.log(response, this.props.interviewStore.schedules)
      
      alert('success on getting schedule')
    }).catch(error => {
      console.log(error)
    })
  }

  onClickHandler = type => {
    if (type.toLowerCase() == 'message') {
      console.log('go to message')
    } else {
      //other action must be done inside store
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Title> Interviews </Title>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <StyledCard title="Upcoming Interview">
            <Dropdown overlay={this.menu}>
              <a className="ant-dropdown-link" href="#">
                Choose Schedule <Icon type="down" />
              </a>
            </Dropdown>
              <ListContent
                data={data}
                past={false}
                onClick={type => onClickHandler(type)}
              />
            </StyledCard>
          </Col>
          <Col span={12}>
            <StyledCard
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
            </StyledCard>
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

const StyledCard = styled(Card)`
  transition: 0.3s;
  &:hover ${StyledCard} {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`
