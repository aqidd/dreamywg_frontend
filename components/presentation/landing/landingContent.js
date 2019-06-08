import React, { Component } from 'react'
import { Layout } from 'antd'
import Introduction from './introduction'
import Services from './services'
import Showcase from './showcase'


const LandingContent = ({ onGetStartedClicked }) => (
  <Layout.Content style={{ backgroundColor: 'white' }}>
    <section style={SectionStyle}>
      <Introduction />
    </section>
    <section style={SectionStyle}>
      <Services />
    </section>
    <section style={SectionStyle}>
      <Showcase />
    </section>
  </Layout.Content>
)

const SectionStyle = {
  margin: 'auto'
}

export default LandingContent
