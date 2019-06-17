import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import { Form, Input, Select, DatePicker, Switch, Row, Col, Button } from 'antd'
import Title from '../../common/title'
import WrappedInput from '../../common/form/warppedInput'
import WrappedAnyInput from '../../common/form/wrappedAnyInput'
import ValueGroup from '../../presentation/registration/form/valueGroup'
import ControlButton from '../../common/form/controlButtons'
import SwitchGroup from '../../presentation/registration/form/switchGroup'
import SelectGroup from '../../presentation/registration/form/selectGroup'
import LocationGroup from '../../presentation/registration/form/locationGroup'

const Item = props => <Form.Item {...props}>{props.children}</Form.Item>

@inject('store')
@observer
class FlatDetails extends Component {
  constructor(props) {
    super(props)
  }
  handleResult = (type, result) => {
    result.preventDefault()
    this.props.form.validateFields((error, values) => {
      error && type != 'Back'
        ? this.displayError(error)
        : type === 'Next'
        ? this.props.onNext(values)
        : this.props.onBack(values)
    })
  }

  displayError = obj => {
    const errorValue = Object.keys(obj).reduce((a, b) => a + ' ' + b)
    alert('Please complete the following field : ' + errorValue)
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Container>
        <Title>Your Flat details</Title>
        <Form layout="vertical">
          <LocationGroup decorator={getFieldDecorator} />
          <ValueGroup decorator={getFieldDecorator} />
          <SelectGroup decorator={getFieldDecorator} />
          <SwitchGroup decorator={getFieldDecorator} />
          <ControlButton
            onClick={(type, result) => this.handleResult(type, result)}
            next="Next"
            back="Back"
          />
        </Form>
      </Container>
    )
  }
}

const Container = styled.div`
  margin-top: 5vh;
`

const RegistrationFlatDetails = Form.create({
  name: 'registration-flat-detail'
})(FlatDetails)

export default RegistrationFlatDetails
