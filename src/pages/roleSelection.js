import React, {Component} from 'react'
import CustomHeader from '../components/common/customHeader'
import CustomFooter from '../components/common/customFooter'
import BaseLayout from '../components/presentation/baseLayout'
import RoleSelection from "../components/presentation/profile-setup/roleSelection"
import 'antd/dist/antd.css'

export default class Register extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BaseLayout>
        <CustomHeader/>
        <RoleSelection/>
        <CustomFooter/>
      </BaseLayout>
    );
  }
}
