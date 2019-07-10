import React from 'react'
import {Button, Col, Form, Icon, Input, Row} from 'antd';
import {inject} from 'mobx-react';
import styled from "styled-components";

const {Item} = Form

@inject('store')
class CredentialForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.processData(e.target.name, values)
      }
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Container>
        <Form name='credential-form' onSubmit={this.handleSubmit} className="credential-form">
          <Item>
            {getFieldDecorator('email', {
              rules: [{required: true, message: 'Please input your email!'}],
            })(
              <Input
                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                placeholder="Email"
              />,
            )}
          </Item>
          <Item>
            {getFieldDecorator('password', {
              rules: [{required: true, message: 'Please input your Password!'}],
            })(
              <Input
                prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                type="password"
                placeholder="Password"
              />,
            )}
          </Item>
          <Item>
            <Row>
              <Col span={4}>
                <Button type="primary" htmlType="submit" className="credential-form-button">
                  Login
                </Button>
              </Col>
            </Row>
          </Item>
        </Form>
      </Container>
    );
  }
}

const WrappedCredentialForm = Form.create({name: 'credential_info'})(CredentialForm);

export default WrappedCredentialForm

const Container = styled.div`
  background-color: white;
  margin:auto;
  width: 500px;
  text-align: center;
  padding: 30px;
`;
