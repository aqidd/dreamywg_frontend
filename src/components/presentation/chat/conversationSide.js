import React from 'react'
import { Input } from 'antd'
import styled from 'styled-components'
import {
  Bubble,
  Message,
  MessageGroup,
  MessageList,
  MessageText,
  ThemeProvider
} from '@livechat/ui-kit'
import moment from 'moment'

const { Search } = Input

export default class ConversationSide extends React.Component {
  constructor(props) {
    super(props)
    this.state = { currentMessage: '' }
  }

  render() {
    const chat = this.props.chat
    const clientId = this.props.clientId
    return (
      <ThemeProvider>
        <Container>
          <ChatContainer>
            <MessageList active style={{ background: '#fafafa' }}>
              {/*render message based on store value*/}
              {chat.messages.map(msg => (
                <MessageGroup
                  avatarLetter={(chat.user1.id === msg.senderId
                    ? chat.user1
                    : chat.user2
                  ).fullName.slice(0, 1)}
                  isOwn={clientId === msg.senderId}
                  onlyFirstWithMeta
                >
                  <Message
                    date={moment(msg.timestamp).format('HH:mm')}
                    isOwn={clientId === msg.senderId}
                    authorName={
                      chat.user1.id === msg.senderId
                        ? chat.user1.fullName
                        : chat.user2.fullName
                    }
                  >
                    <Bubble
                      style={
                        clientId === msg.senderId
                          ? receiverBubble
                          : senderBubble
                      }
                      isOwn={clientId === msg.senderId}
                    >
                      <MessageText>{msg.content}</MessageText>
                    </Bubble>
                  </Message>
                </MessageGroup>
              ))}
            </MessageList>
            <div className="card-footer">
              <Search
                placeholder="input text"
                value={this.state.currentMessage}
                onChange={event => {
                  console.log('things has changed')
                  this.setState({ currentMessage: event.target.value })
                }}
                onPressEnter={value => {
                  this.setState({ currentMessage: '' })
                  this.props.onSend(this.state.currentMessage)
                }}
                enterButton="Send"
                onSearch={value => {
                  this.setState({ currentMessage: '' })
                  this.props.onSend(this.state.currentMessage)
                }}
              />
            </div>
          </ChatContainer>
        </Container>
      </ThemeProvider>
    )
  }
}

const Container = styled.div`
  text-align: center;
  margin-bottom: 16vh;
`

const ChatContainer = styled.div`
  height: 50vh;
`

const receiverBubble = {
  backgroundColor: '#1890ff',
  borderBottomLeftRadius: 30,
  borderTopLeftRadius: 30,
  borderTopRightRadius: 0,
  borderBottomRightRadius: 30
}
const senderBubble = {
  backgroundColor: 'pink',
  borderBottomLeftRadius: 30,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 30,
  borderBottomRightRadius: 30
}
