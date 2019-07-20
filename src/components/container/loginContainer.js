import React, { Component } from 'react'
import CredentialForm from './../presentation/authentication/credentialForm'
import { inject, observer, Provider } from 'mobx-react'
import 'antd/dist/antd.css'
import { Redirect } from 'react-router-dom'
import WrappedModal from '../common/form/wrappedModal'
import withRedirect from '../common/class/withRedirect'

@inject('store')
@observer
class LoginContainer extends Component {
  constructor(props) {
    super(props)
  }

  onSubmit = async data => {
    await this.props.store.login(data)
    if (this.props.store.loginResponse.success) {
      console.log(
        'successful: ' +
          this.props.store.loginResponse.success +
          ' ' +
          !this.props.store.loginResponse.type
      )
      if (this.props.store.loginResponse.type === 'SEEKER') {
        return this.props.redirect('/search')
      } else if (this.props.store.loginResponse.type === 'OFFERER') {
        return this.props.redirect('/my-flat')
      } else {
        return this.props.redirect('/roleSelection')
      }
    } else if (
      this.props.store.loginResponse.completed &&
      !this.props.store.loginResponse.success
    ) {
      WrappedModal(this.props.store.loginResponse.errorMessage)
    } else if (this.props.store.hasToken()) {
      return this.props.redirect('/')
    }
  }

  render() {
    return (
      <Provider store="store">
        <CredentialForm processData={(name, data) => this.onSubmit(data)} />
      </Provider>
    )
  }
}

export default withRedirect(LoginContainer)
