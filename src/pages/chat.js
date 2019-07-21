import React, { Component } from 'react'
import MainLayout from '../components/presentation/mainLayout'
import ChatContainer from '../components/container/chatContainer'
import Store from '../stores/chatStore'
import 'antd/dist/antd.css'
import { Provider } from 'mobx-react'

export default class ChatPage extends Component {
  constructor(props) {
    super(props)
    this.store = Store(this.props.match.params.id)
  }

  render() {
    return (
      <Provider store={this.store}>
        <MainLayout>
          <ChatContainer />
        </MainLayout>
      </Provider>
    )
  }
}
