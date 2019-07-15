import React, { Component } from 'react'
import { Row, Col, Typography, Card, Icon } from 'antd'
import TitleContent from '../../common/titlecontent'
import styled from 'styled-components'
import { inject, observer, Provider } from 'mobx-react'


const { Meta } = Card
import {
  ThemeProvider,
  MessageList,
  Message,
  MessageText,
  MessageGroup, ChatListItem, Column
} from '@livechat/ui-kit'

import io from "socket.io-client"

@inject('ChatStore', 'AuthStore')
@observer
export default class ChatContent extends React.Component{
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  }

  render() {
    // console.log("mistake", this.props.ChatStore.chatUnit)
    return(

    <Container>
      <ThemeProvider>
        <div style={{ maxWidth: '100%', height: 400, background: '#fafafa', padding: '30px' }}>
          <MessageList active style={{ background: '#fafafa' }}>
            {/*render message based on store value*/}
            {
              this.props.ChatStore.chatUnit.map( element =>
                <MessageGroup
                  avatar="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg"
                  onlyFirstWithMeta
                >
                  {element.messages.map( elementmsg =>
                    <Message date={this.props.ChatStore.getTime(elementmsg.timestamp)} isOwn={true} authorName="Visitor">
                      <MessageText>
                        {elementmsg.content}
                      </MessageText>
                    </Message>
                  )}
                </MessageGroup>
            )}
          </MessageList>
          <div >
            {this.props.ChatStore.state.messages.map(message => {
              return (
                <div> from: {message.user1}, to:{message.user2} , message: {message.content}</div>
              )
            })}
          </div>
          <div className="card-footer">
            {/*<input type="text" placeholder="sender" value={this.props.ChatStore.state.user1} onChange={ev => this.setState({user1: ev.target.value})} className="form-control"/>*/}
            {/*<br/>*/}
            {/*<input type="text" placeholder="receiver" value={this.props.ChatStore.state.user2} onChange={ev => this.setState({user2: ev.target.value})} className="form-control"/>*/}
            {/*<br/>*/}

            <input type="text" placeholder="Message" className="form-control" value={this.props.ChatStore.content} onChange={ev => this.setState({content: ev.target.value})}/>
            <br/>
            <button onClick={() => this.props.ChatStore.sendMessage()} className="btn btn-primary form-control">Send</button>
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
    'avatar-border-color': 'blue',
  },
  AgentBar: {
    Avatar: {
      size: '42px',
    },
    css: {
      backgroundColor: 'var(--secondary-color)',
      borderColor: 'var(--avatar-border-color)',
    }
  },
  Message: {
    css: {
      fontWeight: 'bold',
    },
  },
}
