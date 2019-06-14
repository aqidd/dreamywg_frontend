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
      <StyledSection>
        <Introduction onGetStarted={props.onGetStarted} />
      </StyledSection>
      <StyledSection>
        <Services />
      </StyledSection>
      <StyledSection>
        <Showcase onGetStarted={props.onGetStarted} />
      </StyledSection>
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

const StyledSection = styled.section`
  -webkit-animation: fade-in-right 2s;
  @keyframes fade-in-right {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const StyledContent = styled(Layout.Content)`
  background-color: ${backgroundColor};
  color: ${textColor};
`
export default LandingContent
