import React, { Component } from 'react'
import { Layout } from 'antd'
import CustomHeader from '../components/container/customHeader'
import LandingContent from '../components/container/landingContent'
import CustomFooter from '../components/container/customFooter'
import 'antd/dist/antd.css'
import styled, { ThemeProvider } from 'styled-components'
import Router from 'next/router'

const { Header, Footer } = Layout
const theme = 'light'

export default class LandingScreen extends Component {
  constructor(props) {
    super(props)
    this.onGetStarted.bind(this)
  }

  onGetStarted = () => Router.push('/register')

  onLogin = () => Router.push('/login')

  render = () => (
    <div>
      <Layout>
        <StyledHeader>
          <CustomHeader theme={theme} onLogin={() => this.onLogin()} />
        </StyledHeader>
        <LandingContent
          theme={theme}
          onGetStarted={() => this.onGetStarted()}
        />
        <StyledFooter>
          <CustomFooter />
        </StyledFooter>
      </Layout>
    </div>
  )
}

const themeDecider = () => (theme == 'dark' ? '#222' : 'white')

const StyledHeader = styled(Header)`
  background-color: ${themeDecider()};
`
const StyledFooter = styled(Footer)`
  background-color: ${themeDecider()};
`
