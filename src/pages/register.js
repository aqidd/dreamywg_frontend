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
       //todo: check if needed
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
                    <DefaultHeader />
                    <Provider store={this.store}>
                         <RegisterContainer />
                    </Provider>
                    <CustomFooter />
               </BaseLayout>
          )
     }
}
