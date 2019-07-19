import React, { Component } from 'react'
import { Card } from 'antd'
import {
  Avatar,
  ChatList,
  ChatListItem,
  Column,
  Row,
  Subtitle,
  ThemeProvider,
  Title
} from '@livechat/ui-kit'
import styled from 'styled-components'
import moment from 'moment'

const ConversationList = ({ chat, clientId, onChange }) => {
  const keys = Object.keys(chats)
  const avatarName = (element.user1.id === clientId
    ? element.user2
    : element.user1
  ).fullName.slice(0, 1)
  const username =
    element.user1.id === clientId
      ? element.user2.fullName
      : element.user1.fullName
  const date = length === 0? '' : moment(element.messages[length - 1].timestamp).format('HH:mm')
  const message = length === 0? '': element.messages[length - 1].content.slice(0, 20)
  return (
    <Container>
      <ThemeProvider>
        <div className="scrollable-container">
          <StyledCard style={roundCard}>
            <ChatList>
              {keys.map(key => {
                const element = chats[key]
                const length = element.messages.length
                return (
                  <ChatListItem onClick={() => onChange(key)}>
                    <Avatar letter={avatarName} />
                    <Column fill="true">
                      <Row justify>
                        <Title ellipsis>{username}</Title>
                        <Subtitle nowrap>{date}</Subtitle>
                      </Row>
                      <Subtitle ellipsis>
                        {message}
                      </Subtitle>
                    </Column>
                  </ChatListItem>
                )
              })}
            </ChatList>
          </StyledCard>
        </div>
      </ThemeProvider>
    </Container>
  )
}

export default ConversationList

const Container = styled.div`
  text-align: left;
  margin-bottom: 16vh;
  margin-right: 10vh;
`
const StyledCard = styled(Card)`
  &:hover ${StyledCard} {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`

const roundCard = {
  borderRadius: 30
}
