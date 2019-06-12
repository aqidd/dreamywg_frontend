import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Button, Input, Form, Dropdown } from 'antd';

@inject('BaseStore')
@observer
export default class ChooseRole extends Component {
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
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Offerer
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Seeker
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}