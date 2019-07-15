import React, { Component } from 'react'
import {Typography, Card, Icon } from 'antd'
const { Meta } = Card
import { ThemeProvider, Avatar, ChatListItem, Title, Subtitle, Column, ChatList, Col, Row} from '@livechat/ui-kit'
import styled from 'styled-components'
import { inject, observer, Provider } from 'mobx-react'
import { Skeleton } from 'antd';

@inject('store')
@observer
export default class ConversationList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false
    }
    this.setState = this.setState.bind(this);
  }
  
  componentDidMount() {
    this.props.store.retrieveChatList();
    console.log("list of message",this.props.store.listOfChats)
  }

  toggleHover() {
    console.log("toggle hover")
    this.setState({hover: !this.state.hover})
  }

  deleteChatUnit(){
    this.props.store.deleteChatUnit(id);
  }

  showConversation(id){
    console.log("")
    this.props.store.retrieveChatUnit(id);
  }

  render() {

    return (
    <Container>
      <ThemeProvider>

        <div style={{ maxWidth: '100%', height: 400, padding:'30px'  }} className="scrollable-container">
          <ChatList>
            {this.props.store.listOfChats.map( element =>
              <ChatListItem onClick={() => this.showConversation(element._id)} onMouseEnter={this.toggleHover.bind(this)} onMouseLeave={this.toggleHover.bind(this)}>
                {/*<Avatar imgUrl="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg" />*/}
                <Column fill="true">
                  <Row justify>
                    <Title ellipsis>{element.user1.slice(0,10)}</Title>
                    <Subtitle nowrap>{this.props.store.getTime(element.messages[0].timestamp)}</Subtitle>
                  </Row>
                  <Subtitle ellipsis>
                    {element.messages[0].content.slice(0,10)}
                  </Subtitle>
                </Column>
              </ChatListItem>
            )}

            {/*<ChatListItem onClick={() => this.showConversation("gaby", "stefan")} onMouseEnter={this.toggleHover.bind(this)} onMouseLeave={this.toggleHover.bind(this)}>*/}
            {/*</ChatListItem>*/}
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
