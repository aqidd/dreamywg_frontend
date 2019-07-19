import React, { Component } from 'react'
import { Row, Col, Card, Button, Select } from 'antd'
import Title from '../../common/title'
import styled from 'styled-components'
import ListContent from './listContent'
import { inject, observer, Provider } from 'mobx-react'
import { toJS } from 'mobx'
import AddScheduleForm from '../../presentation/flat-details/addScheduleForm';
import AddTimeslotForm from '../../presentation/flat-details/addTimeslotForm';

// TODO refactor logic in UI
@inject('store')
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
    this.props.store.interviewStore.fetchSchedules(this.props.store.flatStore.id).then(response => {
      console.log(response, this.props.store.interviewStore.schedules, 'all schedules')
    }).catch(error => {
      console.log(error)
    })
  }


  getAllPastTimeslots = () => {
    this.props.store.interviewStore.fetchPastTimeslots(this.props.store.flatStore.id).then(response => {
      // do something here
      console.log(response, toJS(this.props.store.interviewStore.pastTimeslots), 'past timeslot')
    }).catch(error => {
      console.log(error)
    })
  }

  refreshTimeslots = (id) => {
    const sch = toJS(this.props.store.interviewStore.schedules).filter(schedule => {
      return schedule._id === id
    })
    this.props.store.interviewStore.setCurrentTimeslots(sch[0], sch[0].timeslots)
  }

  onClickHandler = data => {
    let status = ''
    switch(data.type) {
      case 'like':
        status = 'ACCEPTED'
        break;
      case 'dislike':
        status = 'REJECTED'
        break;
      case 'stop':
        status = 'NO_SHOW'
        break;
      case 'message':
        break;
      default:
        console.error('ERROR onClick')
    }

    this.props.store.interviewStore.updateTimeslotStatus(data.data._id, status)
  }

  render() {
    return (
      <Container>
        <Row>
          <Title> Interviews </Title>
        </Row>
        <Row>
          <h3>Add Schedule</h3>
          <Provider store={this.props.store}>
            <AddScheduleForm></AddScheduleForm>
          </Provider>
          <br/>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <StyledCard title="Upcoming Interview" >
              <Row>
                <Col span={12}>
                  <p>Select Schedule</p>
                  <Select style={{ width: 200 }} onChange={this.refreshTimeslots}>
                    {
                      this.props.store.interviewStore.schedules.map(schedule => {
                        schedule = toJS(schedule)
                        {
                          return <Option value={schedule._id} key={schedule._id}>{schedule.date}</Option>
                        }
                      })
                    }
                  </Select>
                </Col>
                <Col span={12}>
                  <p>Add Timeslot</p>
                  <Provider store={this.props.store}>
                    <AddTimeslotForm></AddTimeslotForm>
                  </Provider>
                </Col>
              </Row>
              <ListContent
                data={toJS(this.props.store.interviewStore.currentTimeslots)}
                past={false}
                onClick={type => onClickHandler(type)}
              />
            </StyledCard>
          </Col>
          <Col span={12}>
            <StyledCard
              title="Past Interview"
            >
              <ListContent
                data={toJS(this.props.store.interviewStore.pastTimeslots)}
                past={true}
                onClick={(data) => this.onClickHandler(data)}
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
