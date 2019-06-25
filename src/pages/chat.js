import React, {Component} from 'react'
import CustomHeader from '../components/common/customHeader'
import CustomFooter from '../components/common/customFooter'
import BaseLayout from '../components/presentation/baseLayout'
import ChatContainer from "../components/container/chatContainer"
import initStore from "../stores/roleSelectionStore"
import 'antd/dist/antd.css'
import { Provider } from "mobx-react"


export default class ChatPage extends Component {
  constructor(props) {
    super(props);
    this.store = initStore();
  }

  render() {
    return (
      <Provider ChatStore={this.store}>
        <BaseLayout>
          <CustomHeader/>
            <ChatContainer/>
          <CustomFooter/>
        </BaseLayout>
      </Provider>
    );
  }
}