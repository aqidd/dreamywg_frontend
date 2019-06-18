import React, { Component } from 'react'
import { Steps, Row, Col, Button, Form } from 'antd'
import { inject, observer, Provider } from 'mobx-react'
import GeneralInfo from './../presentation/authentication/generalInfo'
import CredentialForm from './../presentation/authentication/credentialForm'
import styled from 'styled-components'
import Router from 'next/router'

const { Step } = Steps

const ControlButton = ({ click, next, back }) => {
  return (
    <div className="steps-action">
      {next === null ? (
        <div />
      ) : (
        <Button
          htmlType="submit"
          onClick={result => click(next, result)}
          type="primary"
        >
          {next}
        </Button>
      )}
      {back != null ? (
        <Button
          htmlType="submit"
          onClick={result => click(back, result)}
          type="default"
        >
          {back}
        </Button>
      ) : (
        <div />
      )}
    </div>
  )
}

@inject('RegisterStore')
@observer
export default class RegisterContainer extends Component {
  formRef = null
  constructor(props) {
    super(props)
  }

  handleClick = async (name,data) => {
    switch(name) {
      case 'credential-form':
        this.props.RegisterStore.userStore.saveUserData({
          username: data.username,
          password: data.password
        })
        this.props.RegisterStore.step.nextStep()
        break;
      case 'general-info-form':
        this.props.RegisterStore.userStore.saveUserData(data)
        const response = await this.props.RegisterStore.userStore.registerUser();
        console.log(response)
        Router.push('/')
        break;
      default:
        console.log('default')
    }
    this.forceUpdate()
  }
  onSubmit = () => {}

  render = () => {
    const { currentSteps } = this.props.RegisterStore.step
    const data = steps
    const Content = data[currentSteps].content

    return (
      <StepContainer>
        <Row>
          <Col xl={5} lg={2} md={2} sm={2} xs={2} />
          <Col xl={14} lg={20} md={20} sm={20} xs={20}>
            <Row>
              <Steps current={currentSteps}>
                {data.map((value, index) => (
                  <Step key={index} title={value.title} />
                ))}
              </Steps>
              <div className="steps-content">
                <Row>
                  <Provider store={this.props.RegisterStore}>
                    <Content
                      processData={(name,data) => this.handleClick(name, data)}
                    />
                  </Provider>
                </Row>
              </div>
            </Row>
            <Row />
          </Col>
          <Col xl={5} lg={2} md={2} sm={2} xs={2} />
        </Row>
      </StepContainer>
    )
  }
}

const StepContainer = styled.div`
  margin-top: 5vh;
  margin-bottom: 5vh;`

const steps = [
    {
      title: 'Profile',
      content: CredentialForm,
      next: 'Next',
      back: 'Back'
    },
    {
      title: 'Role?',
      content: GeneralInfo,
      next: 'Next',
      back: 'Back'
    }
]
  