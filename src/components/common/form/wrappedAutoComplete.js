import React from 'react'
import { AutoComplete } from 'antd'

const WrappedAutoComplete = ({
  data,
  dec,
  objName,
  handleSearch,
  placeHolder
}) => {
  const target = (
    <AutoComplete
      defaultOpen={false}
      dataSource={data}
      onSearch={value => handleSearch(value)}
      placeholder={placeHolder}
    />
  )
  return dec(objName)(target)
}

export default WrappedAutoComplete
