import React, { Component } from 'react'
import { Layout } from 'antd'
import Introduction from '../../presentation/landing/introduction'
import Services from '../../presentation/landing/services'
import Showcase from '../../presentation/landing/showcase'
import styled, { ThemeProvider } from 'styled-components'
import RiseupSection from '../../common/RiseupSection'
import theme from 'styled-theming'

const LandingContent = props => (
  <ThemeProvider theme={{ mode: props.theme }}>
    <StyledContent>
      <RiseupSection>
        <Introduction onGetStarted={props.onGetStarted} />
      </RiseupSection>
      <RiseupSection>
        <Services />
      </RiseupSection>
      <RiseupSection>
        <Showcase onGetStarted={props.onGetStarted} />
      </RiseupSection>
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
  
  /*create parallax*/
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export default LandingContent
