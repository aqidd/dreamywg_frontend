import React, { Component } from "react"
import RegisterRootStore from "../stores/registerRootStore"
import { Provider } from "mobx-react"
import RegisterContainer from "../components/container/registerContainer"
import BaseLayout from "../components/presentation/baseLayout"

export default class Register extends Component {
     constructor(props) {
          super(props)
          this.store = RegisterRootStore()
     }

     render() {
          return (
               <BaseLayout>
                    <Provider store={this.store}>
                         <RegisterContainer />
                    </Provider>
               </BaseLayout>
          )
     }
}
