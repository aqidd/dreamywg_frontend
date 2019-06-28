import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Form } from 'antd'
import Title from '../../common/title'
import ValueGroup from '../../presentation/profile-setup/FlatDetails/valueGroup'
import ControlButton from '../../common/form/controlButtons'
import SwitchGroup from '../../presentation/profile-setup/FlatDetails/switchGroup'
import SelectGroup from '../../presentation/profile-setup/FlatDetails/selectGroup'
import LocationGroup from '../../presentation/profile-setup/FlatDetails/locationGroup'
import Container from '../../common/form/container'
import PictureUpload from '../../common/form/pictureUpload'

@inject('store')
@observer
class FlatDetails extends Component {
  constructor(props) {
    super(props)
  }
  handleResult = (type, result) => {
    result.preventDefault()
    this.props.form.validateFields((error, values) => {
      error && type != 'Back'
        ? this.displayError(error)
        : type === 'Next'
        ? this.props.onNext(values)
        : this.props.onBack(values)
    })
  }

  displayError = obj => {
    const errorValue = Object.keys(obj).reduce((a, b) => a + ' ' + b)
    alert('Please complete the following field : ' + errorValue)
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const {
      images,
      imagePreview,
      setImages,
      toggleImagePreview,
      onPreviewCancel
    } = this.props.store.profileSetupStepStore
    return (
      <Container>
        <Title>Your Flat details</Title>
        <Form layout="vertical">
          <LocationGroup decorator={getFieldDecorator} />
          <ValueGroup decorator={getFieldDecorator} />
          <SelectGroup decorator={getFieldDecorator} />
          <SwitchGroup decorator={getFieldDecorator} />
          <Form.Item label="Images">
            <PictureUpload
              onCancel={() => {
                onPreviewCancel()
                this.forceUpdate()
              }}
              fileList={images}
              preview={imagePreview}
              handleChange={data => {
                setImages(data)
                this.forceUpdate()
              }}
              handlePreview={file => {
                toggleImagePreview(file)
                this.forceUpdate()
              }}
              limit={10}
            />
          </Form.Item>
          <ControlButton
            onClick={(type, result) => this.handleResult(type, result)}
            next="Next"
            back="Back"
          />
        </Form>
      </Container>
    )
  }
}

export default Form.create()(FlatDetails)
