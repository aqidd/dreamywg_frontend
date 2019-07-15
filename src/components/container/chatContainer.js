import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import {inject, observer} from 'mobx-react'
import theme from 'styled-theming'
import { Layout, Card, Col, Row, Button, Input } from 'antd'
import ConversationList from '../presentation/chat/conversationList'
import ConversationSide from '../presentation/chat/conversationSide'


@inject('store')
export default class ChatContent extends Component{
    render() {
        return (
             <ThemeProvider theme={{ mode: this.props.theme }}>
                <StyledContent>
                  <div>
                    <Row>
                      <Col span={16} push={8}>
                        <ConversationSide />
                      </Col>
                      <Col span={8} pull={16}>
                        <ConversationList />
                      </Col>

                    </Row>
                  </div>
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
