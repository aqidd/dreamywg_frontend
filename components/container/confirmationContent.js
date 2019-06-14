import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import 'antd/dist/antd.css'
import TitleContent from "../common/titlecontent";

@inject('ConfirmationStore')
@observer
export default class TestHello extends Component {
  componentDidMount() {
    this.props.ConfirmationStore.verify()
  }

  render() {
    return (
      <div>
        <TitleContent title={this.props.ConfirmationStore.confirmationResult.msg} flex/>
      </div>
    )
  }
}
