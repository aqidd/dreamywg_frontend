import React, { Component } from 'react'
import { Layout } from 'antd'
import LandingContent from '../components/container/landing/landingContent'
import CustomFooter from '../components/common/customFooter'
import styled from 'styled-components'

import 'antd/dist/antd.css'
import DefaultHeader from '../components/common/defaultHeader'
import { Provider } from 'mobx-react'
const { Header, Footer } = Layout
const theme = 'light'
import AuthStore from '../stores/authStore'

class LandingScreen extends Component {
  constructor(props) {
    super(props)
    this.onGetStarted.bind(this)
    this.store = AuthStore()
  }

  onGetStarted = () => {
    localStorage.getItem('token') ? 
    this.props.history.push('/search') :
    this.props.history.push('/register')
  }

  onLogin = () => this.props.history.push('/login')

  render = () => {
    return (

        <Layout>
          <DefaultHeader theme={theme} />
          <LandingContent
            theme={theme}
            onGetStarted={() => this.onGetStarted()}
          />
          <StyledFooter>
            <CustomFooter />
          </StyledFooter>
        </Layout>

    )
  }
}

export default LandingScreen

const themeDecider = () => (theme === 'dark' ? '#222' : 'white')

const StyledHeader = styled.div`
  background-color: ${themeDecider()};
`
const StyledFooter = styled(Footer)`
  background-color: ${themeDecider()};
`
