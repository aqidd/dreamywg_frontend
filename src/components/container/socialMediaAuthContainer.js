import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { inject, observer } from 'mobx-react'
import theme from 'styled-theming'
import { Button, Col, Row } from 'antd'
import { serverUrl } from '../../util/network'

//todo: put credentials to config file

@inject('store')
@observer
export default class SocialMediaAuthContent extends Component {
  constructor(props) {
    super(props)
  }


  linkedin() {
    let clientId = `78guq2rtxaouam`
    let redirectUrl = `${serverUrl}/users/oauthLinkedin`
    let state = this.props.store.user._id
    window.location.href = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUrl}&scope=r_liteprofile&state=${state}`
  }

  facebook() {
    const clientId = `595941830904271`
    const redirectUrl = `${serverUrl}/users/oauthFacebook`
    const state = this.props.store.user._id
    window.location.href = `https://www.facebook.com/v3.3/dialog/oauth?response_type=code&client_id=${clientId}&redirect_uri=${redirectUrl}&state=${state}`

  }

  render() {
    return (
      <ThemeProvider theme={{ mode: this.props.theme }}>
        <Container>
          <br/>
          <h2>OAuth with Social media</h2>
          <h3>To build trust, you can additionally verify your account wiht your social media profile.</h3>
          <Col span={12} offset={6}>
            <Col span={12} offset={6}>
              <Row>
                <Button type="primary" onClick={() => {
                  this.facebook()
                }} block icon="facebook" style={{ margin: '0 0 10px 0' }}>
                  Verify via Facebook
                </Button>
              </Row>
              <Row>
                <Button type="primary" onClick={() => {
                  this.linkedin()
                }} block icon="linkedin" style={{ margin: '0 0 10px 0' }}>
                  Verify via LinkedIn
                </Button>
              </Row>
            </Col>
          </Col>
        </Container>
      </ThemeProvider>
    )
  }
}

const Container = styled.div`
  background-color: white;
  margin:auto;
  text-align: center;
  padding: 30px;
`
