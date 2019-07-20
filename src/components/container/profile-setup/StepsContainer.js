import React, { Component } from 'react'
import { Col, Row, Steps, message } from 'antd'
import { inject, observer } from 'mobx-react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import withRedirect from '../../common/class/withRedirect'

const { Step } = Steps

@inject('store')
@observer
class StepsContentContainer extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = async (type, result) => {
    this.props.store.updateData(result)
    type === 'Next'
      ? await this.props.store.nextStep()
      : await this.props.store.prevStep()
    this.forceUpdate()
  }

  displayError = obj => {
    const errorValue = Object.keys(obj).reduce((a, b) => a + ', ' + b)
    message.error('Please complete the following field: ' + errorValue, 20)
  }

  render = () => {
    const { currentSteps } = this.props.store
    const { data } = this.props
    const Content = data[currentSteps].content

    if (this.props.store.status) {
      if (this.props.store.isSeeker) {
        return <Redirect to="/search" push />
      } else {
        return <Redirect to="/my-flat" push />
      }
    }

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
                    displayError={obj => this.displayError(obj)}
                    onNext={data => this.handleClick('Next', data)}
                    onBack={data => this.handleClick('Back', data)}
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

export default withRedirect(StepsContentContainer)

const StepContainer = styled.div`
  margin-top: 5vh;
  margin-bottom: 5vh;
`
