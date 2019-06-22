import React, {Component} from 'react'
import CustomHeader from '../components/common/customHeader'
import CustomFooter from '../components/common/customFooter'
import BaseLayout from '../components/presentation/baseLayout'
import RoleSelection from "../components/presentation/profile-setup/roleSelection"
import initStore from "../stores/roleSelectionStore"
import 'antd/dist/antd.css'
import { Provider } from "mobx-react"


export default class RoleSelectionPages extends Component {
  constructor(props) {
    super(props);
    this.store = initStore();
  }

  render() {
    return (
      <Provider RoleSelectionStore={this.store}>
        <BaseLayout>
          <CustomHeader/>
            <RoleSelection/>
          <CustomFooter/>
        </BaseLayout>
      </Provider>
    );
  }
}
