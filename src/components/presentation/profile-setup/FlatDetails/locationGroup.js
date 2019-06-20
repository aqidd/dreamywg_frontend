import React from 'react'
import { Form, Input } from 'antd'
import WrappedInput from '../../../common/form/warppedInput'

const { Item } = Form

const LocationGroup = ({ decorator }) => (
  <Input.Group>
    <Item label="Location">
      <WrappedInput required dec={decorator} objName="location" placeHolder="Location" />
    </Item>
  </Input.Group>
)

export default LocationGroup
