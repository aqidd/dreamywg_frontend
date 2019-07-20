import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Title from '../../common/title'
import styled from 'styled-components'

import 'antd/dist/antd.css'
import { Button } from 'antd'
import BaseLayout from '../../presentation/baseLayout'
import withRedirect from '../../common/class/withRedirect'

@inject('store')
@observer
class ConfirmationContent extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.store.verify(this.props.token)
  }

  render() {
    let result = this.props.store.result
    const content =
      result === undefined ? (
        <p> Pending... </p>
      ) : result.state ? (
        <div>
          <p>Successfully verified your account!</p>
          <Button type="primary" onClick={() => this.props.redirect('/login')}>
            Go to Login
          </Button>
        </div>
      ) : null

    return (
      <Container>
        <Title>Account Confirmation</Title>
        {content}
      </Container>
    )
  }
}

export default withRedirect(ConfirmationContent)

const Container = styled.div`
  background-color: white;
  margin: auto;
  text-align: center;
  padding: 30px;
`
