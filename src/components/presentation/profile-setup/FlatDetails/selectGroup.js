import React from 'react'
import {Col, DatePicker, Form, Input, Row} from 'antd'
import WrappedSelection from '../../../common/form/wrappedSelection'
import stations from '../../../../util/shortStations'
import {
  flooring,
  genderRestriction,
  miscellaneous,
  stores,
  flatshareType,
  rentType
} from "../../../../util/selections";
import WrappedAnyInput from "../../../common/form/wrappedAnyInput";

const {RangePicker} = DatePicker
const {Item} = Form

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
        <Item label="Gender restrictions">
          <WrappedSelection
            placeHolder="Please select"
            dec={decorator}
            objName="genderRestrictions"
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
            objName="rentType"
            value={rentType}
          />
        </Item>
      </Col>
      <Col span={12}>
        <Item label="Date available">
          <WrappedAnyInput
            required
            tag={fieldValue("rentType") === "limited" ? <RangePicker/> : <DatePicker style={{width: "100%"}}/>}
            dec={decorator}
            objName="dateAvailable"
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
    {/*<Row gutter={16}>*/}
    {/*  <Col span={12}>*/}
    {/*    <Item label="Miscellaneous">*/}
    {/*      <WrappedSelection*/}
    {/*        placeHolder="Please select"*/}
    {/*        type="tags"*/}
    {/*        dec={decorator}*/}
    {/*        objName="miscellaneous"*/}
    {/*        value={miscellaneous}*/}
    {/*      />*/}
    {/*    </Item>*/}
    {/*  </Col>*/}
    {/*  <Col span={12}>*/}
    {/*    <Item label="Flooring">*/}
    {/*      <WrappedSelection*/}
    {/*        placeHolder="Please select"*/}
    {/*        type="tags"*/}
    {/*        dec={decorator}*/}
    {/*        objName="flooring"*/}
    {/*        value={flooring}*/}
    {/*      />*/}
    {/*    </Item>*/}
    {/*  </Col>*/}
    {/*</Row>*/}
  </Input.Group>
)
export default SelectGroup
