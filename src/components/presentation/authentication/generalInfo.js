import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import {Button, Col, DatePicker, Form, Icon, Input, Row} from 'antd';
import {gender} from "../../../util/selections";
import WrappedSelection from "../../common/form/wrappedSelection";

@inject('store')
@observer
class GeneralInfo extends Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.processData(e.target.name, values)
      }
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form name="general-info-form" onSubmit={this.handleSubmit}>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item label="First Name">
              {getFieldDecorator('firstName', {
                rules: [{required: true, message: 'Please input your first name!'}],
              })(
                <Input
                  prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                  placeholder="first name"
                />,
              )}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Last Name">
              {getFieldDecorator('lastName', {
                rules: [{required: true, message: 'Please input your last name!'}],
              })(
                <Input
                  prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                  placeholder="last name"
                />,
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={6}>
            <Form.Item label="Gender">
              <WrappedSelection
                required
                placeHolder="Please select"
                dec={getFieldDecorator}
                objName="gender"
                value={gender}
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Date of Birth">
              {getFieldDecorator('dateOfBirth', {
                rules: [{required: true, message: 'Please input your date of birth!'}],
              })(
                <DatePicker style={{width: "98%"}}/>,
              )}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Phone">
              {getFieldDecorator('phoneNumber', {
                rules: [{required: true, message: 'Please input your phone number!'}],
              })(
                <Input
                  prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                  placeholder="phone number"
                />,
              )}
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedGeneralInfo = Form.create({name: 'general_info'})(GeneralInfo);

export default WrappedGeneralInfo
