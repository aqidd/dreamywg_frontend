import React, { Component } from 'react'
import { Steps, Row, Col, Button } from 'antd'
import { inject, observer } from 'mobx-react'
const { Step } = Steps

@inject('store')
@observer
export default class StepsContentContainer extends Component {
  constructor(props) {
    super(props)
  }
  handleClick = type => {
    type === 'next' ? this.props.store.nextStep() : this.props.store.prevStep()
    this.forceUpdate()
  }

  render = () => {
    const { currentSteps } = this.props.store
    const { data } = this.props
    return (
      <div>
        <Steps current={currentSteps}>
          {data.map((value, index) => (
            <Step key={index} title={value.title} />
          ))}
        </Steps>
        <div className="steps-content">
          <Row>{data[currentSteps].content}</Row>
        </div>
        <div className="steps-action">
          <Button onClick={() => this.handleClick('prev')} type="default">
            Back
          </Button>
          <Button onClick={() => this.handleClick('next')} type="primary">
            Next
          </Button>
        </div>
      </div>
    )
  }
}
