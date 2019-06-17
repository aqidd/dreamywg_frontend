import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import { Form, Input, Select, DatePicker, Switch, Row, Col, Button } from 'antd'
import Title from '../../common/title'
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
              value={[
                'student only',
                'work only',
                'female only',
                'male only',
                'mixed'
              ]}
            />
          </Item>
          <Input.Group>
            <Row gutter={5}>
              <Col span={8}>
                <Item label="Flat">
                  <WrappedInput
                    dec={getFieldDecorator}
                    objName="apartment-size"
                    placeHolder="Apartment"
                    suffix="Square Meter"
                    type="number"
                  />
                </Item>
              </Col>
              <Col span={8}>
                <Item label="Room">
                  <WrappedInput
                    dec={getFieldDecorator}
                    objName="room-size"
                    placeHolder="Room"
                    suffix="Square Meter"
                    type="number"
                  />
                </Item>
              </Col>
              <Col span={8}>
                <Item label="Minimum rent">
                  <WrappedInput
                    dec={getFieldDecorator}
                    objName="month"
                    placeHolder="Month"
                    suffix=" ‎€/Month"
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

          <Item label="Parking lot">
            <WrappedOthersInput
              tag={<Switch defaultChecked={false} />}
              dec={getFieldDecorator}
              objName="parking-lot"
            />
          </Item>
          <Item label="Nearby station">
            <Selections
              placeHolder="Add nearby station"
              type="tags"
              dec={getFieldDecorator}
              objName="nearby-station"
              value={['Bus', 'S-Bahn Station', 'U-Bahn Station', 'Tram']}
            />
          </Item>

          <Item label="Nearby store">
            <Selections
              placeHolder="Add nearby store"
              type="tags"
              dec={getFieldDecorator}
              objName="nearby-store"
              value={['Supermarket', 'Department Store']}
            />
          </Item>
          <Button
            style={{ float: 'right' }}
            htmlType="submit"
            onClick={result => this.handleResult('Next', result)}
            type="primary"
          >
            Next
          </Button>
          <Button
            htmlType="submit"
            onClick={result => this.handleResult('Back', result)}
          >
            Back
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

const Container = styled.div`
  margin-top: 5vh;
`

const RegistrationFlatDetails = Form.create({
  name: 'registration-flat-detail'
})(FlatDetails)

export default RegistrationFlatDetails
