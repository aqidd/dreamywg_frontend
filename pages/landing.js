import React, { Component } from 'react'
import { Layout } from 'antd'
import CustomHeader from '../components/customHeader'
import LandingContent from '../components/presentation/landing/landingContent'
import CustomFooter from '../components/customFooter'
import 'antd/dist/antd.css'

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
          <LandingContent />
        <Footer>
          <CustomFooter />
        </Footer>
      </Layout>
    </div>
  )
}
