import React from 'react'
import {Col, Form, Input, Row} from 'antd'
import WrappedInput from '../../../common/form/warppedInput'
import WrappedSelection from "../../../common/form/wrappedSelection";
import Regions from "../../../../util/regions";

const {Item} = Form

const LocationGroup = ({decorator}) => (
  <Input.Group>
    <Row gutter={5}>
      <Col span={8}>
        <Item label="Street">
          <WrappedInput required dec={decorator} objName="street" placeHolder="Street"/>
        </Item>
      </Col>
      <Col span={4}>
        <Item label="House number">
          <WrappedInput
            required
            dec={decorator}
            objName="houseNr"
            placeHolder="House number"
            type="number"
          />
        </Item>
      </Col>
      <Col span={12}>
        <Item label="Region">
          <WrappedSelection
            required
            placeHolder="Please select"
            dec={decorator}
            objName="regions"
            value={Regions}
          />
        </Item>
      </Col>
    </Row>
  </Input.Group>
)

export default LocationGroup
