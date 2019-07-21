import React from 'react'
import { Col, DatePicker, Form, Input, Row } from 'antd'
import WrappedSelection from '../../../common/form/wrappedSelection'
import { flatshareType, genderRestriction, rentType } from '../../../../util/selections'
import WrappedAnyInput from '../../../common/form/wrappedAnyInput'

const { RangePicker } = DatePicker
const { Item } = Form

const SelectGroup = ({ decorator, fieldValue }) => (
  <Input.Group>
    <Row gutter={16}>
      <Col span={12}>
        <Item label="Flat type*">
          <WrappedSelection
            placeHolder="Please select"
            dec={decorator}
            objName="flatshareType"
            value={flatshareType}
            required
          />
        </Item>
      </Col>
      <Col span={12}>
        <Item label="Gender restriction*">
          <WrappedSelection
            placeHolder="Please select"
            dec={decorator}
            objName="genderRestriction"
            value={genderRestriction}
            required
          />
        </Item>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={12}>
        <Item label="Rental type*">
          <WrappedSelection
            required
            placeHolder="Please select"
            dec={decorator}
            objName="rooms[0].rentType"
            value={rentType}
          />
        </Item>
      </Col>
      <Col span={12}>
        <Item label="Date available*">
          <WrappedAnyInput
            required
            tag={fieldValue('rooms[0].rentType') === 'limited'
              ? <RangePicker style={{ width: '100%' }}/>
              : <DatePicker style={{ width: '100%' }}/>}
            dec={decorator}
            objName={fieldValue('rooms[0].rentType') === 'limited' ? 'rooms[0].dateAvailableRange' : 'rooms[0].dateAvailable'}
          />
        </Item>
      </Col>
    </Row>
    <hr/>
    <br/>
  </Input.Group>
)
export default SelectGroup
