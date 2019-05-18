import React, { Component } from "react"
import { inject, observer } from "mobx-react"

@inject("BaseStore")
@observer
export default class TestHello extends Component {
    componentDidMount() {
        this.props.BaseStore.start()
    }
    componentWillMount() {
        this.props.BaseStore.stop()
    }

    render() {
        return <div>{this.props.BaseStore.helloMsg}</div>
    }
}
