import React from 'react'
import {Col, Form, Input, Row, Switch} from 'antd'
import WrappedAnyInput from '../../../common/form/wrappedAnyInput'

const {Item} = Form;

const SwitchGroup = ({decorator, basePath, funisheBasePath}) => (
  <Input.Group>
    <Row>
      <Col span={8}>
        <Item label="Furnished">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false}/>}
            dec={decorator}
            objName={`${funisheBasePath}.furnished`}
          />
        </Item>
      </Col>
      <Col span={8}>
        <Item label="Parking lot">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false}/>}
            dec={decorator}
            objName={`${basePath}.parkingLot`}
          />
        </Item>
      </Col>
      <Col span={8}>
        <Item label="Separate living room">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false}/>}
            dec={decorator}
            objName={`${basePath}.livingroom`}
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
            objName={`${basePath}.shower`}
          />
        </Item>
      </Col>
      <Col span={8}>
        <Item label="Bathtub">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false}/>}
            dec={decorator}
            objName={`${basePath}.bathtub`}
          />
        </Item>
      </Col>
      <Col span={8}>
        <Item label="Kitchen">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false}/>}
            dec={decorator}
            objName={`${basePath}.kitchen`}
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
            objName={`${basePath}.internet`}
          />
        </Item>
      </Col>
      <Col span={8}>
        <Item label="Balcony">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false}/>}
            dec={decorator}
            objName={`${basePath}.balcony`}
          />
        </Item>
      </Col>
      <Col span={8}>
        <Item label="Terrace">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false}/>}
            dec={decorator}
            objName={`${basePath}.terrace`}
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
            objName={`${basePath}.garden`}
          />
        </Item>
      </Col>
      <Col span={8}>
        <Item label="Washing machine">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false}/>}
            dec={decorator}
            objName={`${basePath}.washingMachine`}
          />
        </Item>
      </Col>
      <Col span={8}>
        <Item label="Dishwasher">
          <WrappedAnyInput
            tag={<Switch defaultChecked={false}/>}
            dec={decorator}
            objName={`${basePath}.dishwasher`}
          />
        </Item>
      </Col>
    </Row>
  </Input.Group>
);

export default SwitchGroup
