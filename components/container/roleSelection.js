import React, { Component } from 'react'
import { Layout } from 'antd'
import styled, { ThemeProvider } from 'styled-components'
import theme from 'styled-theming'
import { Button, Icon, Card, Row } from 'antd';
import {inject, observer} from 'mobx-react'


@inject('RoleSelectionStore')
@observer
export default class RoleSelection extends Component{
  componentDidMount() {
      this.props.RoleSelectionStore.setRole.bind("");
  }

  render () {
    return (
        <ThemeProvider theme={{ mode: this.props.theme }}>
    <StyledContent>
    <Container>
    <Row>
      What would you like to do?
    </Row>
      <Button.Group size={size}>
          <Button type="primary" onClick={this.props.RoleSelectionStore.setRole.bind(this, "seeker")}>
            Search for a room
          </Button> 
          <Button type="primary" onClick={this.props.RoleSelectionStore.setRole.bind(this, "offerer")}>
            Offer a room
          </Button>
        </Button.Group>
      </Container>
    </StyledContent>
  </ThemeProvider>


      )
  }

}


const size = 'large'
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
