import React, { Component } from "react"
import initStore from "../stores/indexStore"
import { Provider } from "mobx-react"
import TestHello from '../components/container/testHello'

import styled from 'styled-components';



export default class Home extends Component {
    constructor(props) {
        super(props)
        this.store = initStore()
    }

    render() {
        return (
            <Provider BaseStore={this.store}>
              <div>
                <Title> Hello </Title>
                <TestHello />
                </div>
            </Provider>
        )
    }
}

