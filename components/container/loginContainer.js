import React, { Component } from 'react'
import CredentialForm from './../presentation/authentication/credentialForm'
import { inject, observer, Provider } from 'mobx-react'
import 'antd/dist/antd.css'

@inject('AuthStore')
@observer
export default class LoginContainer extends Component {

  onSubmit = (data) => {
    console.log(data)
  }

  render() {
    return (
      <div>
        <Provider AuthStore='AuthStore'>
            <CredentialForm
                processData={(name,data) => this.onSubmit(data)}/>
        </Provider>
      </div>
    )
  }
}