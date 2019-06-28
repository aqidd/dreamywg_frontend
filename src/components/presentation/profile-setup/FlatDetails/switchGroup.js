import React from 'react'
import { Input, Form, DatePicker, Switch, Row, Col } from 'antd'
import WrappedAnyInput from '../../../common/form/wrappedAnyInput'

const { Item } = Form

const SwitchGroup = ({ decorator }) => (
  <Input.Group>
    <Item label="Date available">
      <WrappedAnyInput
        required
        tag={<DatePicker />}
        dec={decorator}
        objName="date-available"
      />
    </Item>
    <Row>
      <Col span={8}>
        <Item label="Furnished">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false} />}
            dec={decorator}
            objName="furnished"
          />
        </Item>
      </Col>
      <Col span={8}>
        <Item label="Parking lot">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false} />}
            dec={decorator}
            objName="parking-lot"
          />
        </Item>
      </Col>
      <Col span={8}>
        <Item label="Separate living room">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false} />}
            dec={decorator}
            objName="livingroom"
          />
        </Item>
      </Col>
    </Row>
    <Row>
      <Col span={8}>
        <Item label="Shower">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false} />}
            dec={decorator}
            objName="shower"
          />
        </Item>
      </Col>
      <Col span={8}>
        <Item label="Bathtub">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false} />}
            dec={decorator}
            objName="bathtub"
          />
        </Item>
      </Col>
      <Col span={8}>
        <Item label="Kitchen">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false} />}
            dec={decorator}
            objName="kitchen"
          />
        </Item>
      </Col>
    </Row>
    <Row>
      <Col span={8}>
        <Item label="Internet">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false} />}
            dec={decorator}
            objName="internet"
          />
        </Item>
      </Col>
      <Col span={8}>
        <Item label="Balcony">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false} />}
            dec={decorator}
            objName="balcony"
          />
        </Item>
      </Col>
      <Col span={8}>
        <Item label="Terrace">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false} />}
            dec={decorator}
            objName="terrace"
          />
        </Item>
      </Col>
    </Row>
    <Row>
      <Col span={8}>
        <Item label="Garden">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false} />}
            dec={decorator}
            objName="garden"
          />
        </Item>
      </Col>
      <Col span={8}>
        <Item label="Washing machine">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false} />}
            dec={decorator}
            objName="washingMachine"
          />
        </Item>
      </Col>
      <Col span={8}>
        <Item label="Dishwasher">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false} />}
            dec={decorator}
            objName="dishwasher"
          />
        </Item>
      </Col>
    </Row>
  </Input.Group>
)

export default SwitchGroup
