import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Title from '../../common/title'
import styled from 'styled-components'

import 'antd/dist/antd.css'
import { Button } from 'antd'
import withRedirect from '../../common/class/withRedirect'
import { Link } from 'react-router-dom'

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
    const content = (
      (result === undefined) ? <p>Pending... </p> :
        result.state ? (
            <div>
              <p>Successfully verified your account.</p>
              <Link to={'/login'}>
                <Button type="primary">
                  Go to Login
                </Button>
              </Link>
            </div>
          ) :
          (
            <div>
              <p>{result.data}</p>
            </div>
          )
    )
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
