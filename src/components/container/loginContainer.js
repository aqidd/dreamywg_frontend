import React, { Component } from 'react'
import CredentialForm from './../presentation/authentication/credentialForm'
import { inject, observer, Provider } from 'mobx-react'
import 'antd/dist/antd.css'

@inject('AuthStore')
@observer
export default class LoginContainer extends Component {
  componentDidMount() {
    this.props.BaseStore.start()
  }
  componentWillMount() {
    this.props.BaseStore.stop()
  }

  render() {
    return (
      <div>
        <Provider AuthStore='AuthStore'>
            <CredentialForm></CredentialForm>
        </Provider>
      </div>
    )
  }
}