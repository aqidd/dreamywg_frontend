import React, { Component } from 'react'
import userStore from '../stores/userStore'
import { Provider } from 'mobx-react'
import GeneralInfo from '../components/presentation/register/generalInfo'
import CustomHeader from '../components/container/customHeader';
import CustomFooter from '../components/container/customFooter';
import BaseLayout from '../components/presentation/baseLayout';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.store = userStore();
    }

    render() {
        return (
            <BaseLayout>
                <CustomHeader></CustomHeader>
                <Provider UserStore={this.store}>
                    <GeneralInfo></GeneralInfo>
                </Provider>
                <CustomFooter></CustomFooter>
            </BaseLayout>
        );
    }
}