import React, {Component} from 'react'
import {Col, Row, Steps} from 'antd'
import {inject, observer} from 'mobx-react'
import {Redirect} from "react-router-dom";
import styled from 'styled-components'

const {Step} = Steps

@inject('store')
@observer
export default class StepsContentContainer extends Component {
  formRef = null

  constructor(props) {
    super(props)
  }

  handleClick = (type, result) => {
    this.props.store.updateData(result)
    type === 'Next'
      ? this.props.store.nextStep()
      : this.props.store.prevStep()
    this.forceUpdate()
  }

  render = () => {

    const {currentSteps} = this.props.store
    const {data} = this.props
    const Content = data[currentSteps].content

    if (this.props.store.status) {
      if (this.props.store.isSeeker) {
        return <Redirect to={'/search'}/>
      } else {
        //TODO: Aqid put your redirect path here: -> retrieve flat ID and view flat offerview
        return (<Redirect to={'/'}/>)
      }
    }
    return (
      <StepContainer>
        <Row>
          <Col xl={5} lg={2} md={2} sm={2} xs={2}/>
          <Col xl={14} lg={20} md={20} sm={20} xs={20}>
            <Row>
              <Steps current={currentSteps}>
                {data.map((value, index) => (
                  <Step key={index} title={value.title}/>
                ))}
              </Steps>
              <div className="steps-content">
                <Row>
                  <Content
                    onNext={data => this.handleClick('Next', data)}
                    onBack={data => this.handleClick('Back', data)}
                  />
                </Row>
              </div>
            </Row>
            <Row/>
          </Col>
          <Col xl={5} lg={2} md={2} sm={2} xs={2}/>
        </Row>
      </StepContainer>
    )
  }
}

const StepContainer = styled.div`
  margin-top: 5vh;
  margin-bottom: 5vh;
`
