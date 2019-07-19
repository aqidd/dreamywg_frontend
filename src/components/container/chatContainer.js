import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { inject, observer } from 'mobx-react'
import theme from 'styled-theming'
import { Card, Col, Layout, Row } from 'antd'
import ConversationList from '../presentation/chat/conversationList'
import ConversationSide from '../presentation/chat/conversationSide'
import { toJS } from 'mobx'

@inject('store')
@observer
export default class ChatContent extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.store.chatStore.retrieveChatList()
  }

  render() {

    const chat = (
      <div>
        <Row>
          <Col span={16} push={8}>
            <ConversationSide
              chat={this.props.store.chatStore.currentChat}
              clientId={this.props.store.chatStore.clientId}
              onSend={(msg) => {this.props.store.chatStore.sendMessage(msg); this.forceUpdate() }}/>
          </Col>
          <Col span={8} pull={16}>
            <ConversationList
              chat={this.props.store.chatStore.chats}
              clientId={this.props.store.chatStore.clientId}
              onChange={key => {this.props.store.chatStore.updateActiveChat(key);}}
            />
          </Col>
        </Row>
      </div>
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
            {Object.keys(this.props.store.chatStore.chats).length > 0 ? chat : noChats}
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
  height: 100vh;
`
