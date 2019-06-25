import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import {inject, observer} from 'mobx-react'
import theme from 'styled-theming'
import { Layout, Card, Col, Row, Button, Input } from 'antd'
import conversationSide from '../../presentation/chat/conversationSide'
import personList from '../../presentation/chat/personList'

@inject('ChatStore')
@observer
export default class ChatContent extends Component{
    componentDidMount() {
        //this.props.SocialMediaAuthStore.linkedInResponse();
    }

    render() {
        return (
             <ThemeProvider theme={{ mode: this.props.theme }}>
                <StyledContent>
                  <div>
                    <Row>
                      <Col span={18} push={6}>
                        col-18 col-push-6
                      </Col>
                      <Col span={6} pull={18}>
                        col-6 col-pull-18
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