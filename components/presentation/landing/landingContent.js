import React, { Component } from 'react'
import { Row, Col, Typography, Button, Card, Layout } from 'antd'
import Introduction from './introduction'
const { Title, Text, Paragraph } = Typography
const { Meta } = Card

const LandingContent = ({ onGetStartedClicked }) => (
  <Layout.Content style={{ backgroundColor: 'white' }}>
    <section style={SectionStyle}>
      <Introduction />
    </section>
  </Layout.Content>
)

const SectionStyle = {
  margin: 'auto',
  overflow: 'auto',
  height: '80vh'
}

export default LandingContent
