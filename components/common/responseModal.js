import { Modal } from 'antd'
import { Component } from 'react';

export default class ResponseModal extends Component {

    constructor(props) {
        super(props)
    }

    render = () => {
        return (
            <Modal
            visible={this.props.visible}
            onOk={() => this.props.hideModal()}
            onCancel={() => this.props.hideModal()}
            >
                <div>
                    {JSON.stringify(this.props.response)}
                </div>
            </Modal>
        )
    }
}