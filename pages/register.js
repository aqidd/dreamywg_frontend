import React, { Component } from 'react'
import userStore from '../stores/userStore'
import { Provider } from 'mobx-react'
import GeneralInfo from '../components/presentation/register/generalInfo'
import CustomHeader from '../components/common/customHeader'
import CustomFooter from '../components/common/customFooter'
import BaseLayout from '../components/presentation/baseLayout'

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.store = userStore()
  }

  render() {
    return (
      <BaseLayout>
        <CustomHeader />
        <Provider UserStore={this.store}>
          <GeneralInfo />
        </Provider>
        <CustomFooter />
      </BaseLayout>
    )
  }
}
