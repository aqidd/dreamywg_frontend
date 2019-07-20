import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import BaseLayout from '../components/presentation/baseLayout'
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
      <BaseLayout>
        <Provider store={this.store}>
          <DefaultHeader/>
          <ScheduleContainer />
        </Provider>
      </BaseLayout>
    )
  }
}
