import React, { Component } from 'react'
import DefaultHeader from '../components/common/defaultHeader'
import CustomFooter from '../components/common/customFooter'
import BaseLayout from '../components/presentation/baseLayout'
import ChatContainer from '../components/container/chatContainer'
import initStore from '../stores/chatStore'
import authStore from '../stores/authStore'
import 'antd/dist/antd.css'
import { Provider } from 'mobx-react'


export default class ChatPage extends Component {
  constructor(props) {
    super(props)
    this.store = initStore()
    this.authStore = authStore()

  }

  render() {
    return (
      <Provider ChatStore={this.store} AuthStore={this.authStore}>
        <BaseLayout>
          <DefaultHeader/>
          <ChatContainer/>
          <CustomFooter/>
        </BaseLayout>
      </Provider>
    )
  }
}
