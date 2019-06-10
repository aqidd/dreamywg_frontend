import React, { Component } from 'react'
import { Layout } from 'antd'
import Introduction from '../presentation/landing/introduction'
import Services from '../presentation/landing/services'
import Showcase from '../presentation/landing/showcase'
import styled from 'styled-components'

const LandingContent = ({ onGetStartedClicked, theme }) => (
  <StyledContent theme={theme}>
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
)

const StyledContent = styled(Layout.Content)`
  background-color: ${props => props.theme === 'dark'? '#30363D': 'white'};
`
export default LandingContent
