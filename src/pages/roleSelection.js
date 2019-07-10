import React, {Component} from 'react'
import DefaultHeader from '../components/common/defaultHeader';
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
        <DefaultHeader/>
        <ChoiceContainer/>
        <CustomFooter/>
      </BaseLayout>
    );
  }
}
