import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import 'antd/dist/antd.css'
import TitleContent from '../common/titlecontent'
import Title from '../common/title'
import styled from 'styled-components'

@inject('ConfirmationStore')
@observer
export default class TestHello extends Component {
  componentDidMount() {
    this.props.ConfirmationStore.verify()
  }

  render() {
    const { confirmationResult } = this.props.ConfirmationStore
    return (
      <Container>
        <Title> {confirmationResult.msg} </Title>
      </Container>
    )
  }
}

const Container = styled.div`
  background-color: white;
`
