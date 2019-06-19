import React, { Component } from 'react'
import { Steps, Row, Col, Button, Form, Modal } from 'antd'
import { inject, observer, Provider } from 'mobx-react'
import GeneralInfo from './../presentation/authentication/generalInfo'
import CredentialForm from './../presentation/authentication/credentialForm'
import styled from 'styled-components'
import Router from 'next/router'
import ResponseModal from '../common/responseModal';

const { Step } = Steps

const steps = [
  {
    title: 'Credentials',
    content: CredentialForm,
    next: 'Next',
    back: 'Back'
  },
  {
    title: 'General Info',
    content: GeneralInfo,
    next: 'Next',
    back: 'Back'
  }
]


@inject('RegisterStore')
@observer
export default class RegisterContainer extends Component {
  formRef = null
  state = {visible: false, formResponse: ''}
  constructor(props) {
    super(props)
  }

  dismissModal = () => {
    this.setState({
      visible: false
    })
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  updateFormResponse = (response) => {
    // TODO: message should be moved to constant
    let message = ''; 
    // success responses. lol 
    if(parseInt(response.status / 100) === 2 ) { 
      message = 'Registration success. Please check your email'
    } else {
      message = `Registration error. Code ${response.status}`
    }
    this.setState({
      formResponse: message
    })
    
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
        this.updateFormResponse(response);
        this.showModal();
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
      <div>
        <StepContainer>
          <Row>
            <Col xl={5} lg={2} md={2} sm={2} xs={2} />
            <Col xl={14} lg={20} md={20} sm={20} xs={20}>
              <Row>
                <Steps progressDot current={currentSteps}>
                  {data.map((value, index) => (
                    <Step key={index} title={value.title} />
                  ))}
                </Steps>
                <div style={stepsContent}>
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
        <ResponseModal 
          response={this.state.formResponse} 
          visible={this.state.visible}
          hideModal={this.dismissModal}>  
        </ResponseModal>
      </div>
    )
  }
}

const stepsContent = {
  marginTop: '5vh'
};

const StepContainer = styled.div`
  margin-top: 5vh;
  margin-bottom: 5vh;`