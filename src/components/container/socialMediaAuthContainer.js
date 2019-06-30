import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import TwitterLogin from 'react-twitter-auth';
import LinkedInLogin from 'linkedin-login-for-react';
import styled, { ThemeProvider } from 'styled-components'
import {inject, observer} from 'mobx-react'
import theme from 'styled-theming'
import { Layout, Card, Col, Row, Button, Input } from 'antd'

@inject('SocialMediaAuthStore')
@observer
export default class SocialMediaAuthContent extends Component{
    componentDidMount() {
        //this.props.SocialMediaAuthStore.linkedInResponse();
    }

    linkedin(){
      window.location.href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78guq2rtxaouam&redirect_uri=http://03440e01.ngrok.io/socialmediaauth/linkedin&scope=r_liteprofile&state=assfasfasdfsa";
    }

    facebook(){
      console.log("wewww")
      window.location.href="https://www.facebook.com/v3.3/dialog/oauth?response_type=code&client_id=595941830904271&redirect_uri=https://98229c38.ngrok.io/socialmediaauth/facebook&state=assfasfasdfsa";
       
    }
    render() {
        return (
             <ThemeProvider theme={{ mode: this.props.theme }}>
                <StyledContent>
                    <Col span={12} offset={6}>
                        <Card title="" bordered={false} type="flex" justify="center" gutter={16} style={{ marginTop: '30vh' }}>
                                <Col span={12} offset={6}>
                                    <LinkedInLogin
                                              clientId="78guq2rtxaouam"
                                              onFailure={this.props.SocialMediaAuthStore.onFailure}
                                              callback={this.props.SocialMediaAuthStore.linkedInResponse}
                                              redirectUri="http://localhost:3000/socialmediaauth/signin-linkedin"
                                              className={linkedin}
                                            />


                                         <FacebookLogin
                                            appId="595941830904271"
                                            fields="name,email,picture"
                                            callback={this.props.SocialMediaAuthStore.facebookResponse} 
                                            render={renderProps => (
                                            <Button type="primary" block icon="facebook" style={{ margin: '0 0 10px 0' }} onClick={renderProps.onClick}>Register via Facebook</Button>)}/>
                                   
                                    <Input placeholder="Basic usage" style={{ margin: '0 0 10px 0' }}/>

                                    <Input.Password placeholder="input password" style={{ margin: '0 0 10px 0' }}/>
                                    <Col span={12} offset={6}>
                                    <Button type="primary" shape="round" justify="center">
                                      Register
                                    </Button>
                                    </Col>
                                </Col>
                                                       
                        
                        </Card>
                    </Col>
                    
                </StyledContent>
            </ThemeProvider>



            )
    
    }
}

const backgroundColor = theme('mode', {
  light: 'white',
  dark: '#222'
})

const textColor = theme('mode', {
  light: '#000',
  dark: '#fff'
})

const StyledContent = styled(Layout.Content)`
  background-color: ${backgroundColor};
  color: ${textColor};
  height: 100vh;
`
const linkedin =  {
  backgroundColor: "#4CAF50", /* Green */
  fontSize: "10px",
  width: "70px",
  height: "30px"

};
