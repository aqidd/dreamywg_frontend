import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Button, Input, Form } from 'antd';

@inject('RegisterStore')
@observer
export default class GeneralInfo extends Component {
    componentDidMount() {
        // this.props.RegisterStore.start()
    }
    componentWillMount() {
        // this.props.RegisterStore.stop()
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.RegisterStore.stepForward();
        // this.props.RegisterStore.register();
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Item label="First Name">
                    <Input name="firstName" value={this.props.RegisterStore.user.firstName} onChange={this.props.RegisterStore.setUserData}></Input>
                </Form.Item>
                <Form.Item label="Last Name">
                <Input name="lastName" value={this.props.RegisterStore.user.lastName} onChange={this.props.RegisterStore.setUserData}></Input>
                </Form.Item>
                <Form.Item label="Phone">
                <Input name="phone" value={this.props.RegisterStore.user.phone} onChange={this.props.RegisterStore.setUserData}></Input>
                </Form.Item>
                <Form.Item label="Gender">
                    {/* todo : should be dropdown */}
                    <Input></Input>
                </Form.Item>
                <Form.Item label="Date of Birth">
                <Input name="dateOfBirth" value={this.props.RegisterStore.user.dateOfBirth} onChange={this.props.RegisterStore.setUserData}></Input>
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