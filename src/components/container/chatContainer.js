import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { inject, observer } from 'mobx-react'
import theme from 'styled-theming'
import { Card, Col, Layout, Row } from 'antd'
import ConversationList from '../presentation/chat/conversationList'
import ConversationSide from '../presentation/chat/conversationSide'
import { toJS } from 'mobx'
import Title from '../common/title'

@inject('store')
@observer
export default class ChatContent extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.store.retrieveChatList()
  }

  render() {
    const chat = (
      <Container>
        <Row>
          <Title> Messages </Title>
        </Row>
        <Row>
          <Col span={16} push={8}>
            <ConversationSide
              chat={this.props.store.currentChat}
              clientId={this.props.store.clientId}
              onSend={msg => {
                this.props.store.sendMessage(msg)
                this.forceUpdate()
              }}
            />
          </Col>
          <Col span={8} pull={16}>
            <ConversationList
              chats={this.props.store.chats}
              clientId={this.props.store.clientId}
              onChange={key => {
                this.props.store.updateActiveChat(key)
              }}
            />
          </Col>
        </Row>
        {this.props.store.updateChat? <div></div>: <div></div>}
      </Container>
    )

    const noChats = (
      <div>
        <h1>Sorry, you don't have any messages yet.</h1>
      </div>
    )

    return (
      <ThemeProvider theme={{ mode: this.props.theme }}>
        <StyledContent>
          <Card>
            {Object.keys(this.props.store.chats).length > 0
              ? chat
              : noChats}
          </Card>
        </StyledContent>
      </ThemeProvider>
    )
  }
}

const backgroundColor = theme('mode', {
  light: 'white',
  dark: '#222'
})

const textColor = theme('mode', {
  light: '#000',
  dark: '#fff'
})

const StyledContent = styled(Layout.Content)`
  background-color: ${backgroundColor};
  color: ${textColor};
  border-style: none;
`

const Container = styled.div`
  margin-left: 5vh;
  margin-right: 5vh;
`
