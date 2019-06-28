import React, {Component} from "react"
import RegisterRootStore from "../stores/registerRootStore"
import {Provider} from "mobx-react"
import ProfileSetupContainer from "../components/container/profileSetupContainer"
import CustomHeader from "../components/common/customHeader"
import CustomFooter from "../components/common/customFooter"
import BaseLayout from "../components/presentation/baseLayout"

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.store = RegisterRootStore()
  }

  render() {
    return (
      <BaseLayout>
        <CustomHeader/>
        <Provider RegisterStore={this.store}>
          <ProfileSetupContainer/>
        </Provider>
        <CustomFooter/>
      </BaseLayout>
    )
  }
}
