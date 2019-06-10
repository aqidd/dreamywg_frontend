import React, { Component } from 'react'
import { Layout } from 'antd'
import CustomHeader from '../components/container/customHeader'
import LandingContent from '../components/container/landingContent'
import CustomFooter from '../components/container/customFooter'
import 'antd/dist/antd.css'
import styled from 'styled-components'

const { Header, Footer } = Layout

export default class LandingScreen extends Component {
  constructor(props) {
    super(props)
  }
  render = () => (
    <div>
      <Layout>
        <StyledHeader>
          <CustomHeader />
        </StyledHeader>
        <LandingContent theme="white" />
        <Footer>
          <CustomFooter />
        </Footer>
      </Layout>
    </div>
  )
}

const StyledHeader = styled(Header)`
  background-color: white;
`
