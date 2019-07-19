import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import {Col, Form, Input, Row, Select, Switch} from 'antd'
import Title from '../../../common/title'
import Container from '../../../common/form/container'
import WrappedSelection from '../../../common/form/wrappedSelection'
import WrappedAnyInput from '../../../common/form/wrappedAnyInput'
import ControlButton from "../../../common/form/controlButtons";
import PictureUpload from "../../../common/form/pictureUpload";
import Languages from "../../../../util/languages"
import styled from "styled-components";
import {field, flatshareExperience, hobbies, occupation, practiceOfAbstaining} from "../../../../util/selections";
import WrappedInput from "../../../common/form/wrappedInput";

const Item = Form.Item;
const InputGroup = Input.Group;
const TextArea = Input.TextArea;

const {Option} = Select;

@inject('store')
@observer
class PersonalInformation extends Component {
  constructor(props) {
    super(props)
  }

  handleResult = (type, result) => {
    result.preventDefault();
    this.props.form.validateFields((error, values) => {
      error && type !== 'Back'
        ? this.props.displayError(error)
        : type === 'Next'
        ? this.props.onNext(values)
        : this.props.onBack(values)
    })
  };


  render() {
    const {getFieldDecorator} = this.props.form;
    const {
      images,
      imagePreview,
      setImages,
      toggleImagePreview,
      onPreviewCancel
    } = this.props.store;

    return (
      <Container>
        <Title> Personal Information </Title>
        <Form layout={'vertical'}>
          <div style={{width: '100%', float: "left"}}>
            <div style={{width: '75%', float: "left"}}>
              <Row gutter={24}>
                <Col span={12}>
                  <Item label="Occupation">
                    <WrappedSelection
                      placeHolder="Please select"
                      dec={getFieldDecorator}
                      objName="personalInformation.occupation"
                      value={occupation}
                    />
                  </Item>
                </Col>
                <Col span={12}>
                  <Item label="Field">
                    <WrappedSelection
                      placeHolder="Please select"
                      dec={getFieldDecorator}
                      objName="personalInformation.field"
                      value={field}
                    />
                  </Item>
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={12}>
                  <Item label="Age">
                    <WrappedInput
                      dec={getFieldDecorator}
                      objName="personalInformation.age"
                      type="number"
                    />
                  </Item>
                </Col>
                <Col span={12}>
                  <Item label="Flatshare experience">
                    <WrappedSelection
                      placeHolder="Please select"
                      dec={getFieldDecorator}
                      objName="personalInformation.flatshareExperience"
                      value={flatshareExperience}
                    />
                  </Item>
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={12}>
                  <Item label="Languages you speak">
                    <WrappedSelection
                      placeHolder="Please select"
                      type="multiple"
                      dec={getFieldDecorator}
                      objName="personalInformation.languages"
                      value={Languages}
                    />
                  </Item>
                </Col>
                <Col span={12}>
                  <Item label="Practices of Abstaining">
                    <WrappedSelection
                      placeHolder="Please select"
                      type="multiple"
                      dec={getFieldDecorator}
                      objName="personalInformation.practiceOfAbstaining"
                      value={practiceOfAbstaining}
                    />
                  </Item>
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={12}>
                  <Item label="Hobbies">
                    <WrappedSelection
                      placeHolder="Please select"
                      type="multiple"
                      dec={getFieldDecorator}
                      objName="personalInformation.hobbies"
                      value={hobbies}
                    />
                  </Item>
                </Col>
                <Col span={12}>
                  <Item label="Link to social media profile">
                    <WrappedInput
                      dec={getFieldDecorator}
                      objName={"personalInformation.socialMedia"}
                    />
                  </Item>
                </Col>
              </Row>

              <Row>
                <Item label="Short Self Description">
                  <WrappedAnyInput
                    tag={<TextArea
                      placeholder="Please tell us something about yourself..."
                      autosize={{minRows: 3, maxRows: 8}}
                    />}
                    dec={getFieldDecorator}
                    objName="personalInformation.description"
                  />
                </Item>
              </Row>
            </div>
            <div style={{width: "20%", float: "right"}}>
              <Form.Item label="Profile picture">
                <PictureUpload
                  onCancel={() => {
                    onPreviewCancel();
                    this.forceUpdate()
                  }}
                  fileList={images}
                  preview={imagePreview}
                  handleChange={data => {
                    setImages(data);
                    this.forceUpdate()
                  }}
                  handlePreview={file => {
                    toggleImagePreview(file);
                    this.forceUpdate()
                  }}
                  limit={1}
                />
              </Form.Item>
              <Item label="Smoker">
                <WrappedAnyInput
                  tag={<Switch defaultChecked={false}/>}
                  dec={getFieldDecorator}
                  objName="personalInformation.smoker"
                />
              </Item>

              <Item label="Pets">
                <WrappedAnyInput
                  tag={<Switch defaultChecked={false}/>}
                  dec={getFieldDecorator}
                  objName="personalInformation.pets"
                />
              </Item>

              <Item label="Weekend absent">
                <WrappedAnyInput
                  tag={<Switch defaultChecked={false}/>}
                  dec={getFieldDecorator}
                  objName="personalInformation.weekendAbsent"
                />
              </Item>
            </div>
          </div>
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

export default Form.create()(PersonalInformation)

const Verficication = styled.div`
  background-color: white;
  margin:auto;
  text-align: center;
  padding: 30px;
`;
