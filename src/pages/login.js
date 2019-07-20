import React, { Component } from 'react'
import store from '../stores/authStore'
import { Provider } from 'mobx-react'
import LoginContainer from '../components/container/loginContainer'
import CustomFooter from '../components/common/customFooter'
import BaseLayout from '../components/presentation/baseLayout'
import DefaultHeader from '../components/common/defaultHeader'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.store = store()
  }

  render() {
    return (
      <div>
        <Provider store={this.store}>
          <BaseLayout>
            <DefaultHeader />
            <LoginContainer />
            <CustomFooter />
          </BaseLayout>
        </Provider>
      </div>
    )
  }
  x
}
