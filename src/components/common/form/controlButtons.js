import React from 'react'
import { Button } from 'antd'

const ControlButton = ({ onClick, next }) => (
  <div>
    <Button
      style={{ float: 'right' }}
      htmlType="submit"
      onClick={result => onClick('Next', result)}
      type="primary"
    >
      {next}
    </Button>
  </div>
)

export default ControlButton
