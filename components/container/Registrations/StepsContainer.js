import React, { Component } from 'react'
import { Steps, Row, Col, Button, Form } from 'antd'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'

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

@inject('store')
@observer
export default class StepsContentContainer extends Component {
  formRef = null
  constructor(props) {
    super(props)
  }

  saveFormRef = formRef => (this.formRef = formRef)

  handleClick = (type, result) => {
    console.log(this.formRef)
    console.log(result)
    type === 'Next' ? this.props.store.nextStep() : this.props.store.prevStep()
    this.forceUpdate()
  }
  onSubmit = () => {}

  render = () => {
    const { currentSteps } = this.props.store
    const { data } = this.props
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
                  <Content
                    ref={this.saveFormRef}
                    onNext={(data) => this.handleClick('Next', data)}
                    onPrev={(data) => this.handleClick('Back', data)}
                  />
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
  margin-bottom: 5vh;
`
