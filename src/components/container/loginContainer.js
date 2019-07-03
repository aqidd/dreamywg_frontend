import React, { Component } from 'react'
import CredentialForm from './../presentation/authentication/credentialForm'
import { inject, observer, Provider } from 'mobx-react'
import 'antd/dist/antd.css'
import { Redirect } from 'react-router-dom'
import WrappendModal from '../common/form/wrappendModal'

@inject('AuthStore')
@observer
export default class LoginContainer extends Component {
  state = { redirect: false }

  constructor(props) {
    super(props)
  }

  onSubmit = data => {
    //const response = await this.props.AuthStore.login(data)
    //return this.updateFormResponse(response);
    this.props.AuthStore.loginv2(data)
  }

  updateFormResponse = response => {
    if (response.status === 200) {
      const token = response.data.token
      this.props.AuthStore.setToken(token)
      //localStorage.setItem('token', token);
      this.setState({
        redirect: true
      })
    } else {
      return WrappendModal(response.data.message)
    }
  }

  render() {
    if (this.props.AuthStore.requestStatus.completed)
      return <Redirect to={'/roleSelection'} />

    return (
      <Provider store="AuthStore">
        <CredentialForm processData={(name, data) => this.onSubmit(data)} />
      </Provider>
    )
  }
}
