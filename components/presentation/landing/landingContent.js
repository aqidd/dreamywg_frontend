import React, { Component } from 'react'
import { Layout } from 'antd'
import Introduction from './introduction'
import Services from './services'

const LandingContent = ({ onGetStartedClicked }) => (
  <Layout.Content style={{ backgroundColor: 'white' }}>
    <section style={SectionStyle}>
      <Introduction />
    </section>
    <section style={SectionStyle}>
      <Services />
    </section>
  </Layout.Content>
)

const SectionStyle = {
  margin: 'auto',
  overflow: 'auto',
  
}

export default LandingContent
