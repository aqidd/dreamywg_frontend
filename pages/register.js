import React, { Component } from 'react'
import initStore from '../stores/registerStore'
import { Provider } from 'mobx-react'
import GeneralInfo from '../components/register/generalInfo';
import styled from 'styled-components'

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.store = initStore();
    }

    render() {
        return (
            <Provider BaseStore={this.store}>
                <GeneralInfo></GeneralInfo>
            </Provider>
        );
    }
}