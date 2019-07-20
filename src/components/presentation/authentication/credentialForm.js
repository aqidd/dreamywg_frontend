import React from 'react'
import { Button, Col, Form, Icon, Input, Row } from 'antd'
import { inject } from 'mobx-react'
import styled from 'styled-components'

const { Item } = Form

@inject('store')
class CredentialForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.processData(e.target.name, values)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Container>
        <LoginTitle>dreamyWG</LoginTitle>
        <Form
          name="credential-form"
          onSubmit={this.handleSubmit}
          className="credential-form"
        >
          <Item>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your email!' }]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Email"
              />
            )}
          </Item>
          <Item>
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your Password!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Item>
          <Item>
            <Row>
              {/*todo: change here to distinguish between login and register*/}
              <Button
                type="primary"
                htmlType="submit"
                className="credential-form-button"
                block
              >
                Login
              </Button>
            </Row>
          </Item>
        </Form>
      </Container>
    )
  }
}

const WrappedCredentialForm = Form.create({ name: 'credential_info' })(
  CredentialForm
)

export default WrappedCredentialForm

const Container = styled.div`
  background-color: white;
  margin: auto;
  width: 300px;
  text-align: center;
`

const LoginTitle = styled.p`
  font-size: 1.5em;
  margin-bottom: 5vh;
`
