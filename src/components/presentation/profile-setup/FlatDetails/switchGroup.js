import React from 'react'
import {Col, DatePicker, Form, Input, Row, Switch} from 'antd'
import WrappedAnyInput from '../../../common/form/wrappedAnyInput'

const {Item} = Form;

const SwitchGroup = ({decorator}) => (
  <Input.Group>
    <Row>
      <Col span={8}>
        <Item label="Furnished">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false}/>}
            dec={decorator}
            objName="flat.room.furnished"
          />
        </Item>
      </Col>
      <Col span={8}>
        <Item label="Parking lot">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false}/>}
            dec={decorator}
            objName="flat.flatEquipment.parkingLot"
          />
        </Item>
      </Col>
      <Col span={8}>
        <Item label="Separate living room">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false}/>}
            dec={decorator}
            objName="flat.flatEquipment.livingroom"
          />
        </Item>
      </Col>
    </Row>
    <Row>
      <Col span={8}>
        <Item label="Shower">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false}/>}
            dec={decorator}
            objName="flat.flatEquipment.shower"
          />
        </Item>
      </Col>
      <Col span={8}>
        <Item label="Bathtub">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false}/>}
            dec={decorator}
            objName="flat.flatEquipment.bathtub"
          />
        </Item>
      </Col>
      <Col span={8}>
        <Item label="Kitchen">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false}/>}
            dec={decorator}
            objName="flat.flatEquipment.kitchen"
          />
        </Item>
      </Col>
    </Row>
    <Row>
      <Col span={8}>
        <Item label="Internet">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false}/>}
            dec={decorator}
            objName="flat.flatEquipment.internet"
          />
        </Item>
      </Col>
      <Col span={8}>
        <Item label="Balcony">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false}/>}
            dec={decorator}
            objName="flat.flatEquipment.balcony"
          />
        </Item>
      </Col>
      <Col span={8}>
        <Item label="Terrace">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false}/>}
            dec={decorator}
            objName="flat.flatEquipment.terrace"
          />
        </Item>
      </Col>
    </Row>
    <Row>
      <Col span={8}>
        <Item label="Garden">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false}/>}
            dec={decorator}
            objName="flat.flatEquipment.garden"
          />
        </Item>
      </Col>
      <Col span={8}>
        <Item label="Washing machine">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false}/>}
            dec={decorator}
            objName="flat.flatEquipment.washingMachine"
          />
        </Item>
      </Col>
      <Col span={8}>
        <Item label="Dishwasher">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false}/>}
            dec={decorator}
            objName="flat.flatEquipment.dishwasher"
          />
        </Item>
      </Col>
    </Row>
  </Input.Group>
);

export default SwitchGroup
