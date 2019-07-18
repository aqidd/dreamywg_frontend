import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import BaseLayout from '../components/presentation/baseLayout'
import DefaultHeader from '../components/common/defaultHeader'
import CustomFooter from '../components/common/customFooter'
import ScheduleStore from "../stores/scheduleStore"
import ScheduleContainer from "../components/container/scheduleContainer"

export default class Schedule extends React.Component {
  constructor(props) {
    super(props)
    this.store = ScheduleStore()
    this.store.setScheduleId(this.props.match.params.id)
  }

  render() {
    return (
      <BaseLayout>
        <DefaultHeader/>
        <Provider store={this.store}>
          <div>
            <ScheduleContainer />
          </div>
        </Provider>
        <CustomFooter/>
      </BaseLayout>

    )
  }
}
