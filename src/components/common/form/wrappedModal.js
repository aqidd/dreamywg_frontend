import React from 'react'
import {Modal} from "antd";

const WrappedModal = (message) => {
  Modal.info({
    content: (
      <div>
        {message}
      </div>
    ),
    onOk() {}
  })
}
export default WrappedModal
