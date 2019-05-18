import React, { Component } from "react"
import initStore from "../stores/indexStore"
import { Provider } from "mobx-react"
import TestHello from '../components/testHello'


export default class Home extends Component {
    constructor(props) {
        super(props)
        this.store = initStore()
    }

    render() {
        return (
            <Provider BaseStore={this.store}>
                <TestHello />
            </Provider>
        )
    }
}
