import React from 'react'
import { Select } from 'antd'

const { Option } = Select

const WrappedSelection = ({
  dec,
  objName,
  placeHolder,
  value,
  required,
  type = 'default'
}) =>
  dec(objName, {
    rules: [{ required, message: 'Please complete this field!' }]
  })(
    <Select mode={type} style={{ width: '100%' }} placeholder={placeHolder}>
      {value.map((val, index) => (
        <Option key={index} value={val}>
          {val}
        </Option>
      ))}
    </Select>
  )

export default WrappedSelection
