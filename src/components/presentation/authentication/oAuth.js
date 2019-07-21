import React, { Component } from 'react'
import { inject, observer, Provider } from 'mobx-react'
import { Link } from 'react-router-dom'
import { Button, Card, Col, Row } from 'antd'
import styled from 'styled-components'
import SocialMediaContent from '../../container/socialMediaAuthContainer'


@inject('store')
@observer
class OAuth extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>
        <div>
          <SocialContainer>
            <h2>Registered successfully</h2>
            <h3>Please check your Mails to verify your account</h3>
          </SocialContainer>
          <hr />
          <Provider store={this.props.store.authStore}>
            <SocialMediaContent/>
          </Provider>
          <LoginContainer>
            <hr />
            <h2>Login</h2>
            <h3>You can of course also directly proceed to login.</h3>
            <Col span={12} offset={6}>
              <Card
                title=""
                bordered={false}
                type="flex"
                justify="center"
                gutter={16}
              >
                <Col span={12} offset={6}>
                  <Row>
                    <Link to={'/login'}>
                      <Button type="primary">Go to Login</Button>
                    </Link>
                  </Row>
                </Col>
              </Card>
            </Col>
          </LoginContainer>
        </div>
      </Container>
    )
  }
}

const Container = styled.div`
  background-color: white;
  margin: auto;
  text-align: center;
  padding: 30px;
`

const SocialContainer = styled.div`
  margin-top: 2vh;
  margin-bottom: 2vh;
`

const LoginContainer = styled.div`
  margin-top: 5vh;
  margin-bottom: 5vh;
`

export default OAuth
