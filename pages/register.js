import React, { Component } from 'react'
import registerStore from '../stores/registerStore'
import { Provider } from 'mobx-react'
import GeneralInfo from '../components/presentation/register/generalInfo'
import styled from 'styled-components'
import { Layout } from 'antd';
import CustomHeader from '../components/container/customHeader';
import CustomFooter from '../components/container/customFooter';
import BaseLayout from '../components/presentation/baseLayout';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.store = registerStore();
    }

    render() {
        return (
            <BaseLayout>
                <CustomHeader></CustomHeader>
                <Provider BaseStore={this.store}>
                    <GeneralInfo></GeneralInfo>
                </Provider>
                <CustomFooter></CustomFooter>
            </BaseLayout>
        );
    }
}