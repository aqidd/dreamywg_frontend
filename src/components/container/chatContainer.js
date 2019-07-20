import React, { Component } from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'
import { Card, Col, Layout, Row } from 'antd'
import ConversationList from '../presentation/chat/conversationList'
import ConversationSide from '../presentation/chat/conversationSide'
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
        {this.props.store.updateChat? <div/>: <div/>}
      </Container>
    )

    const noChats = (
      <div>
        <h1>Sorry, you don't have any messages yet.</h1>
      </div>
    )

    return (
        <StyledContent>
          <Card>
            {Object.keys(this.props.store.chats).length > 0
              ? chat
              : noChats}
          </Card>
        </StyledContent>
    )
  }
}

const StyledContent = styled(Layout.Content)`
  border-style: none;
`

const Container = styled.div`
  margin-left: 5vh;
  margin-right: 5vh;
`
