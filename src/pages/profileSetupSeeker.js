import React, {Component} from 'react'
import {Provider} from 'mobx-react'
import 'antd/dist/antd.css'
import RegistrationRootStore from '../stores/registrationRootStore'
import StepsContentContainer from '../components/container/profile-setup/StepsContainer'
import BaseLayout from '../components/presentation/baseLayout'
import PersonalInformation from "../components/container/profile-setup/personalInformation";
import FlatsharePreferences from "../components/container/profile-setup/flatsharePreferences";

export default class PreferencesSetupSeeker extends Component {
  constructor(props) {
    super(props);
    this.store = RegistrationRootStore()
  }

  render() {
    this.store.maxSteps = steps.length - 1;
    return (
      <Provider store={this.store}>
        <BaseLayout>
          <StepsContentContainer data={steps}/>
        </BaseLayout>
      </Provider>
    )
  }
}

const steps = [
  {
    title: 'Personal Information',
    content: PersonalInformation
  },
  {
    title: 'Flatshare Preferences',
    content: FlatsharePreferences
  }
];
