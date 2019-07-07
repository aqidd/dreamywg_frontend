import React from 'react'
import {Col, DatePicker, Form, Input, Row} from 'antd'
import WrappedSelection from '../../../common/form/wrappedSelection'
import stations from '../../../../util/shortStations'
import {flatshareType, genderRestriction, rentType, stores} from "../../../../util/selections";
import WrappedAnyInput from "../../../common/form/wrappedAnyInput";

const {RangePicker} = DatePicker;
const {Item} = Form;

const SelectGroup = ({decorator, fieldValue}) => (
  <Input.Group>
    <Row gutter={16}>
      <Col span={12}>
        <Item label="Flat type">
          <WrappedSelection
            placeHolder="Please select"
            dec={decorator}
            objName="flat.flatshareType"
            value={flatshareType}
          />
        </Item>
      </Col>
      <Col span={12}>
        <Item label="Gender restrictions">
          <WrappedSelection
            placeHolder="Please select"
            dec={decorator}
            objName="flat.genderRestrictions"
            value={genderRestriction}
          />
        </Item>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={12}>
        <Item label="Rental type">
          <WrappedSelection
            required
            placeHolder="Please select"
            dec={decorator}
            objName="flat.room.rentType"
            value={rentType}
          />
        </Item>
      </Col>
      <Col span={12}>
        <Item label="Date available">
          <WrappedAnyInput
            required
            tag={fieldValue("flat.room.rentType") === "limited" ? <RangePicker/> : <DatePicker style={{width: "100%"}}/>}
            dec={decorator}
            objName="flat.room.dateAvailable"
          />
        </Item>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={12}>
        <Item label="Nearby station">
          <WrappedSelection
            placeHolder="Please select"
            type="tags"
            dec={decorator}
            objName="flat.stations"
            value={stations}
          />
        </Item>
      </Col>
      <Col span={12}>
        <Item label="Nearby store">
          <WrappedSelection
            placeHolder="Please select"
            type="tags"
            dec={decorator}
            objName="flat.stores"
            value={stores}
          />
        </Item>
      </Col>
    </Row>
  </Input.Group>
);
export default SelectGroup
