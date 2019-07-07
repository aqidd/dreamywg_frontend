import React, { Component } from 'react'
import { Row, Col, Typography, Card, Icon } from 'antd'
import TitleContent from '../../common/titlecontent'
import styled from 'styled-components'
const { Meta } = Card
import { ThemeProvider,
  MessageList,
  Message,
  MessageText,
  MessageGroup,
  MessageButtons,
  MessageButton,
  MessageTitle,
  MessageMedia} from '@livechat/ui-kit'

import io from "socket.io-client"

export default class ChatContent extends React.Component{
  constructor(){
    super();
    this.state = {
      senderId: '',
      receiverId: '',
      content: '',
      timestamp: Date,
      messages: []
    };

    this.socket = io('localhost:8080');

    this.socket.on('receive_message', function(data){
      console.log("receive data again back")
      addMessage(data);
    });

    const addMessage = data => {
      console.log(data);
      this.setState({messages: [...this.state.messages, data]});
      console.log(this.state.messages);
    };

    this.sendMessage = ev => {
      ev.preventDefault();

      this.socket.emit('message', {
        senderId: this.state.senderId,
        receiverId: this.state.receiverId,
        content: this.state.content,
        timestamp: Date.now()
      })
      this.setState({message: ''});

    }
  }
  componentDidMount() {

  }

  render() {
    return(
    <Container>
      <ThemeProvider>
        <div style={{ maxWidth: '100%', height: 400, background: '#fafafa', padding: '30px' }}>
          <MessageList active style={{ background: '#fafafa' }}>
            <MessageGroup
              avatar="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg"
              onlyFirstWithMeta
            >
              <Message date="21:38" authorName="Jon Smith" className="messages">
                {this.state.messages.map(message => {
                  return (
                    <MessageText> from: {message.senderId}, to:{message.receiverId} , message: {message.content}</MessageText>
                  )
                })}
              </Message>
            </MessageGroup>
            <MessageGroup onlyFirstWithMeta avatar="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg">
              <Message date="21:38" isOwn={true} authorName="Visitor">
                <MessageText>
                  I love them
                  sooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
                  much!
                </MessageText>
              </Message>
              <Message date="21:38" isOwn={true} authorName="Visitor">
                <MessageText>This helps me a lot</MessageText>
              </Message>
            </MessageGroup>
          </MessageList>
          <div className="messages">
            {this.state.messages.map(message => {
              return (
                <div> from: {message.senderId}, to:{message.receiverId} , message: {message.content}</div>
              )
            })}
          </div>
          <div className="card-footer">
            <input type="text" placeholder="sender" value={this.state.senderId} onChange={ev => this.setState({senderId: ev.target.value})} className="form-control"/>
            <br/>
            <input type="text" placeholder="receiver" value={this.state.receiverId} onChange={ev => this.setState({receiverId: ev.target.value})} className="form-control"/>
            <br/>
            <input type="text" placeholder="Message" className="form-control" value={this.state.content} onChange={ev => this.setState({content: ev.target.value})}/>
            <br/>
            <button onClick={this.sendMessage} className="btn btn-primary form-control">Send</button>
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
