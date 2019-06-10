import React, { Component } from 'react'
import { Layout } from 'antd'
import CustomHeader from '../components/container/customHeader'
import LandingContent from '../components/container/landingContent'
import CustomFooter from '../components/container/customFooter'
import 'antd/dist/antd.css'
import styled, { ThemeProvider } from 'styled-components'
const { Header, Footer } = Layout

const theme = 'dark'

export default class LandingScreen extends Component {
  constructor(props) {
    super(props)
  }
  render = () => (
    <div>
      <Layout>
        <StyledHeader
          style={{ backgroundColor: theme === 'dark' ? '#222' : 'white' }}
        >
          <CustomHeader theme={theme} />
        </StyledHeader>
        <LandingContent theme={theme} />
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
