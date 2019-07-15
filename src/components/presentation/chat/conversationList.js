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
    const listOfChats = this.props.store.listOfChats
    return (
      <Container>
        <ThemeProvider>
          <div style={{ maxWidth: '100%', height: 400, padding: '30px' }} className="scrollable-container">
            <ChatList>
              {listOfChats.map(element =>
                <ChatListItem onClick={() => this.showConversation(element._id)}
                              onMouseEnter={this.toggleHover.bind(this)} onMouseLeave={this.toggleHover.bind(this)}>
                  <Avatar imgUrl="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg"/>
                  <Column fill="true">
                    <Row justify>
                      <Title ellipsis>{element.user1.slice(0, 10)}</Title>
                      <Subtitle nowrap>{(element.messages.length === 0)? "":moment(element.messages[0].timestamp).format('HH:mm')}</Subtitle>
                    </Row>
                    <Subtitle ellipsis>
                      {(element.messages.length === 0)? "": element.messages[0].content.slice(0, 10)}
                    </Subtitle>
                  </Column>
                </ChatListItem>
              )}
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
