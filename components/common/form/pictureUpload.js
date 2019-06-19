import { Upload, Modal } from 'antd'

const UploadButton = () => <div> button </div>

const PictureUpload = ({
  fileList,
  onCancel,
  preview,
  handlePreview,
  handleChange
}) => (
  <div>
    <Upload
      listType="picture-card"
      fileList={fileList}
      onPreview={file => handlePreview(file)}
      onChange={data => handleChange(data)}
    >
      {fileList.length >= 10 ? null : UploadButton}
    </Upload>
    <Modal visible={preview.show} footer={null} onCancel={() => onCancel()}>
      <img
        alt="Unable to load image"
        style={{ width: '100%' }}
        src={preview.url}
      />
    </Modal>
  </div>
)

export default PictureUpload
