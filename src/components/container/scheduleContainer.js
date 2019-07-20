import React, { Component } from 'react'
import { Button, Col, Row, Card } from 'antd'
import { inject, observer, Provider } from 'mobx-react'
import moment from 'moment'
import styled from 'styled-components'

@inject('store')
@observer
export default class ScheduleContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.store.getTimeslots()
  }

  render() {
    return (
      <div style={{marginBottom: '2vh'}}>
        <Row>
          <Col span={4}></Col>
          <Col span={10}>
          <h2 style={{ textAlign: 'center' }}>
            Viewing Schedule on &nbsp;
            {moment(this.props.store.schedule.date).format('MMMM Do YYYY')}
          </h2>
          <br/>
          <div>
            <Row>
              <Col span={6}><h3>Start Time</h3></Col>
              <Col span={6}><h3>End Time</h3></Col>
            </Row>
            {this.props.store.schedule.timeslots.map(timeslot => {
              return (
                <StyledCard style={cardStyle}>
                  <Row
                    key={timeslot._id}
                  >
                    <Col span={6}>
                      {moment(timeslot.startTime).format('hh:mm')}
                    </Col>
                    <Col span={6}>{moment(timeslot.endTime).format('hh:mm')}</Col>
                    <Col span={8}>
                      <Button
                        type="primary"
                        htmlType="submit"
                        disabled={!(timeslot.status === 'IDLE')}
                        onClick={() =>
                          this.props.store.bookSchedule(timeslot._id)
                        }
                        style={{marginRight: '2vh'}}
                      >
                        Book Schedule
                      </Button>
                      {this.props.store.isTimeslotOwner(timeslot) ? (
                        <Button
                          type="primary"
                          htmlType="submit"
                          onClick={() =>
                            this.props.store.cancelSchedule(timeslot._id)
                          }
                        >
                          Cancel Schedule
                        </Button>
                      ) : (
                        <span />
                      )}
                    </Col>
                  </Row>
                </StyledCard>
              )
            })}
          </div>
          </Col>
          <Col span={4}></Col>
        </Row>
      </div>
    )
  }
}

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover ${StyledCard} {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`

const cardStyle = {
  borderRadius: 7,
  marginTop: '1vh'
}
