import React, { Component } from 'react'
import { Card } from 'antd'
import { Avatar, ChatList, ChatListItem, Column, Row, Subtitle, ThemeProvider, Title } from '@livechat/ui-kit'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'
import moment from 'moment'

const { Meta } = Card

@inject('store')
@observer
export default class ConversationList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false
    }
    this.setState = this.setState.bind(this)
  }

  toggleHover() {
    console.log('toggle hover')
    this.setState({ hover: !this.state.hover })
  }

  deleteChatUnit() {
    this.props.store.deleteChatUnit(id)
  }

  showConversation(id) {
    this.props.store.retrieveChatUnit(id)
  }

  render() {
    const chats = this.props.store.chats
    const keys = Object.keys(chats)
    return (
      <Container>
        <ThemeProvider>
          <div style={{ maxWidth: '100%', height: 400, padding: '30px' }} className="scrollable-container">
            <ChatList>
              {keys.map(key => {
                const element = chats[key]
                const length = element.messages.length
                return (
                  <ChatListItem onClick={() => this.props.store.activeChatId = key}
                                onMouseEnter={this.toggleHover.bind(this)} onMouseLeave={this.toggleHover.bind(this)}>
                    <Avatar imgUrl="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg"/>
                    <Column fill="true">
                      <Row justify>
                        <Title ellipsis>{element.user1.slice(0, 10)}</Title>
                        <Subtitle
                          nowrap>{(length === 0) ? '' : moment(element.messages[length-1].timestamp).format('HH:mm')}</Subtitle>
                      </Row>
                      <Subtitle ellipsis>
                        {(length === 0) ? '' : element.messages[length-1].content.slice(0, 10) //todo: if latest is last
                        }
                      </Subtitle>
                    </Column>
                  </ChatListItem>
                )
              })}
            </ChatList>
          </div>
        </ThemeProvider>
      </Container>
    )
  }

}


const Container = styled.div`
  text-align: center;
  margin-top: 10vh;
  margin-bottom: 16vh;
`

const HoverText = styled.p`
	color: #000;
	:hover {
		color: #ed1212;
		cursor: pointer;
	}
`
