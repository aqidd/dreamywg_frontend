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
            objName="flatshareType"
            value={flatshareType}
          />
        </Item>
      </Col>
      <Col span={12}>
        <Item label="Gender restriction">
          <WrappedSelection
            placeHolder="Please select"
            dec={decorator}
            objName="genderRestriction"
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
            objName="rooms[0].rentType"
            value={rentType}
          />
        </Item>
      </Col>
      <Col span={12}>
        <Item label="Date available">
          <WrappedAnyInput
            required
            tag={fieldValue("rooms[0].rentType") === "limited" ? <RangePicker/> : <DatePicker style={{width: "100%"}}/>}
            dec={decorator}
            objName={fieldValue("rooms[0].rentType") === "limited" ? "rooms[0].dateAvailableRange" : "rooms[0].dateAvailable"}
          />
        </Item>
      </Col>
    </Row>
    <hr/>
    <br/>

    <Row gutter={16}>
      <Col span={12}>
        <Item label="Nearby station">
          <WrappedSelection
            placeHolder="Please select"
            type="tags"
            dec={decorator}
            objName="stations"
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
            objName="stores"
            value={stores}
          />
        </Item>
      </Col>
    </Row>
  </Input.Group>
);
export default SelectGroup
