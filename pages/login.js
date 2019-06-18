import React, { Component } from 'react'
import AuthStore from '../stores/authStore'
import { Provider } from 'mobx-react'
import LoginContainer from '../components/container/loginContainer'
import CustomHeader from '../components/common/customHeader';
import CustomFooter from '../components/common/customFooter';
import BaseLayout from '../components/presentation/baseLayout';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.store = AuthStore();
    }

    render() {
        return (
            <BaseLayout>
                <CustomHeader></CustomHeader>
                <Provider AuthStore={this.store}>
                    <LoginContainer/>
                </Provider>
                <CustomFooter></CustomFooter>
            </BaseLayout>
        );
    }
}
