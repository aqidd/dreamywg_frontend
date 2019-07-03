import React from 'react'
import {Modal} from "antd";

const WrappendModal = (message) => {
  Modal.info({
    content: (
      <div>
        {message}
      </div>
    ),
    onOk() {
    }
  })
}
export default WrappendModal
