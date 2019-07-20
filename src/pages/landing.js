import React, { Component } from 'react'
import { Layout } from 'antd'
import LandingContent from '../components/container/landing/landingContent'
import DefaultHeader from '../components/common/defaultHeader'
import AuthStore from '../stores/authStore'
import 'antd/dist/antd.css'

class LandingScreen extends Component {
  constructor(props) {
    super(props)
    this.onGetStarted.bind(this)
    this.store = AuthStore()
  }

  onGetStarted = () => {
    localStorage.getItem('token')
      ? this.props.history.push('/search')
      : this.props.history.push('/register')
  }

  onLogin = () => this.props.history.push('/login')

  render = () => {
    return (
      <Layout>
        <DefaultHeader />
        <LandingContent onGetStarted={() => this.onGetStarted()} />
      </Layout>
    )
  }
}

export default LandingScreen
