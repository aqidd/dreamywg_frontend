import React, {Component} from 'react'
import CustomHeader from '../components/common/customHeader';
import CustomFooter from '../components/common/customFooter';
import BaseLayout from '../components/presentation/baseLayout';
import ChoiceContainer from "../components/presentation/profile-setup/ChoiceContainer";

export default class RoleSelection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BaseLayout>
        <CustomHeader/>
        <ChoiceContainer/>
        <CustomFooter/>
      </BaseLayout>
    );
  }
}
