import React, { Component } from 'react'
import { Layout } from 'antd'
import styled, { ThemeProvider } from 'styled-components'
import theme from 'styled-theming'
import { Button, Icon, Card, Row } from 'antd';


const size = 'large'
const RoleSelection = props => (
  <ThemeProvider theme={{ mode: props.theme }}>
    <StyledContent>
    <Container>
    <Row>
      What would you like to do?
    </Row>
      <Button.Group size={size}>
          <Button type="primary" onClick={this.props.RoleSelection.setRole("seeker")}>
            Search for a room
          </Button> 
          <Button type="primary" onClick={this.props.RoleSelection.setRole("offerer")}>
            Offer a room
          </Button>
        </Button.Group>
      </Container>
    </StyledContent>
  </ThemeProvider>
)

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
`

const Container = styled.div`
  text-align: center;
  margin-top: 10vh;
  margin-bottom: 16vh;
`

export default RoleSelection
