import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import { Form, Input, Select, DatePicker, Switch, Row, Col, Button } from 'antd'
const { Option } = Select

@inject('store')
@observer
class FlatDetails extends Component {
  constructor(props) {
    super(props)
  }
  handleResult = (type, result) => {
    result.preventDefault()
    this.props.form.validateFields((error, values) => {
      error
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
        <Form
          layout="vertical"
          onSubmit={e => {
            console.log(e)
          }}
        >
          <Item label="Location">
            <WrappedInput
              dec={getFieldDecorator}
              objName="location"
              placeHolder="Location"
            />
          </Item>
          <Item label="Rental type">
            <Selections
              placeHolder="Select your rental type"
              dec={getFieldDecorator}
              objName="rent-type"
              value={['limited', 'unlimited']}
            />
          </Item>
          <Item label="Flat type">
            <Selections
              placeHolder="Select your flat type"
              dec={getFieldDecorator}
              objName="flat-type"
              value={['student only', 'male only', 'female only']}
            />
          </Item>
          <Input.Group>
            <Row gutter={5}>
              <Col span={12}>
                <Item label="Flat">
                  <WrappedInput
                    dec={getFieldDecorator}
                    objName="size"
                    placeHolder="Size"
                    suffix="Square Meter"
                    type="number"
                  />
                </Item>
              </Col>
              <Col span={12}>
                <Item label="Minimum rent">
                  <WrappedInput
                    dec={getFieldDecorator}
                    objName="month"
                    placeHolder="Month"
                    suffix="Month"
                    type="number"
                  />
                </Item>
              </Col>
            </Row>
          </Input.Group>
          <Item label="Date available">
            <WrappedOthersInput
              tag={<DatePicker />}
              dec={getFieldDecorator}
              objName="date-available"
            />
          </Item>

          <Item label="furnished">
            <WrappedOthersInput
              tag={<Switch defaultChecked={false} />}
              dec={getFieldDecorator}
              objName="furnished"
            />
          </Item>
          <Item label="Nearby station/store">
            <Selections
              placeHolder="Add nearby station/store"
              type="tags"
              dec={getFieldDecorator}
              objName="nearby"
              value={[
                'Bus',
                'S-Bahn Station',
                'U-Bahn Station',
                'Tram',
                'Supermarket',
                'Department Store'
              ]}
            />
          </Item>
          <Button
            htmlType="submit"
            onClick={result => this.handleResult('Next', result)}
            type="primary"
          >
            Next
          </Button>
        </Form>
      </Container>
    )
  }
}

const WrappedInput = ({ type, dec, objName, placeHolder, suffix }) =>
  dec(objName, {
    rules: [{ required: true, message: 'Please complete this field!' }]
  })(<Input type={type} addonAfter={suffix} placeholder={placeHolder} />)

const WrappedOthersInput = ({ tag, dec, objName }) =>
  dec(objName, {
    rules: [{ required: true, message: 'Please complete this field!' }]
  })(tag)

const Selections = ({ dec, objName, placeHolder, value, type = 'default' }) =>
  dec(objName, {
    rules: [{ required: true, message: 'Please complete this field!' }]
  })(
    <Select mode={type} placeholder={placeHolder}>
      {value.map((val, index) => (
        <Option key={index} value={val}>
          {val}
        </Option>
      ))}
    </Select>
  )

const Item = props => <Form.Item {...props}>{props.children}</Form.Item>

const Title = styled.p`
  font-size: 3em;
`
const Container = styled.div`
  margin-top: 5vh;
`

const RegistrationFlatDetails = Form.create({
  name: 'registration-flat-detail'
})(FlatDetails)

export default RegistrationFlatDetails
