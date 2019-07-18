import React, {Component} from 'react'
import store from '../stores/authStore'
import {Provider} from 'mobx-react'
import LoginContainer from '../components/container/loginContainer'
import BaseLayout from '../components/presentation/baseLayout'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.store = store()
  }

  render() {
    return (
      <div>
        <BaseLayout>
          <Provider store={this.store}>
            <LoginContainer/>
          </Provider>
        </BaseLayout>
      </div>
    )
  }
}
