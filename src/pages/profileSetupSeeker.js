import React, {Component} from 'react'
import {Provider} from 'mobx-react'
import 'antd/dist/antd.css'
import RegistrationRootStore from '../stores/registrationRootStore'
import StepsContentContainer from '../components/container/profile-setup/StepsContainer'
import BaseLayout from '../components/presentation/baseLayout'
import PersonalInformation from "../components/container/profile-setup/seeker/personalInformation";
import FlatsharePreferences from "../components/container/profile-setup/seeker/flatsharePreferences";
import DefaultHeader from "../components/common/defaultHeader";

export default class PreferencesSetupSeeker extends Component {
  constructor(props) {
    super(props);
    this.store = RegistrationRootStore(true, steps.length - 1)
  }

  componentDidMount() {
    if (this.store.profileSetupStepStore.status) {
      this.props.history.push('/login')
    }
  }

  render() {
    return (
      <Provider store={this.store}>
        <BaseLayout>
          <DefaultHeader/>
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
