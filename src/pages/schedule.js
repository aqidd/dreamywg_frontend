import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import MainLayout from '../components/presentation/mainLayout'
import ScheduleStore from "../stores/scheduleStore"
import ScheduleContainer from "../components/container/scheduleContainer"
import DefaultHeader from '../components/common/defaultHeader'

export default class Schedule extends React.Component {
  constructor(props) {
    super(props)
    this.store = ScheduleStore()
    this.store.setScheduleId(this.props.match.params.id)
  }

  render() {
    return (
      <MainLayout>
        <br/>
        <Provider store={this.store}>
          <ScheduleContainer />
        </Provider>
      </MainLayout>
    )
  }
}
