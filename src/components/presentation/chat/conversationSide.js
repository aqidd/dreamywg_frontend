import React from 'react'
import { Card, Input } from 'antd'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'
import { Message, MessageGroup, MessageList, MessageText, ThemeProvider } from '@livechat/ui-kit'
import moment from 'moment'


const { Meta } = Card
const { Search } = Input
@inject('store')
@observer
export default class ChatContent extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <Container>
        <ThemeProvider>
          <div style={{ maxWidth: '100%', height: 400, background: '#fafafa', padding: '30px' }}>
            <MessageList active style={{ background: '#fafafa' }}>
              {/*render message based on store value*/}
              <MessageGroup
                avatar="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg"
                onlyFirstWithMeta
              >
                {this.props.store.chatUnit.messages.map(msg =>
                  <Message date={moment(msg.timestamp).format("HH:mm")}
                           isOwn={(this.props.store.clientId === msg.senderId)}
                           authorName="Visitor">
                    <MessageText>
                      {msg.content}
                    </MessageText>
                  </Message>
                )}
              </MessageGroup>
            </MessageList>
            <div className="card-footer">
              <Search
                placeholder="input text"
                enterButton="Send"
                onSearch={value => this.props.store.sendMessage(value)}
              />
            </div>
          </div>
        </ThemeProvider>
      </Container>
    )
  }
}


const Title = styled.p`
  font-weight: bold;
`
const Subtitle = styled.p`
  font-weight: normal;
`


const Container = styled.div`
  text-align: center;
  margin-top: 10vh;
  margin-bottom: 16vh;
`
const theme = {
  vars: {
    'primary-color': '#427fe1',
    'secondary-color': '#fbfbfb',
    'tertiary-color': '#fff',
    'avatar-border-color': 'blue'
  },
  AgentBar: {
    Avatar: {
      size: '42px'
    },
    css: {
      backgroundColor: 'var(--secondary-color)',
      borderColor: 'var(--avatar-border-color)'
    }
  },
  Message: {
    css: {
      fontWeight: 'bold'
    }
  }
}
