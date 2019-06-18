import React, { Component } from 'react'
import { Layout } from 'antd'
import styled, { ThemeProvider } from 'styled-components'
import theme from 'styled-theming'

const RoleSelection = props => (
  <ThemeProvider theme={{ mode: props.theme }}>
    <StyledContent>
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
export default RoleSelection
