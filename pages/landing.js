import React, { Component } from 'react'
import { Layout } from 'antd'
import CustomHeader from '../components/customHeader'
import LandingContent from '../components/landingContent'

const { Header, Footer, Content } = Layout

export default class LandingScreen extends Component {
  constructor(props) {
    super(props)
  }
  render = () => (
    <div>
      <Layout>
        <Header>
          <CustomHeader />
        </Header>
        <Content>
          <LandingContent />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  )
}
