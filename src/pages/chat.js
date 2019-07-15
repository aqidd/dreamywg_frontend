import React, { Component } from 'react'
import DefaultHeader from '../components/common/defaultHeader'
import CustomFooter from '../components/common/customFooter'
import BaseLayout from '../components/presentation/baseLayout'
import ChatContainer from '../components/container/chatContainer'
import Store from '../stores/chatStore'
import 'antd/dist/antd.css'
import { Provider } from 'mobx-react'


export default class ChatPage extends Component {
  constructor(props) {
    super(props)
    this.store = Store()

  }

  render() {
    return (
      <Provider store={this.store}>
        <BaseLayout>
          <DefaultHeader/>
          <ChatContainer/>
          <CustomFooter/>
        </BaseLayout>
      </Provider>
    )
  }
}
