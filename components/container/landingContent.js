import React, { Component } from 'react'
import { Layout } from 'antd'
import Introduction from '../presentation/landing/introduction'
import Services from '../presentation/landing/services'
import Showcase from '../presentation/landing/showcase'
import styled, { ThemeProvider } from 'styled-components'
import theme from 'styled-theming'

const LandingContent = props => (
  <ThemeProvider theme={{ mode: props.theme }}>
    <StyledContent>
      <section>
        <Introduction />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Showcase />
      </section>
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
export default LandingContent
