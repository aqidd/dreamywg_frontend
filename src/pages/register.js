import React, { Component } from "react"
import RegisterRootStore from "../stores/registerRootStore"
import { Provider } from "mobx-react"
import RegisterContainer from "../components/container/registerContainer"
import DefaultHeader from "../components/common/defaultHeader"
import CustomFooter from "../components/common/customFooter"
import BaseLayout from "../components/presentation/baseLayout"

export default class Register extends Component {
     constructor(props) {
          super(props)
          this.store = RegisterRootStore()
     }

     render() {
          return (
               <BaseLayout>
                    <DefaultHeader />
                    <Provider RegisterStore={this.store}>
                         <RegisterContainer />
                    </Provider>
                    <CustomFooter />
               </BaseLayout>
          )
     }
}
