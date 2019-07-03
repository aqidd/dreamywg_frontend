import React from 'react'
import {Col, DatePicker, Form, Input, Row} from 'antd'
import WrappedSelection from '../../../common/form/wrappedSelection'
import stations from '../../../../util/shortStations'
import {flooring, miscellaneous, stores, typeOfFlatshare, typeOfRent} from "../../../../util/selections";
import WrappedAnyInput from "../../../common/form/wrappedAnyInput";

const {RangePicker} = DatePicker
const {Item} = Form

const SelectGroup = ({decorator, fieldValue}) => (
    <Input.Group>
      <Row gutter={16}>
        <Col span={8}>
          <Item label="Rental type">
            <WrappedSelection
              required
              placeHolder="Please select"
              dec={decorator}
              objName="typeOfRent"
              value={typeOfRent}
            />
          </Item>
        </Col>
        <Col span={8}>
          <Item label="Date available">
            <WrappedAnyInput
              required
              tag={fieldValue("typeOfRent") === "limited" ? <RangePicker/> : <DatePicker/>}
              dec={decorator}
              objName="date-available"
            />
          </Item>
        </Col>
        <Col span={8}>
          <Item label="Flat type">
            <WrappedSelection
              required
              placeHolder="Please select"
              dec={decorator}
              objName="flatType"
              value={typeOfFlatshare}
            />
          </Item>
        </Col>
      </Row>
      <Item label="Nearby station">
        <WrappedSelection
          placeHolder="Please select"
          type="tags"
          dec={decorator}
          objName="stations"
          value={stations}
        />
      </Item>

      <Item label="Nearby store">
        <WrappedSelection
          placeHolder="Please select"
          type="tags"
          dec={decorator}
          objName="stores"
          value={stores}
        />
      </Item>
      <Row gutter={16}>
        <Col span={12}>
          <Item label="Miscellaneous">
            <WrappedSelection
              placeHolder="Please select"
              type="tags"
              dec={decorator}
              objName="miscellaneous"
              value={miscellaneous}
            />
          </Item>
        </Col>
        <Col span={12}>
          <Item label="Flooring">
            <WrappedSelection
              placeHolder="Please select"
              type="tags"
              dec={decorator}
              objName="flooring"
              value={flooring}
            />
          </Item>
        </Col>
      </Row>
    </Input.Group>
  )
export default SelectGroup
