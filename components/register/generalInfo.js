import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Button, Input } from 'antd';

@inject('BaseStore')
@observer
export default class GeneralInfo extends Component {
    componentDidMount() {
        // this.props.BaseStore.start()
    }
    componentWillMount() {
        // this.props.BaseStore.stop()
    }

    render() {
        return (
            <form>
                <div>
                    <label>First Name</label>
                    <Input></Input>
                </div>
                <div>
                    <label>Last Name</label>
                    <Input></Input>
                </div>
                <div>
                    <label>Phone</label>
                    <Input></Input>
                </div>
                <div>
                    <label>Gender</label>
                    <Input></Input>
                </div>
                <div>
                    <label>Date of Birth</label>
                    <Input></Input>
                </div>
                <div>
                    <Button>Submit</Button>
                </div>
            </form>
        );
    }
}