import React, {Component} from 'react'
import {Provider} from 'mobx-react'
import 'antd/dist/antd.css'
import StepsContentContainer from '../components/container/profile-setup/StepsContainer'
import BaseLayout from '../components/presentation/baseLayout'
import PersonalInformation from "../components/container/profile-setup/seeker/personalInformation";
import FlatsharePreferences from "../components/container/profile-setup/seeker/flatsharePreferences";
import ProfileSetupStepStore from "../stores/profileSetupStepStore";

export default class ProfileSetupSeeker extends Component {
  constructor(props) {
    super(props);
    this.store = ProfileSetupStepStore(true, steps.length - 1)
  }

  render() {
    return (
      <BaseLayout>
        <Provider store={this.store}>
          <StepsContentContainer data={steps}/>
        </Provider>
      </BaseLayout>
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
