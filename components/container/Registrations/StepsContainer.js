import React, { Component } from 'react'
import { Steps, Row, Col, Button } from 'antd'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'

const { Step } = Steps

const ControlButton = ({ click, current, length, next, back }) => (
  <div className="steps-action">
    {next === null ? (
      <div />
    ) : (
      <Button onClick={() => click(next)} type="primary">
        {next}
      </Button>
    )}
    {back != null ? (
      <Button onClick={() => click(back)} type="default">
        {back}
      </Button>
    ) : (
      <div />
    )}
  </div>
)

@inject('store')
@observer
export default class StepsContentContainer extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = type => {
    type === 'Next' ? this.props.store.nextStep() : this.props.store.prevStep()
    this.forceUpdate()
  }
  onSubmit = () => {
    
  }

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
                <Row> {data[currentSteps].content} </Row>
              </div>
            </Row>
            <Row>
              <ControlButton
                next={data[currentSteps].next}
                back={data[currentSteps].back}
                click={value => this.handleClick(value)}
                current={currentSteps}
                length={data.length}
              />
            </Row>
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
