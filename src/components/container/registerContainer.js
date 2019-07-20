import React, { Component } from 'react'
import { Col, Row, Steps } from 'antd'
import { inject, observer, Provider } from 'mobx-react'
import GeneralInfo from '../presentation/authentication/generalInfo'
import CredentialForm from '../presentation/authentication/credentialForm'
import styled from 'styled-components'
import oAuth from '../presentation/authentication/oAuth'
import WrappedModal from '../common/form/wrappedModal'

const { Step } = Steps

@inject('store')
@observer
export default class RegisterContainer extends Component {
  constructor(props) {
    super(props)
  }

  updateFormResponse = response => {
    if (response.status === 200) {
      this.props.store.stepStore.nextStep()
    } else {
      return WrappedModal(`Sorry, something went wrong. Please try again.`)
    }
  }

  handleClick = async (name, data) => {
    switch (name) {
      case 'credential-form':
        this.props.store.authStore.saveUserData({
          email: data.email,
          password: data.password
        })
        this.props.store.stepStore.nextStep()
        break
      case 'general-info-form':
        this.props.store.authStore.saveUserData(data)
        const response = await this.props.store.authStore.registerUser()
        this.updateFormResponse(response)
        break
      default:
        console.log('default')
    }
    this.forceUpdate()
  }

  render = () => {
    const { currentSteps } = this.props.store.stepStore
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
                    <Provider store={this.props.store}>
                      <Content
                        processData={(name, data) =>
                          this.handleClick(name, data)
                        }
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
      </div>
    )
  }
}

const stepsContent = {
  marginTop: '5vh'
}

const StepContainer = styled.div`
  margin-top: 5vh;
  margin-bottom: 5vh;
`

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
  },
  {
    title: 'Verification',
    content: oAuth
  }
]
