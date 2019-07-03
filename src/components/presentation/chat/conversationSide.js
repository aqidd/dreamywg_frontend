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

const ConversationSide = () => (
  <Container>
    <ThemeProvider>
      <div style={{ maxWidth: '1ß0%', height: 400, background: '#fafafa', padding: '30px' }}>
        <MessageList active style={{ background: '#fafafa' }}>
          <MessageGroup
            avatar="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg"
            onlyFirstWithMeta
          >
            {/*<Message authorName="Jon Smith" date="21:37" showMetaOnClick>*/}
            {/*  <MessageMedia>*/}
            {/*    <img src="https://static.staging.livechatinc.com/1520/P10B78E30V/dfd1830ebb68b4eefe6432d7ac2be2be/Cat-BusinessSidekick_Wallpapers.png" />*/}
            {/*  </MessageMedia>*/}
            {/*</Message>*/}
            {/*<Message authorName="Jon Smith" date="21:37">*/}
            {/*  <MessageTitle title="Message title" subtitle="24h" />*/}
            {/*  <MessageMedia>*/}
            {/*    <img src="https://static.staging.livechatinc.com/1520/P10B78E30V/dfd1830ebb68b4eefe6432d7ac2be2be/Cat-BusinessSidekick_Wallpapers.png" />*/}
            {/*  </MessageMedia>*/}
            {/*  <MessageText>*/}
            {/*    The fastest way to help your customers - start chatting with visitors*/}
            {/*  </MessageText>*/}
            {/*  <MessageButtons>*/}
            {/*    <MessageButton label="View more" primary />*/}
            {/*    <MessageButton label="Cancel" />*/}
            {/*  </MessageButtons>*/}
            <Message>
              <MessageText>
                The fastest way to help your customers - start chatting with visitors
                who need your help using a free 30-day trial.
              </MessageText>
              {/*<MessageButtons>*/}
              {/*  <MessageButton label="View more" primary />*/}
              {/*  <MessageButton label="Cancel" />*/}
              {/*</MessageButtons>*/}
            </Message>
            <Message date="21:38" authorName="Jon Smith">
              <MessageText>Hi! I would like to buy those shoes</MessageText>
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
      </div>
    </ThemeProvider>
  </Container>
)

export default ConversationSide

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
