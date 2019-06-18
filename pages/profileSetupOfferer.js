import React, {Component} from 'react'
import {Provider} from 'mobx-react'
import 'antd/dist/antd.css'
import RegistrationRootStore from '../stores/registrationRootStore'
import FlatDetails from '../components/container/profile-setup/flatDetails'
import Flatmates from '../components/container/profile-setup/flatmates'
import FlatmatePreferences from '../components/container/profile-setup/flatmatePreferences'
import StepsContentContainer from '../components/container/profile-setup/StepsContainer'
import BaseLayout from '../components/presentation/baseLayout'

export default class ProfileSetupOfferer extends Component {
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
    title: 'Flat',
    content: FlatDetails
  },
  {
    title: 'Flatmates',
    content: Flatmates
  },
  {
    title: 'Prefs',
    content: FlatmatePreferences
  },
];
