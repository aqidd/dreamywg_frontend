import React, { Component } from 'react'
import { Row, Col, Card, Button, Select } from 'antd'
import Title from '../../common/title'
import styled from 'styled-components'
import ListContent from './listContent'
import { inject, observer } from 'mobx-react'
import { toJS } from 'mobx'

// TODO refactor logic in UI
@inject('interviewStore')
@observer
export default class InterviewContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.getAllSchedules()
    this.getAllPastTimeslots()
  }

  getAllSchedules = () => {
    this.props.interviewStore.fetchSchedules().then(response => {
      // do something here
      console.log(response, this.props.interviewStore.schedules, 'all schedules')
    }).catch(error => {
      console.log(error)
    })
  }

  getAllPastTimeslots = () => {
    this.props.interviewStore.fetchPastTimeslots().then(response => {
      // do something here
      console.log(response, toJS(this.props.interviewStore.pastTimeslots), 'past timeslot')
    }).catch(error => {
      console.log(error)
    })
  }

  refreshTimeslots = (id) => {
    const sch = toJS(this.props.interviewStore.schedules).filter(schedule => {
      return schedule._id === id
    })
    this.props.interviewStore.setCurrentTimeslots(sch[0].timeslots)
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
            <StyledCard title="Upcoming Interview" >
              <p>Select Schedule</p>
              <Select style={{ width: 200 }} onChange={this.refreshTimeslots}>
                {
                  this.props.interviewStore.schedules.map(schedule => {
                    schedule = toJS(schedule)
                    {
                      return <Option value={schedule._id} key={schedule._id}>{schedule.date}</Option>
                    }
                  })
                }
              </Select>
              <ListContent
                data={toJS(this.props.interviewStore.currentTimeslots)}
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
                data={toJS(this.props.interviewStore.pastTimeslots)}
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
