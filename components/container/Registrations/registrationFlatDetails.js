import React, { Component } from 'react'
import styled from 'styled-components'
import { Form, Input, Select, DatePicker, Switch, Row, Col, Button } from 'antd'

const { Option } = Select

class FlatDetails extends Component {
  constructor(props) {
    super(props)
  }
  handleResult = (type, result) => {
    result.preventDefault()
    this.props.form.validateFields((error, values) => {
      if (error) {
        console.error(error)
      } else {
        console.log(values)
      }
    })
  }
  render() {
    return (
      <Container>
        <Title>Your Flat details</Title>
        <Form
          layout="vertical"
          onSubmit={e => {
            console.log(e)
          }}
        >
          <Item>
            <Input placeholder="Location" />
          </Item>
          <Item>
            <Selections value={['limited', 'unlimited']} />
          </Item>
          <Item>
            <Selections value={['student only', 'male only', 'female only']} />
          </Item>
          <Input.Group>
            <Row gutter={5}>
              <Col span={12}>
                <Item>
                  <Input addonAfter="Square Meter" placeholder="size" />
                </Item>
              </Col>
              <Col span={12}>
                <Item>
                  <Input addonAfter="month" placeholder="Minimum" />
                </Item>
              </Col>
            </Row>
          </Input.Group>
          <Item label="Date available">
            <DatePicker />
          </Item>

          <Item label="furnished">
            <Switch defaultChecked />
          </Item>
          <Item label="Nearby station/store">
            <Selections
              type="tags"
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

const Selections = ({ style, value, type = 'default' }) => (
  <Select style={style} mode={type} defaultValue={value[0]}>
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
