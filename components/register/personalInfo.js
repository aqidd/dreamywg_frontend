import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Button, Input, Form } from 'antd';

@inject('BaseStore')
@observer
export default class PersonalInfo extends Component {
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
            <Form onSubmit={this.handleSubmit}>
                <Form.Item label="First Name">
                    <Input></Input>
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
        );
    }
}