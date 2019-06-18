import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Form, Icon, Input, Button, Checkbox, DatePicker } from 'antd';

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
        const { getFieldDecorator } = this.props.form;
        return (
            <Form name="general-info-form" onSubmit={this.handleSubmit}>
                <Form.Item label="First Name">
                    {getFieldDecorator('firstName', {
                        rules: [{ required: true, message: 'Please input your firstName!' }],
                    })(
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="firstName"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="Last Name">
                    {getFieldDecorator('lastName', {
                        rules: [{ required: true, message: 'Please input your lastName!' }],
                    })(
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="lastName"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="Phone">
                    {getFieldDecorator('phoneNumber', {
                        rules: [{ required: true, message: 'Please input your phoneNumber!' }],
                    })(
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="phoneNumber"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="Gender">
                    {/* todo : should be dropdown */}
                    <Input></Input>
                </Form.Item>
                <Form.Item label="Date of Birth">
                    {getFieldDecorator('dateOfBirth', {
                        rules: [{ required: true, message: 'Please input your dateOfBirth!' }],
                    })(
                        <DatePicker></DatePicker>,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedGeneralInfo = Form.create({ name: 'general_info' })(GeneralInfo);

export default WrappedGeneralInfo