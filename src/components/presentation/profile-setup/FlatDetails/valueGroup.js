import React from 'react'
import { Row, Col, Input, Form } from 'antd'
import WrappedInput from '../../../common/form/wrappedInput'

const Item = Form.Item

const ValueGroup = ({ decorator }) => (
  <Input.Group>
    <Row gutter={16}>
      <Col span={8}>
        <Item label="Flatsize">
          <WrappedInput
            dec={decorator}
            objName="flat.flatSize"
            suffix="m&sup2;"
            type="number"
          />
        </Item>
      </Col>
      <Col span={8}>
        <Item label="Roomsize">
          <WrappedInput
            dec={decorator}
            objName="flat.room.roomSize"
            suffix="m&sup2;"
            type="number"
          />
        </Item>
      </Col>
      <Col span={8}>
        <Item label="Rent">
          <WrappedInput
            dec={decorator}
            objName="flat.room.rent"
            suffix=" ‎€/Month"
            type="number"
          />
        </Item>
      </Col>
    </Row>
  </Input.Group>
)

export default ValueGroup
