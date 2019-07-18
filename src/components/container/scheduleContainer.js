import React, {Component} from 'react'
import { Button, Col, Form, Input, Row, Select, Steps, TimePicker } from 'antd'
import {inject, observer, Provider} from 'mobx-react'
import { toJS } from 'mobx'
import AddTimeslotForm from '../presentation/flat-details/addTimeslotForm'
import moment from 'moment'

const {Step} = Steps

@inject('store')
@observer
export default class ScheduleContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.store.getTimeslots();
  }


  render () {
  return (
      <div>
          <Row>

              <p  style={{ textAlign:"center"}}>Available Schedule {moment(this.props.store.schedule.date).format("MMMM Do YYYY")}</p>
              <div>
                <Row style={{ justifyContent:"center"}}>
                  <Col span={8}>Start Time</Col>
                  <Col span={8}>End Time</Col>

                </Row>
                {

                  this.props.store.schedule.timeslots.map((timeslot) => {
                    return (
                      <Row style={{ justifyContent:"center", marginTop:5 , marginBottom:5}}>
                          <Col span={8}>{moment(timeslot.startTime).format("hh:mm")}</Col>
                          <Col span={8}>{moment(timeslot.endTime).format("hh:mm")}</Col>
                          <Col span={8}>

                            <Button type="primary" htmlType="submit" onClick={() => this.props.store.update(timeslot._id)}>
                              Book Schedule
                            </Button>
                          </Col>
                      </Row>
                    )

                  })
                }

              </div>

          </Row>>
      </div>)

}
}
