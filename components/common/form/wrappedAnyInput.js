

const WrappedAnyInput = ({ tag, dec, objName, required }) =>
dec(objName, {
  rules: [{ required, message: 'Please complete this field!' }]
})(tag)


export default WrappedAnyInput