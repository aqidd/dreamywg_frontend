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
        <Item label="Television">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false} />}
            dec={decorator}
            objName="television"
          />
        </Item>
      </Col>
    </Row>
    <Row>
      <Col span={8}>
        <Item label="Private Shower">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false} />}
            dec={decorator}
            objName="private-shower"
          />
        </Item>
      </Col>
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
        <Item label="Kitchen">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false} />}
            dec={decorator}
            objName="kitchen"
          />
        </Item>
      </Col>
    </Row>
  </Input.Group>
)

export default SwitchGroup
