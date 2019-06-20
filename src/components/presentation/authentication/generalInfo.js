import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Button, Input, Form } from 'antd';

@inject('store')
@observer
export default class GeneralInfo extends Component {
    // todo move to container
    // handleSubmit = event => {
    //     this.props.store.registrationStepStore.nextStep();
    //     event.preventDefault();
    //     // this.props.store.userStore.register();
    // };

    render() {
        return (
            <Form>
                <Form.Item label="First Name">
                    <Input name="firstName" value={this.props.store.userStore.user.firstName} onChange={this.props.store.userStore.setUserData}></Input>
                </Form.Item>
                <Form.Item label="Last Name">
                <Input name="lastName" value={this.props.store.userStore.user.lastName} onChange={this.props.store.userStore.setUserData}></Input>
                </Form.Item>
                <Form.Item label="Phone">
                <Input name="phone" value={this.props.store.userStore.user.phone} onChange={this.props.store.userStore.setUserData}></Input>
                </Form.Item>
                <Form.Item label="Gender">
                    {/* todo : should be dropdown */}
                    <Input></Input>
                </Form.Item>
                <Form.Item label="Date of Birth">
                <Input name="dateOfBirth" value={this.props.store.userStore.user.dateOfBirth} onChange={this.props.store.userStore.setUserData}></Input>
                </Form.Item>
                {/* <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item> */}
            </Form>
        );
    }
}