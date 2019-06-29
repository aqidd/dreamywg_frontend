import React from 'react'

const WrappedAnyInput = ({ tag, dec, objName, required, ...others }) =>
dec(objName, {
  rules: [{ required, message: 'Please complete this field!' }]
})(tag)


export default WrappedAnyInput
