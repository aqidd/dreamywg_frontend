import React, { Component } from 'react'
import CredentialForm from './../presentation/authentication/credentialForm'
import { inject, observer, Provider } from 'mobx-react'
import 'antd/dist/antd.css'
import withRedirect from '../common/class/withRedirect'
import { TYPE } from '../../stores/authStore'
import { Redirect } from 'react-router'
import styled from 'styled-components'

@inject('store')
@observer
class LoginContainer extends Component {
  constructor(props) {
    super(props)
  }

  onSubmit = async data => {
    await this.props.store.login(data)
    if (this.props.store.hasToken()) {
      const type = this.props.store.getUserType()
      if (type === TYPE.SEEKER) {
        return this.props.redirect('/search')
      } else if (type === TYPE.OFFERER) {
        return this.props.redirect('/my-flat')
      } else {
        return this.props.redirect('/roleSelection')
      }
    }
  }

  render() {
    if (this.props.store.hasToken()) {
      const type = this.props.store.getUserType()
      if (type === TYPE.SEEKER) {
        return <Redirect to={'/search'} />
      } else if (type === TYPE.OFFERER) {
        return <Redirect to={'/my-flat'} />
      } else {
        return <Redirect to={'/roleSelection'} />
      }
    }

    return (
      <Provider store="store">
        <Container>
          <CredentialForm type ="Login" processData={(name, data) => this.onSubmit(data)} />
        </Container>
      </Provider>
    )
  }
}

const Container = styled.div`
  margin-top: 10vh;
  margin-bottom: 10vh;
`

export default withRedirect(LoginContainer)
