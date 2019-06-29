import React from 'react'
import { Input, Form, Row, Col } from 'antd'
import WrappedSelection from '../../../common/form/wrappedSelection'
import stores from '../../../../util/stores'
import stations from '../../../../util/shortStations'

const { Item } = Form

const SelectGroup = ({ decorator }) => (
  <Input.Group>
    <Row gutter={5}>
      <Col span={12}>
        <Item label="Rental type">
          <WrappedSelection
            required
            placeHolder="Select your rental type"
            dec={decorator}
            objName="rent-type"
            value={['limited', 'unlimited']}
          />
        </Item>
      </Col>
      <Col span={12}>
        <Item label="Flat type">
          <WrappedSelection
            required
            placeHolder="Select your flat type"
            dec={decorator}
            objName="flat-type"
            value={[
              'student only',
              'work only',
              'female only',
              'male only',
              'mixed'
            ]}
          />
        </Item>
      </Col>
    </Row>
    <Item label="Nearby station">
      <WrappedSelection
        placeHolder="Add nearby station"
        type="tags"
        dec={decorator}
        objName="nearby-station"
        value={stations}
      />
    </Item>

    <Item label="Nearby store">
      <WrappedSelection
        placeHolder="Add nearby store"
        type="tags"
        dec={decorator}
        objName="nearby-store"
        value={stores}
      />
    </Item>
    <Row gutter={5}>
      <Col span={12}>
        <Item label="Miscellaneous">
          <WrappedSelection
            placeHolder="Add miscellaneous"
            type="tags"
            dec={decorator}
            objName="miscellaneous"
            value={[
              'Washing machine',
              'Dishwasher',
              'Terrace',
              'Balcony',
              'Garden',
              'Basement,cellar',
              'Elevator',
              'Bicycle storage'
            ]}
          />
        </Item>
      </Col>
      <Col span={12}>
        <Item label="Flooring">
          <WrappedSelection
            placeHolder="Add flooring"
            type="tags"
            dec={decorator}
            objName="flooring"
            value={[
              'Floorboards',
              'Parquet',
              'Laminate',
              'Carpet',
              'Tilling',
              'PVC',
              'Underfloor heating'
            ]}
          />
        </Item>
      </Col>
    </Row>
  </Input.Group>
)

export default SelectGroup
