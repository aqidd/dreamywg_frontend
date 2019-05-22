import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Button } from 'antd'
import 'antd/dist/antd.css'

@inject('BaseStore')
@observer
export default class TestHello extends Component {
  componentDidMount() {
    this.props.BaseStore.start()
  }
  componentWillMount() {
    this.props.BaseStore.stop()
  }

  render() {
    return (
      <div>
        <Button type="primary">{this.props.BaseStore.helloMsg}</Button>
      </div>
    )
  }
}
