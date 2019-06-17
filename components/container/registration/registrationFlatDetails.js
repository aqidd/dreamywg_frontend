import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Form } from 'antd'
import Title from '../../common/title'
import ValueGroup from '../../presentation/registration/FlatDetails/valueGroup'
import ControlButton from '../../common/form/controlButtons'
import SwitchGroup from '../../presentation/registration/FlatDetails/switchGroup'
import SelectGroup from '../../presentation/registration/FlatDetails/selectGroup'
import LocationGroup from '../../presentation/registration/FlatDetails/locationGroup'
import Container from '../../common/form/container'

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

const RegistrationFlatDetails = Form.create({
  name: 'registration-flat-detail'
})(FlatDetails)

export default RegistrationFlatDetails
