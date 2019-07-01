import React, { Component } from "react"
import RegisterRootStore from "../stores/registerRootStore"
import { Provider } from "mobx-react"
import RegisterContainer from "../components/container/registerContainer"
import CustomHeader from "../components/common/customHeader"
import CustomFooter from "../components/common/customFooter"
import BaseLayout from "../components/presentation/baseLayout"

export default class Register extends Component {
     constructor(props) {
          super(props)
          this.store = RegisterRootStore()
          try {
               this.userId = this.props.location.search.split('?uid=')[1]
               this.store.userStore.setUserId(this.userId);
          } catch (e) {
               console.error(e);
          }          
     }

     render() {
          return (
               <BaseLayout>
                    <CustomHeader />
                    <Provider RegisterStore={this.store}>
                         <RegisterContainer/>
                    </Provider>
                    <CustomFooter />
               </BaseLayout>
          )
     }
}
