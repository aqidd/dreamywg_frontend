import React, { Component } from 'react'
import { Layout } from 'antd'
import Introduction from '../../presentation/landing/introduction'
import Services from '../../presentation/landing/services'
import Showcase from '../../presentation/landing/showcase'
import RiseupSection from '../../common/RiseupSection'

const LandingContent = props => (
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
)

const StyledContent = styled(Layout.Content)``
export default LandingContent
