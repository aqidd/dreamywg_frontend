import React from 'react'
import styled from 'styled-components'
import { Form, Input, Select, DatePicker, Switch } from 'antd'

const { Option } = Select

const RegistrationFlatDetails = () => (
  <Container>
    <Title>Your Flat details</Title>
    <Form layout="vertical" onSubmit={() => {}}>
      <Item>
        <Input placeholder="Location" />
      </Item>
      <Item>
        <RentTypeSelect value={['limited', 'unlimited']} />
      </Item>
      <Item>
        <RentTypeSelect value={['student only', 'male only', 'female only']} />
      </Item>
      <Item>
        <Input addonAfter="Square Meter" placeholder="size" />
      </Item>
      <Item>
        <Input addonAfter="month" placeholder="Minimum" />
      </Item>
      <Item label="Data available">
        <DatePicker />
      </Item>
      <Item label="furnished">
        <Switch defaultChecked />
      </Item>
      <Item label="Nearby station/store">
        <RentTypeSelect
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
    </Form>
  </Container>
)

const RentTypeSelect = ({ style, value, type = 'default' }) => (
  <Select
    style={style}
    mode={type}
    defaultValue={value[0]}
    onChange={data => {
      console.log(data)
    }}
  >
    {value.map(val => (
      <Option value={val}>{val}</Option>
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

export default RegistrationFlatDetails
