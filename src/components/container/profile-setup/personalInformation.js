import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import {Button, Col, Form, Input, Row, Select, Switch} from 'antd'
import Title from '../../common/title'
import Container from '../../common/form/container'
import WrappedSelection from '../../common/form/wrappedSelection'
import WrappedAnyInput from '../../common/form/wrappedAnyInput'
import ControlButton from "../../common/form/controlButtons";
import PictureUpload from "../../common/form/pictureUpload";
import Languages from "../../../util/languages"
import styled from "styled-components";

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
        ? this.displayError(error)
        : type === 'Next'
        ? this.props.onNext(values)
        : this.props.onBack(values)
    })
  };
  displayError = obj => {
    const errorValue = Object.keys(obj).reduce((a, b) => a + ' ' + b);
    alert('Please complete the following field : ' + errorValue)
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    const {
      images,
      imagePreview,
      setImages,
      toggleImagePreview,
      onPreviewCancel
    } = this.props.store.profileSetupStepStore;

    return (
      <Container>
        <Title> Personal Information </Title>
        <Form layout={'vertical'}>
          <div style={{width: '100%', float: "left"}}>
            <div style={{width: '75%',  float: "left"}}>
              <Row gutter={24}>
                <Col span={12}>
                  <Item label="Occupation">
                    <WrappedSelection
                      placeHolder="Please select"
                      dec={getFieldDecorator}
                      objName="occupation"
                      value={['Student', 'Working', 'On Vacation', 'Others']}
                    />
                  </Item>
                </Col>
                <Col span={12}>
                  <Item label="Field">
                    <WrappedSelection
                      placeHolder="Please select"
                      dec={getFieldDecorator}
                      objName="field"
                      value={['IT', 'Medicine', 'Physics', 'Math']}
                    />
                  </Item>
                </Col>
              </Row>

              <Row gutter={24}>
                <Col span={8}>
                  <Item label="Flatshare experience">
                    <WrappedSelection
                      placeHolder="Please select"
                      dec={getFieldDecorator}
                      objName="flatshareExperience"
                      value={['None', '≤ 1 year', '> 1 year', '> 2 year']}
                    />
                  </Item>
                </Col>

                <Col span={8}>
                  <Item label="Languages you speak">
                    <WrappedSelection
                      placeHolder="Please select"
                      type="multiple"
                      dec={getFieldDecorator}
                      objName="languages"
                      value={Languages}
                    />
                  </Item>
                </Col>
                <Col span={8}>
                  <Item label="Practices of Abstaining">
                    <WrappedSelection
                      placeHolder="Please select"
                      type="multiple"
                      dec={getFieldDecorator}
                      objName="practiceOfAbstaining"
                      value={['Vegan', 'Vegetarian', 'Paleo']}
                    />
                  </Item>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <Item label="Hobbies">
                    <WrappedSelection
                      placeHolder="Please select"
                      type="multiple"
                      dec={getFieldDecorator}
                      objName="hobbies"
                      value={['Football', 'Volleyball', 'Soccer']}
                    />
                  </Item>
                </Col>
                <Col span={12}>
                  <Verficication>
                    <Button>Verify Account</Button>
                  </Verficication>
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
                    objName="selfDescription"
                  />
                </Item>
              </Row>

            </div>
            <div style={{width: "20%", float:"right"}}>
              <Form.Item label="Profile picture">
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
                  limit={1}
                />
              </Form.Item>
              <Item label="Smoker">
                <WrappedAnyInput
                  tag={<Switch defaultChecked={false}/>}
                  dec={getFieldDecorator}
                  objName="smoker"
                />
              </Item>

              <Item label="Pets">
                <WrappedAnyInput
                  tag={<Switch defaultChecked={false}/>}
                  dec={getFieldDecorator}
                  objName="pets"
                />
              </Item>

              <Item label="Weekend absent">
                <WrappedAnyInput
                  tag={<Switch defaultChecked={false}/>}
                  dec={getFieldDecorator}
                  objName="weekendAbsent"
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
