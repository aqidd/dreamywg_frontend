import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Button, Input, Form } from 'antd';

@inject('BaseStore')
@observer
export default class GeneralInfo extends Component {
    componentDidMount() {
        // this.props.BaseStore.start()
    }
    componentWillMount() {
        // this.props.BaseStore.stop()
    }

    handleSubmit = event => {
        event.preventDefault();
        
    };

    render() {
        return (
            <div>
            <p>{this.props.BaseStore.user.firstName}</p>
            <Form onSubmit={this.handleSubmit}>
                <Form.Item label="First Name">
                    <Input value={this.props.BaseStore.user.firstName} 
                    onChange={this.props.BaseStore.user.firstName = target.value}></Input>
                </Form.Item>
                <Form.Item label="Last Name">
                    <Input></Input>
                </Form.Item>
                <Form.Item label="Phone">
                    <Input></Input>
                </Form.Item>
                <Form.Item label="Gender">
                    {/* todo : should be dropdown */}
                    <Input></Input>
                </Form.Item>
                <Form.Item label="Date of Birth">
                    <Input></Input>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            </div>
        );
    }
}