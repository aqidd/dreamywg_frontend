import React from 'react'
import { Input } from 'antd'


const WrappedInput = ({ type, required, dec, objName, placeHolder, suffix }) =>
dec(objName, {
  rules: [{ required, message: 'Please complete this field!' }]
})(<Input type={type} addonAfter={suffix} placeholder={placeHolder} />)


export default WrappedInput