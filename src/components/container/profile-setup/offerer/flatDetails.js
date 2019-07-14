import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import {Form, Input, Row} from 'antd'
import Title from '../../../common/title'
import ValueGroup from '../../../presentation/profile-setup/FlatDetails/valueGroup'
import ControlButton from '../../../common/form/controlButtons'
import SwitchGroup from '../../../presentation/profile-setup/FlatDetails/switchGroup'
import SelectGroup from '../../../presentation/profile-setup/FlatDetails/selectGroup'
import LocationGroup from '../../../presentation/profile-setup/FlatDetails/locationGroup'
import Container from '../../../common/form/container'
import PictureUpload from '../../../common/form/pictureUpload'
import WrappedAnyInput from "../../../common/form/wrappedAnyInput";
import WrappedInput from "../../../common/form/wrappedInput";

const {Item} = Form
const {TextArea} = Input

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
    const {getFieldDecorator, getFieldValue} = this.props.form
    const {
      images,
      imagePreview,
      setImages,
      toggleImagePreview,
      onPreviewCancel,
    } = this.props.store.profileSetupStepStore
    return (
      <Container>
        <Title>Your Flat details</Title>
        <Form layout="vertical">
          <LocationGroup decorator={getFieldDecorator}/>
          <ValueGroup decorator={getFieldDecorator}/>
          <SelectGroup decorator={getFieldDecorator} fieldValue={getFieldValue}/>
          <hr/>
          <br/>
          <h2>Flat properties and Equipment</h2>
          <SwitchGroup decorator={getFieldDecorator} basePath={'flatEquipment'} funisheBasePath={'rooms[0]'}/>
          <hr/>
          <br/>
          <h2>Images and Descriptions</h2>
          <Item label="Images">
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
          </Item>
          <Row>
            <Item label="Flatshare headline">
              <WrappedInput
                dec={getFieldDecorator}
                objName="title"
              />
            </Item>
          </Row>
          <Row>
            <Item label="Short description of your flatshare">
              <WrappedAnyInput
                tag={<TextArea
                  placeholder="Please describe your flatshare in one sentence"
                  autosize={{minRows: 2, maxRows: 2}}
                />}
                dec={getFieldDecorator}
                objName="shortDescription"
              />
            </Item>
          </Row>
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
