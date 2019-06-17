import React, { Component } from 'react'
import RegisterRootStore from '../stores/registerRootStore'
import { Provider } from 'mobx-react'
import RegisterContainer from '../components/container/registerContainer'
import CustomHeader from '../components/container/customHeader';
import CustomFooter from '../components/container/customFooter';
import BaseLayout from '../components/presentation/baseLayout';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.store = RegisterRootStore();
    }

    render() {
        return (
            <BaseLayout>
                <CustomHeader></CustomHeader>
                <Provider RegisterStore={this.store}>
                    <RegisterContainer></RegisterContainer>
                </Provider>
                <CustomFooter></CustomFooter>
            </BaseLayout>
        );
    }
}
