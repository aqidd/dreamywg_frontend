import React, { Component } from 'react'
import store from '../stores/authStore'
import { Provider } from 'mobx-react'
import LoginContainer from '../components/container/loginContainer'
import CustomHeader from '../components/common/customHeader'
import CustomFooter from '../components/common/customFooter'
import BaseLayout from '../components/presentation/baseLayout'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.store = store()
  }

  render() {
    return (
      <BaseLayout>
        <CustomHeader />
        <Provider AuthStore={this.store}>
          <LoginContainer />
        </Provider>
        <CustomFooter />
      </BaseLayout>
    )
  }
}
