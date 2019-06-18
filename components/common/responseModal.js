import { Modal } from 'antd'

const ResponseModal = ({response, visible}) => {
    return (
        <Modal
        visible={visible}
        onOk={() => visible=false}
        onCancel={() => visible=false}
        >
            <div>
                {JSON.stringify(response)}
            </div>
        </Modal>
    );
}

export default ResponseModal