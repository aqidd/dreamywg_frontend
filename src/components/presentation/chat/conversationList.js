import React, { Component } from 'react'
import {Typography, Card, Icon } from 'antd'
const { Meta } = Card
import { ThemeProvider, Avatar, ChatListItem, Title, Subtitle, Column, ChatList, Col, Row} from '@livechat/ui-kit'
import styled from 'styled-components'

export default class ConversationList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hover: false
    }
    this.setState = this.setState.bind(this);
  }


  toggleHover() {
    console.log("toggle hover")
    this.setState({hover: !this.state.hover})

  }

  showConversation = (selfUserId, userId) => {
    console.log(selfUserId);
    console.log(userId);
  }


  render() {
    const activeList = this.state.hover ? true: false;
    return (

    <Container>
      <ThemeProvider>
        <div style={{ maxWidth: '100%', height: 400, padding:'30px'  }}>
          <ChatList>
            <ChatListItem onClick={() => this.showConversation("gaby", "stefan")} onMouseEnter={this.toggleHover.bind(this)} onMouseLeave={this.toggleHover.bind(this)}>
              <Avatar letter="K" />
              <Column fill="true">
                <Row justify>
                  <Title ellipsis>{'Konrad'}</Title>
                  <Subtitle nowrap>{'14:31 PM'}</Subtitle>
                </Row>
                <Subtitle ellipsis>
                  {'Hello, how can I help you? We have a lot to talk about'}
                </Subtitle>
              </Column>
            </ChatListItem>
            <ChatListItem onClick={() => this.showConversation("gaby", "stefan")} onMouseEnter={this.toggleHover.bind(this)} onMouseLeave={this.toggleHover.bind(this)}>
            <Avatar letter="J" />
              <Column fill="true">
                <Row justify>
                  <Title ellipsis>{'Andrew'}</Title>
                  <Subtitle nowrap>{'14:31 PM'}</Subtitle>
                </Row>
                <Subtitle ellipsis>{'actually I just emailed you back'}</Subtitle>
              </Column>
            </ChatListItem >
            <ChatListItem onClick={() => this.showConversation("gaby", "stefan")} onMouseEnter={this.toggleHover.bind(this)} onMouseLeave={this.toggleHover.bind(this)}>
              <Avatar imgUrl="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg" />
              <Column fill="true">
                <Row justify>
                  <Title ellipsis>{'Michael'}</Title>
                  <Subtitle nowrap>{'14:31 PM'}</Subtitle>
                </Row>
                <Subtitle ellipsis>
                  {"Ok, thanks for the details, I'll get back to you tomorrow."}
                </Subtitle>
              </Column>
            </ChatListItem>
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
