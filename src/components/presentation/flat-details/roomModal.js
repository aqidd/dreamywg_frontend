import React from 'react'
import { Modal } from 'antd';

const RoomModal = props => (
    <div>
        <Modal
          title="20px to Top"
          style={{ top: 20 }}
          visible={props.visible}
          onOk={() => props.visible = false}
          onCancel={() => props.visible = false}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
    </div>
)

export default RoomModal