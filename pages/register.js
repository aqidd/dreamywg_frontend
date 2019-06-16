import React, { Component } from 'react'
import registerStore from '../stores/registerStore'
import { Provider } from 'mobx-react'
import GeneralInfo from '../components/presentation/register/generalInfo'
import styled from 'styled-components'
import { Layout, Steps } from 'antd';
import CustomHeader from '../components/container/customHeader';
import CustomFooter from '../components/container/customFooter';
import BaseLayout from '../components/presentation/baseLayout';
const { Step } = Steps;

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.store = registerStore();
    }

    render() {
        return (
            <BaseLayout>
                <CustomHeader></CustomHeader>
                <Provider RegisterStore={this.store}>
                    <div>
                        <GeneralInfo></GeneralInfo>
                        <Steps current={this.store.getCurrentSteps()}>
                            <Step title="Finished" description="This is a description." />
                            <Step title="In Progress" description="This is a description." />
                            <Step title="Waiting" description="This is a description." />
                        </Steps>
                    </div>
                </Provider>
                <CustomFooter></CustomFooter>
            </BaseLayout>
        );
    }
}